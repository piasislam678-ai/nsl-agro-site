"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function HomePage() {
  const whatsappNumber = "8801922318506";
  const [cart, setCart] = useState<string[]>([]);

  const addToCart = (product: string) => setCart([...cart, product]);

  const checkout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    const message = `Hello NSL Agro Firm, I want to order: ${cart.join(", ")}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`);
  };

  // 1️⃣ Products array with local images
  const products = [
    { name: "Milk Barfi", img: "/products/product1.jpg" },
    { name: "Shahi Jalebi", img: "/products/product2.jpg" },
    { name: "Sweet Boondi", img: "/products/product3.jpg" },
    { name: "Motichur Laddu", img: "/products/product4.jpg" },
    { name: "Regular Sweets", img: "/products/product5.jpg" },
    { name: "Cham Cham", img: "/products/product6.jpg" },
    { name: "Rasmalai", img: "/products/product7.jpg" },
    { name: "Sandesh", img: "/products/product8.jpg" },
    { name: "Rasgulla", img: "/products/product9.jpg" },
    { name: "Curd & Yogurt", img: "/products/product10.jpg" },
    { name: "Paneer", img: "/products/product11.jpg" },
    { name: "Ghee", img: "/products/product12.jpg" },
    { name: "Fresh Milk", img: "/products/product13.jpg" },
  ];

  return (
    <div className="bg-white text-gray-800 min-h-screen font-sans">
      {/* Header */}
      <header className="p-6 shadow-md flex justify-between items-center bg-white sticky top-0 z-10">
        <h1 className="text-3xl font-bold text-yellow-700">NSL Agro Firm</h1>
        <div className="text-lg">Cart: {cart.length}</div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-yellow-50 via-pink-50 to-pink-100">
        <h2 className="text-5xl font-bold mb-4">Pure Freshness, Trusted Taste</h2>
        <p className="text-xl text-gray-700">Premium dairy & Bengali sweets delivered in Khulna</p>
      </section>

      {/* 2️⃣ Products Grid */}
      <section className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <div key={i} className="border rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
            <Image
              src={p.img}
              alt={p.name}
              width={250}
              height={250}
              className="h-40 w-full object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <button
                className="mt-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
                onClick={() => addToCart(p.name)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Checkout Button */}
      <div className="text-center p-6">
        <button
          className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-700 transition-colors"
          onClick={checkout}
        >
          Checkout via WhatsApp
        </button>
      </div>

      {/* Google Maps */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Location</h2>
        <iframe
          src="https://maps.google.com/maps?q=Khulna%20Bangladesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-64 rounded-xl shadow-md"
          allowFullScreen
        />
      </section>

      {/* Customer Reviews */}
      <section className="p-10 bg-pink-50 text-center">
        <h2 className="text-3xl font-bold mb-6">Customer Reviews</h2>
        <p className="mb-2">⭐️⭐️⭐️⭐️⭐️ "Best sweets in Khulna!"</p>
        <p className="mb-2">⭐️⭐️⭐️⭐️⭐️ "Fresh milk and amazing taste."</p>
        <p className="mb-2">⭐️⭐️⭐️⭐️⭐️ "Premium quality, always fresh!"</p>
      </section>

      {/* Wholesale Inquiry */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Wholesale Inquiry</h2>
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=I%20want%20wholesale%20details`)}
        >
          Contact for Wholesale
        </button>
        <p className="mt-2 text-gray-600">Minimum order: 5kg sweets or 10kg milk (Khulna City)</p>
      </section>

      {/* Footer */}
      <footer className="p-6 text-center bg-gray-100">
        <p>Best Bengali sweets and dairy in Khulna | NSL Agro Firm</p>
        <p>© 2026 NSL Agro Firm</p>
      </footer>
    </div>
  );
}