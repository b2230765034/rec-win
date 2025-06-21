import React, { useState } from "react";
import WalletConnect from "./components/WalletConnect";
import Scan from "./pages/Scan";

export default function App() {
  const [wallet, setWallet] = useState<string | null>(null);

  if (!wallet) return <WalletConnect onConnect={setWallet} />;

  return (
    <div>
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>♻️ Recycle-to-Earn App</h2>
      <Scan wallet={wallet} />
      {/* <Payment wallet={wallet} /> */}
    </div>
  );
}
