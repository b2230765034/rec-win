import React, { useState } from "react";
import freighterApi from "@stellar/freighter-api";

// connectFreighter fonksiyonunu burada da kullanabiliriz
export async function connectFreighter(passive = false) {
  if (!freighterApi.isConnected()) {
    console.warn("Freighter extension is not connected or installed.");
    return null;
  }

  try {
    if (!passive) {
      await freighterApi.setAllowed();
    }
    const { address } = await freighterApi.getAddress();
    return address;
  } catch (error) {
    console.error("Freighter connection failed:", error);
    return null;
  }
}

type WalletConnectProps = {
  onConnect: (walletAddress: string) => void;
};

export default function WalletConnect({ onConnect }: WalletConnectProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleConnect() {
    setLoading(true);
    const address = await connectFreighter();
    setLoading(false);

    if (address) {
      onConnect(address);
    } else {
      setError("Failed to connect Freighter wallet.");
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <button onClick={handleConnect} disabled={loading}>
        {loading ? "Connecting..." : "Connect Freighter Wallet"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
