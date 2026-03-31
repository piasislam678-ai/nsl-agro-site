"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaWhatsapp, FaTrash } from "react-icons/fa";
import { useState } from "react";

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
  { id: 10, name: "Curd & Yogurt", image: "/products/product10.jpg", price: 200, unit: "per kg" },
  { id: 11, name: "Paneer", image: "/products/product11.jpg", price: 420, unit: "per kg" },
  { id: 12, name: "Ghee", image: "/products/product12.jpg", price: 1250, unit: "per kg" },
  { id: 13, name: "Fresh Milk", image: "/products/product13.jpg", price: 90, unit: "per liter" },
];

export default function HomePage() {
  const [cart, setCart] = useState<any[]>([]);
  const [quantities, setQuantities] = useState<any>({});

  const handleQuantityChange = (id: number, value: string) => {
    setQuantities({
      ...quantities,
      [id]: parseFloat(value),
    });
  };

  const addToCart = (product: any) => {
    const qty = quantities[product.id] || 1;
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, qty: item.qty + qty, total: (item.qty + qty) * item.price }
          : item
      ));
    } else {
      setCart([...cart, { ...product, qty: qty, total: product.price * qty }]);
    }
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.total, 0);

  const generateWhatsAppLink = () => {
    let message = "🛒 Order from NSL Agro Firm:%0A%0A";
    cart.forEach(item => {
      message += `• ${item.name}%0AQty: ${item.qty} kg%0APrice: ৳${item.total}%0A%0A`;
    });
    message += `Total: ৳${total}%0A`;
    message += `Payment via bKash or Bank Transfer`;
    return `https://wa.me/8801922318506?text=${message}`;
  };

  return (
    <main className="bg-black text-white">

      {/* Navbar */}
      <header className="bg-black border-b border-pink-400 p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-pink-400">NSL Agro Firm</h1>
        <nav className="space-x-6">
          <a href="#" className="hover:text-purple-300">Home</a>
          <a href="#products" className="hover:text-purple-300">Products</a>
          <a href="#wholesale" className="hover:text-purple-300">Wholesale</a>
          <a href="#contact" className="hover:text-purple-300">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="h-80 flex items-center justify-center bg-gradient-to-r from-purple-800 to-pink-600">
        <h2 className="text-5xl font-bold text-center">Premium Sweets & Dairy</h2>
      </section>

      {/* Products */}
      <section id="products" className="p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-pink-400">Our Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map(p => (
            <div key={p.id} className="bg-gray-900 rounded-xl p-4 text-center shadow-lg">
              <Image src={p.image} alt={p.name} width={300} height={300} />
              <h3 className="mt-3 font-semibold">{p.name}</h3>
              <p className="text-pink-300">
                ৳{p.price} <span className="text-sm text-gray-400">{p.unit}</span>
              </p>

              <select
                onChange={(e) => handleQuantityChange(p.id, e.target.value)}
                className="mt-2 p-2 rounded bg-black text-white border border-pink-400"
              >
                <option value="0.5">500g</option>
                <option value="1">1 kg</option>
                <option value="2">2 kg</option>
              </select>

              <button
                onClick={() => addToCart(p)}
                className="mt-2 bg-pink-500 px-4 py-2 rounded hover:bg-purple-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Cart */}
      {cart.length > 0 && (
        <div className="fixed right-4 top-24 bg-gray-800 p-4 rounded-lg w-80 shadow-lg">
          <h3 className="font-bold mb-2 text-pink-400">Cart</h3>
          {cart.map(item => (
            <div key={item.id} className="mb-2">
              <p>{item.name}</p>
              <div className="flex items-center gap-2 mt-1">
                <button
                  onClick={() =>
                    setCart(cart.map(i =>
                      i.id === item.id && i.qty > 0.5
                        ? { ...i, qty: i.qty - 0.5, total: (i.qty - 0.5) * i.price }
                        : i
                    ))
                  }
                  className="px-2 bg-purple-600 rounded"
                >-</button>
                <span>{item.qty} kg</span>
                <button
                  onClick={() =>
                    setCart(cart.map(i =>
                      i.id === item.id
                        ? { ...i, qty: i.qty + 0.5, total: (i.qty + 0.5) * i.price }
                        : i
                    ))
                  }
                  className="px-2 bg-pink-600 rounded"
                >+</button>
              </div>
              <p className="text-sm text-pink-400">৳{item.total}</p>
            </div>
          ))}

          <p className="mt-2 font-bold">Total: ৳{total}</p>

          {/* Payment Options */}
          <div className="mt-3 text-sm bg-black p-3 rounded border border-pink-400 space-y-2">
            <p className="text-pink-400 font-semibold">Payment Options:</p>
            <div className="bg-pink-900 p-2 rounded">
              <p className="font-bold">bKash Payment</p>
              <p>Number: +8801922318506</p>
              <p className="text-xs text-gray-300">Send money and share screenshot on WhatsApp</p>
            </div>
            <div className="bg-purple-900 p-2 rounded">
              <p className="font-bold">Bank Transfer</p>
              <p>Bank: Brac Bank PLC</p>
              <p>Account Name: Nur Mohammad Musa</p>
              <p>Account No: 1073840710001</p>
              <p className="text-xs text-gray-300">Transfer and send proof on WhatsApp</p>
            </div>
          </div>

          <a
            href={generateWhatsAppLink()}
            target="_blank"
            className="block mt-3 bg-green-600 text-center py-2 rounded"
          >
            Send Order via WhatsApp
          </a>
        </div>
      )}

      {/* Wholesale */}
      <section id="wholesale" className="bg-gradient-to-r from-purple-900 to-pink-700 p-8 text-center">
        <h2 className="text-3xl font-bold">Wholesale Orders</h2>
        <p className="mt-2">Contact us for bulk pricing.</p>
        <a href="https://wa.me/8801922318506" className="mt-3 inline-block bg-black px-5 py-2 rounded">WhatsApp Us</a>
      </section>

      {/* Contact */}
      <section id="contact" className="p-8 text-center">
        <h2 className="text-3xl font-bold text-pink-400">Contact</h2>
        <p>📞 +8801922318506</p>
        <p>📧 piasislam678@gmail.com</p>
        <p>📍 Khulna, Bangladesh</p>
      </section>

      {/* Map */}
      <iframe
        src="https://maps.google.com/maps?q=Khulna%20Bangladesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
        className="w-full h-64"
      />

      {/* Footer */}
      <footer className="bg-black border-t border-pink-400 text-center p-4">
        <p>© 2026 NSL Agro Firm</p>
      </footer>

      {/* Floating Buttons */}
      <a href="https://wa.me/8801922318506" className="fixed bottom-6 left-6 bg-green-600 p-4 rounded-full">
        <FaWhatsapp />
      </a>

      <a href="https://www.facebook.com/profile.php?id=61575425881245" className="fixed bottom-6 right-6 bg-blue-600 p-4 rounded-full">
        <FaFacebookF />
      </a>

    </main>
  );
}