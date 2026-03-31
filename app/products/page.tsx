"use client";

import Image from "next/image";
import Link from "next/link";

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

export default function HomePage() {
  return (
    <>
      {/* ✅ Google Logo / SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "NSL Agro Firm",
            "url": "https://nsl-agro.vercel.app/",
            "logo": "https://nsl-agro.vercel.app/logo.png"
          }),
        }}
      />

      {/* ✅ Your Homepage UI */}
      <main className="min-h-screen flex flex-col items-center p-8 bg-gray-50">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Our Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Link key={index} href="/products">
              <div className="flex flex-col items-center cursor-pointer bg-white p-4 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={250}
                  height={250}
                  className="rounded-lg"
                />
                <h2 className="mt-4 text-xl font-semibold text-gray-700 text-center">
                  {product.name}
                </h2>
              </div>
            </Link>
          ))}
        </div>

        {/* ✅ Step 2: Facebook Button */}
        <div className="mt-10 text-center">
          <a
            href="https://www.facebook.com/share/1CWzeybtJa/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            Visit our Facebook Page
          </a>
        </div>
      </main>
    </>
  );
}