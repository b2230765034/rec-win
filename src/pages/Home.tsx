import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-6 max-w-md mx-auto text-center bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-extrabold mb-8 text-blue-600 drop-shadow-sm">♻️ Geri Dönüşüm Teşvik Uygulaması</h2>
      <p className="mb-6 text-lg text-gray-700">
        Geri dönüşüm yaparak token kazanabilir ve bu tokenları anlaşmalı marketlerde harcayabilirsiniz.
      </p>
      <Link
        to="/scan"
        className="block mb-4 bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
      >
        QR Kod Tara & Puan Kazan
      </Link>
      <Link
        to="/payment"
        className="block bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
      >
        Token ile Ödeme Yap
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
