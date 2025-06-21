import React from "react";
import { Link } from "react-router-dom";

/**
 * Home component that serves as the main landing page for the recycling incentive application.
 * It provides information on how users can earn tokens through recycling and spend them at partner markets.
 * Includes a link to the scanning page where users can scan QR codes to earn points.
 */

export default function Home() {
  return (
    <div className="p-4 max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold mb-6 text-pink-600">♻️ Geri Dönüşüm Teşvik Uygulaması</h2>
      <p className="mb-4">
        Geri dönüşüm yaparak token kazanabilir ve bu tokenları anlaşmalı marketlerde harcayabilirsiniz.
      </p>
      <Link
        to="/scan"
        className="bg-pink-500 text-white px-6 py-3 rounded hover:bg-pink-600 font-semibold"
      >
        QR Kod Tara & Puan Kazan
      </Link>
    </div>
  );
}
