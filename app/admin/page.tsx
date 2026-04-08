"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

// ✅ Product Type (ONLY ONCE)
type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function AdminPage() {
  // ✅ State
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
  name: "",
  price: "",
});

const [imageFile, setImageFile] = useState<File | null>(null);

  // ✅ Fetch products
  const fetchProducts = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("products").select("*");

    if (error) {
      console.error("Fetch error:", error.message);
    } else {
      setProducts((data as Product[]) || []);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ✅ Add product
  const addProduct = async () => {
  if (!form.name || !form.price || !imageFile) {
    alert("Please fill all fields");
    return;
  }

  // Upload image
  const fileName = Date.now() + "-" + imageFile.name;

  const { error: uploadError } = await supabase.storage
    .from("products")
    .upload(fileName, imageFile);

  if (uploadError) {
    alert("Image upload failed");
    return;
  }

  // Get public URL
  const { data } = supabase.storage
    .from("products")
    .getPublicUrl(fileName);

  const imageUrl = data.publicUrl;

  // Save product
  const { error } = await supabase.from("products").insert([
    {
      name: form.name,
      price: Number(form.price),
      image: imageUrl,
    },
  ]);

  if (error) {
    alert("Error adding product");
    console.error(error.message);
  } else {
    setForm({ name: "", price: "" });
    setImageFile(null);
    fetchProducts();
  }
};

  // ✅ Delete product
const deleteProduct = async (id: number) => {
  const { error } = await supabase.from("products").delete().eq("id", id);

  if (error) {
    alert("Error deleting product");
    console.error(error.message);
  } else {
    fetchProducts();
  }
};

// ✅ UPDATE PRODUCT (OUTSIDE, SEPARATE)
const updateProduct = async (id: number, name: string, price: number) => {
  const { error } = await supabase
    .from("products")
    .update({ name, price })
    .eq("id", id);

  if (error) {
    alert("Update failed");
    console.error(error.message);
  } else {
    fetchProducts();
  }
};

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">Admin Panel</h1>

      {/* ADD PRODUCT */}
      <div className="bg-white p-6 rounded-2xl shadow-lg mb-8 max-w-xl mx-auto">
        <h2 className="font-semibold mb-4 text-lg">Add Product</h2>

        <input
          placeholder="Product Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border p-2 w-full mb-3 rounded"
        />

        <input
          placeholder="Price"
          type="number"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          className="border p-2 w-full mb-3 rounded"
        />

        <div
  onClick={() => document.getElementById("fileInput")?.click()}
  onDrop={(e) => {
    e.preventDefault();
    setImageFile(e.dataTransfer.files[0]);
  }}
  onDragOver={(e) => e.preventDefault()}
  className="border-2 border-dashed p-6 text-center mb-3 cursor-pointer rounded-lg"
>
  Drag & Drop OR Click to Upload
</div>

<input
  id="fileInput"
  type="file"
  hidden
  onChange={(e) => setImageFile(e.target.files?.[0] || null)}
/>

        <button
          onClick={addProduct}
          className="bg-black hover:bg-gray-800 transition text-white px-4 py-2 rounded w-full"
        >
          Add Product
        </button>
      </div>

      {/* PRODUCT LIST */}
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white p-4 rounded-2xl shadow hover:shadow-xl transition"
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={p.image}
                  className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              <h3 className="font-semibold mt-3 text-gray-900">
                {p.name}
              </h3>

              <p className="text-blue-600 font-medium">৳{p.price}</p>
  <button
  onClick={() => {
    const newName = prompt("Enter new name", p.name);
    const newPrice = prompt("Enter new price", p.price.toString());

    if (newName && newPrice) {
      updateProduct(p.id, newName, Number(newPrice));
    }
  }}
  className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded w-full"
>
  Edit
</button>
              <button
                onClick={() => deleteProduct(p.id)}
                className="mt-3 bg-red-500 hover:bg-red-600 transition text-white px-3 py-1 rounded w-full"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}