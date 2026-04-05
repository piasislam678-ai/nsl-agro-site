"use client";

import Image from "next/image";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import React, { useState, useEffect } from "react";

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

export default function HomePage() {
  const [cart, setCart] = useState<any[]>([]);
  const [quantities, setQuantities] = useState<any>({});
  const [showCart, setShowCart] = useState(false);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    contact: "",
    email: "",
    address: "",
  });

  // Initialize quantities
  useEffect(() => {
    const initialQuantities: any = {};
    products.forEach(p => (initialQuantities[p.id] = 1));
    setQuantities(initialQuantities);
  }, []);

  // Handle input change in form
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCustomerInfo({ ...customerInfo, [e.target.name]: e.target.value });
  };

  const handleOrderSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
  e.preventDefault();

  const message = `
🛒 New Order - NSL AGRO

Customer Info:
Name: ${customerInfo.name}
Phone: ${customerInfo.contact}
Email: ${customerInfo.email}
Address: ${customerInfo.address}

Order Details:
${cart.map(item => `• ${item.name} - Qty: ${item.qty} - Price: ৳${item.total}`).join('\n')}

Total: ৳${total}
`;

  const whatsappURL = `https://wa.me/8801922318506?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, "_blank");

  alert("Redirecting to WhatsApp to complete your order...");

  // Clear cart & form
  setCart([]);
  setShowCart(false);
  setShowCheckoutForm(false);
  setCustomerInfo({ name: "", contact: "", email: "", address: "" });
};

  // Save cart in localStorage
  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Handle quantity change
  const handleQuantityChange = (id: number, value: string) => {
    const qty = parseFloat(value);
    setQuantities({ ...quantities, [id]: qty });

    const existing = cart.find(item => item.id === id);
    if (existing) {
      setCart(
        cart.map(item =>
          item.id === id ? { ...item, qty, total: qty * item.price } : item
        )
      );
    }
  };

  // Add product to cart
  const addToCart = (product: any) => {
    setShowCart(true);

    const qty = quantities[product.id] || 1;
    const existing = cart.find(i => i.id === product.id);

    if (existing) {
      setCart(
        cart.map(i =>
          i.id === product.id
            ? { ...i, qty: i.qty + qty, total: (i.qty + qty) * i.price }
            : i
        )
      );
    } else {
      setCart([...cart, { ...product, qty, total: product.price * qty }]);
    }
  };

  const removeFromCart = (id: number) => setCart(cart.filter(i => i.id !== id));

  const increaseCartQty = (id: number) => {
  setCart(
    cart.map(item =>
      item.id === id
        ? {
            ...item,
            qty: item.qty + 1,
            total: (item.qty + 1) * item.price,
          }
        : item
    )
  );
};

const decreaseCartQty = (id: number) => {
  setCart(
    cart
      .map(item =>
        item.id === id
          ? {
              ...item,
              qty: item.qty - 1,
              total: (item.qty - 1) * item.price,
            }
          : item
      )
      .filter(item => item.qty > 0)
  );
};

  const total = cart.reduce((sum, item) => sum + item.total, 0);

  const generateWhatsAppLink = () => {
  let message = "🛒 *New Order - NSL AGRO*%0A%0A";

  message += "*Customer Info*%0A";
  message += `Name: ${customerInfo.name}%0A`;
  message += `Phone: ${customerInfo.contact}%0A`;
  message += `Email: ${customerInfo.email}%0A`;
  message += `Address: ${customerInfo.address}%0A%0A`;

  message += "*Order Details*%0A";
  cart.forEach(item => {
    message += `• ${item.name}%0AQty: ${item.qty} kg%0APrice: ৳${item.total}%0A%0A`;
  });

  message += `*Total: ৳${total}*`;

  return `https://wa.me/8801922318506?text=${message}`;
};

  return (
    <main className="bg-[#f8fafc] text-[#0f172a] font-sans">
      {/* Navbar */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 p-4 flex justify-between items-center shadow-sm sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-gray-900">NSL AGRO</h1>
        <div className="flex items-center gap-4">
          <nav className="space-x-4 hidden md:block">
            <a href="#" className="hover:text-blue-600 transition">Home</a>
            <a href="#products" className="hover:text-blue-600 transition">Products</a>
          </nav>
          <button
            onClick={() => setShowCart(!showCart)}
            className="bg-[#0f172a] text-white px-4 py-2 rounded-full font-semibold hover:bg-black transition shadow-md"
          >
            Cart ({cart.length})
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative w-full h-[600px]">
        <img src="/banner.jpg" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center" />
      </section>

      {/* Products */}
      <section id="products" className="p-8 bg-gray-50">
        <h2 className="text-4xl text-center font-extrabold text-gray-900 mb-8">Our Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map(p => (
            <div key={p.id} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 text-center">
              <Image src={p.image} alt={p.name} width={300} height={300} className="rounded-xl" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{p.name}</h3>
              <p className="text-blue-600 font-medium mb-2">৳{p.price}</p>

              <select
                value={quantities[p.id] || 1}
                onChange={(e) => handleQuantityChange(p.id, e.target.value)}
                className="mt-2 p-2 border border-gray-300 rounded-md w-full text-gray-900"
              >
                <option value="0.5">500g</option>
                <option value="1">1kg</option>
                <option value="2">2kg</option>
                <option value="3">3kg</option>
                <option value="4">4kg</option>
                <option value="5">5kg</option>
              </select>

              <button
                onClick={() => addToCart(p)}
                className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md font-semibold w-full hover:bg-blue-700 transition"
              >
                Add
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Cart */}
      {showCart && (
        <div className="fixed right-4 top-20 bg-white p-4 rounded-2xl w-80 shadow-2xl text-sm font-sans z-50">
          <h3 className="text-gray-900 text-lg font-semibold mb-3">Your Cart</h3>

          {cart.length === 0 ? (
            <p className="text-gray-500 text-sm">Your cart is empty.</p>
          ) : (
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between items-center border-b border-gray-200 pb-2">
                  <div className="flex items-center gap-3">
                    <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded"/>
                    <div className="flex flex-col">
                      <span className="text-gray-900 font-medium truncate">{item.name}</span>
                      <div className="flex items-center gap-2 mt-1">
  <button
    onClick={() => decreaseCartQty(item.id)}
    className="bg-gray-200 px-2 py-0.5 rounded text-sm font-bold hover:bg-gray-300"
  >
    -
  </button>

  <span className="text-gray-700 text-sm">
    {item.qty} kg
  </span>

  <button
    onClick={() => increaseCartQty(item.id)}
    className="bg-gray-200 px-2 py-0.5 rounded text-sm font-bold hover:bg-gray-300"
  >
    +
  </button>
</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-gray-900 font-semibold">৳{item.total}</span>
                    <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-xs mt-1 hover:text-red-700">
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-3 border-t border-gray-200 pt-3">
            <p className="flex justify-between font-semibold text-gray-900 mb-3">
              <span>Total:</span> <span>৳{total}</span>
            </p>

            {!showCheckoutForm && cart.length > 0 && (
              <button
                onClick={() => setShowCheckoutForm(true)}
                className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
              >
                Checkout
              </button>
            )}

            {showCheckoutForm && (
              <form className="mt-3 space-y-3 text-gray-900" onSubmit={handleOrderSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={customerInfo.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  name="contact"
                  placeholder="Contact Number"
                  value={customerInfo.contact}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={customerInfo.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <textarea
                  name="address"
                  placeholder="Address"
                  value={customerInfo.address}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 rounded-md font-semibold hover:bg-green-700 transition"
                >
                  Place Order
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      
{/* Wholesale, Contact, Map Section */}
<section className="flex flex-col md:flex-row gap-6 p-8 bg-gray-50">
  {/* Wholesale */}
  <div className="flex-1 bg-white p-10 text-center rounded-2xl shadow-lg hover:shadow-2xl transform transition hover:scale-105">
    <h2 className="text-4xl font-extrabold mb-4 text-gray-900">Wholesale Orders</h2>
    <p className="text-gray-700 mb-6">Contact us for bulk pricing.</p>
    <a
      href="https://wa.me/8801922318506"
      className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition"
    >
      WhatsApp Us
    </a>
  </div>

  {/* Contact */}
  <div className="flex-1 bg-white p-10 text-center rounded-2xl shadow-lg hover:shadow-2xl transform transition hover:scale-105">
    <h2 className="text-4xl font-extrabold mb-4 text-gray-900">Contact</h2>
    <p className="text-gray-700 mb-2">📞 +8801922318506</p>
    <p className="text-gray-700 mb-2">📧 piasislam678@gmail.com</p>
    <p className="text-gray-700 mb-6">📍 Khulna, Bangladesh</p>
    <a
      href="https://wa.me/8801922318506"
      className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition"
    >
      WhatsApp Us
    </a>
  </div>

  {/* Map */}
  <div className="flex-1 bg-white p-10 text-center rounded-2xl shadow-lg hover:shadow-2xl transform transition hover:scale-105">
    <h2 className="text-4xl font-extrabold mb-4 text-gray-900">Location</h2>
    <iframe
      src="https://www.google.com/maps?q=Khulna,Bangladesh&output=embed"
      className="w-full h-64 rounded-lg border-0"
    ></iframe>
  </div>
</section>

{/* Footer */}
<footer className="text-center p-6 border-t border-gray-200 bg-white text-gray-900 font-sans">
  © 2026 NSL AGRO
</footer>

{/* Floating Buttons */}
<div>
  {/* WhatsApp */}
  <div className="group relative">
    <a
      href="https://wa.me/8801922318506"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 bg-[#25D366] p-4 rounded-full shadow-lg hover:scale-110 transition duration-300"
    >
      <FaWhatsapp className="text-white text-xl" />
    </a>
    <span className="absolute left-14 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
      WhatsApp Us
    </span>
  </div>

  {/* Facebook */}
  <div className="group relative">
    <a
      href="https://www.facebook.com/profile.php?id=61575425881245"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#1877F2] p-4 rounded-full shadow-lg hover:scale-110 transition duration-300"
    >
      <FaFacebookF className="text-white text-xl" />
    </a>
    <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
      Visit Facebook
    </span>
  </div>
</div>
</main>
  );
}