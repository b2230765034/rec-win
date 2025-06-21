import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import WalletConnect from "./components/WalletConnect";
import Home from "./pages/Home";
import Scan from "./pages/Scan";
import Payment from "./pages/Payment";
// import Market from "./components/Market";


// const demoItems = [
//   {
//     id: 1,
//     name: "Organik Elma",
//     location: "İzmir - EkoBahçe",
//     image: "/apple.png",
//     price: 5,
//   },
//   {  
//     id: 2,
//     name: "Doğal Zeytinyağı",
//     location: "Ayvalık - ZeytinTarlası",
//     image: "/zeytinyagi.jpg",
//     price: 15,
//   },
//   {
//     id: 3,
//     name: "Taze Ispanak",
//     location: "Bursa - YeşilTarla",
//     image: "/ispanak.jpg",
//     price: 3,
//   },
// ];

export default function App() {
  const [wallet, setWallet] = useState<string | null>(null);

  if (!wallet) return <WalletConnect onConnect={setWallet} />;

  return (
    <Router>
      <div className="max-w-3xl mx-auto p-4">
      <div className="min-h-screen bg-gray-0">
      <Payment />
    </div>
        <h2 className="text-center text-3xl font-bold mb-6 text-pink-600">♻️ Recycle-to-Earn App</h2>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scan" element={<Scan wallet={wallet} />} />
          
          {/* Tanımlı olmayan yolları ana sayfaya yönlendir */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}
