"use client";

import Image from "next/image";
import Link from "next/link";

// Same products list as homepage
const products = [
  { id: 1, name: "Milk Barfi", image: "/products/product1.jpg", price: 500, unit: "per kg" },
  { id: 2, name: "Shahi Jalebi", image: "/products/product2.jpg", price: 300, unit: "per kg" },
  { id: 3, name: "Sweet Boondi", image: "/products/product3.jpg", price: 250, unit: "per kg" },
  { id: 4, name: "Motichur Laddu", image: "/products/product4.jpg", price: 450, unit: "per kg" },
  { id: 5, name: "Regular Sweets", image: "/products/product5.jpg", price: 350, unit: "per kg" },
  { id: 6, name: "Cham Cham", image: "/products/product6.jpg", price: 400, unit: "per kg" },
  { id: 7, name: "Rasmalai", image: "/products/product7.jpg", price: 500, unit: "per kg" },
  { id: 8, name: "Sandesh", image: "/products/product8.jpg", price: 410, unit: "per kg" },
  { id: 9, name: "Rasgulla", image: "/products/product9.jpg", price: 400, unit: "per kg" },
  { id: 10, name: "Curd", image: "/products/product10.jpg", price: 350, unit: "per kg" },
  { id: 11, name: "Paneer", image: "/products/product11-new.jpg", price: 600, unit: "per kg" },
  { id: 12, name: "Ghee", image: "/products/product12.jpg", price: 1250, unit: "per kg" },
  { id: 13, name: "Fresh Milk", image: "/products/product13-new.jpg", price: 90, unit: "per liter"},
  { id: 14, name: "Reshmi Jalebi", image: "/products/product14.jpg", price: 250, unit: "per kg" },
  { id: 15, name: "Yogurt", image: "/products/product15.jpg", price: 200, unit: "per kg" },
  { id: 16, name: "Shahi Jarda", image: "/products/product16.jpg", price: 410, unit: "per kg" },
  { id: 17, name: "Sitavog", image: "/products/product17.jpg", price: 400, unit: "per kg" },
  { id: 18, name: "Sana Polaw", image: "/products/product18.jpg", price: 450, unit: "per kg" },
  { id: 19, name: "Kaju Katli", image: "/products/product19.jpg", price: 420, unit: "per kg" },
  { id: 20, name: "Gulab Jamun", image: "/products/product20.jpg", price: 350, unit: "per kg" },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Our Full Product List
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-4 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={250}
              height={250}
              className="rounded-lg"
              loading="eager"
            />
            <h2 className="mt-4 text-xl font-semibold text-gray-700 text-center">
              {product.name}
            </h2>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link href="/">
          <button className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition">
            Back to Home
          </button>
        </Link>
      </div>
    </main>
  );
}