import React from "react";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div className="p-6 max-w-md mx-auto text-center bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-extrabold mb-8 text-blue-600 drop-shadow-sm">♻️ Recycling Incentive App</h2>
      <p className="mb-6 text-lg text-gray-700">
        Earn tokens by recycling and spend these tokens at partnered marketplaces.
      </p>
      <Link
        to="/scan"
        className="block mb-4 bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
      >
        Scan QR Code & Earn Points
      </Link>
      <Link
        to="/payment"
        className="block bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
      >
        Pay with Tokens
      </Link>
    </div>
  );
}


<Link
  to="/market"
  className="mt-4 inline-block bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 font-semibold"
>
  Marketi Gör
</Link>
