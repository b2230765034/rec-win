import React, { useState } from "react";

export default function Payment() {
  const [amount, setAmount] = useState<string>("");
  const [paymentStatus, setPaymentStatus] = useState<string>("");

  const handlePay = () => {
    setPaymentStatus("Ödeme işleniyor... (buraya Freighter ve smart contract entegrasyonu gelecek)");
    // TODO: Freighter ile ödeme işlemini buraya ekle
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-pink-600 font-bold mb-4">Ödeme Yap</h2>

      <input
        type="number"
        min="0"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Ödenecek miktar"
        className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
      />

      <button
        onClick={handlePay}
        className="bg-pink-500 text-white px-6 py-3 rounded hover:bg-pink-600 font-semibold w-full"
      >
        Öde
      </button>

      {paymentStatus && <p className="mt-4 text-center text-gray-700">{paymentStatus}</p>}
    </div>
  );
}
