import Image from "next/image";

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

export default function ProductsList() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product, index) => (
        <div key={index} className="border p-2 text-center">
          <Image
            src={product.img}
            alt={product.name}
            width={150}
            height={150}
          />
          <p className="mt-2">{product.name}</p>
        </div>
      ))}
    </div>
  );
}