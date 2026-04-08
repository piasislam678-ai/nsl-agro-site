"use client";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* SIDEBAR */}
      <div className="w-64 bg-blue-900 text-white p-5">
        <h2 className="text-xl font-bold mb-6">NSL Agro</h2>

        <ul className="space-y-3">
          <li className="bg-blue-700 p-2 rounded">Dashboard</li>
          <li>Products</li>
          <li>Orders</li>
          <li>Customers</li>
        </ul>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-6">

        {/* TOP */}
        <h1 className="text-2xl font-bold mb-6">
          Welcome back 👋
        </h1>

        {/* STATS */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded shadow">Products: 48</div>
          <div className="bg-white p-4 rounded shadow">Orders: 128</div>
          <div className="bg-white p-4 rounded shadow">Customers: 1240</div>
          <div className="bg-white p-4 rounded shadow">Revenue: ৳85,420</div>
        </div>

        {/* CHART PLACEHOLDER */}
        <div className="bg-white p-6 rounded shadow mb-6">
          Sales Chart (Coming soon)
        </div>

        {/* LIST */}
        <div className="bg-white p-6 rounded shadow">
          Recent Products (Coming soon)
        </div>

      </div>
    </div>
  );
}