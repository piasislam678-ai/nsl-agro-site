"use client";

import Image from "next/image";
import Link from "next/link";

// Same products list as homepage
const products = [
  { name: "Milk Barfi", image: "/products/product1.jpg" },
  { name: "Shahi Jalebi", image: "/products/product2.jpg" },
  { name: "Sweet Boondi", image: "/products/product3.jpg" },
  { name: "Motichur Laddu", image: "/products/product4.jpg" },
  { name: "Regular Sweets", image: "/products/product5.jpg" },
  { name: "Cham Cham", image: "/products/product6.jpg" },
  { name: "Rasmalai", image: "/products/product7.jpg" },
  { name: "Sandesh", image: "/products/product8.jpg" },
  { name: "Rasgulla", image: "/products/product9.jpg" },
  { name: "Curd & Yogurt", image: "/products/product10.jpg" },
  { name: "Paneer", image: "/products/product11.jpg" },
  { name: "Ghee", image: "/products/product12.jpg" },
  { name: "Fresh Milk", image: "/products/product13.jpg" },
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