import React, { useState } from "react";
import { connectFreighter } from "../utils/freighter";


type WalletConnectProps = {
  onConnect: (walletAddress: string) => void;
};

export default function WalletConnect({ onConnect }: WalletConnectProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleConnect() {
    setLoading(true);
    setError(null);

    try {
      const address = await connectFreighter();

      if (address) {
        onConnect(address);
      } else {
        setError("Freighter cüzdanına bağlanılamadı. Lütfen uzantı izinlerini kontrol edin.");
      }
    } catch (e) {
      setError("Bağlanırken bir hata oluştu: " + (e as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 text-center p-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">🚀 Freighter Cüzdanını Bağla</h2>
      <button
        onClick={handleConnect}
        disabled={loading}
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300"
      >
        {loading ? "Bağlanıyor..." : "Connect Freighter Wallet "}
      </button>
      {error && <p className="text-red-600 mt-4">{error}</p>}
    </div>
  );
}

