import React, { useState } from "react";
import QRScanner from "../components/QRScanner";

type ScanProps = {
  wallet: string | null;
};

export default function Scan({ wallet }: ScanProps) {
  const [material, setMaterial] = useState<string | null>(null);

  return (
    <div className="p-4 max-w-md mx-auto">
      {!material ? (
        <QRScanner onMaterialDetected={(mat: string) => setMaterial(mat)} wallet={wallet} />
      ) : (
        <div>
          <h2 className="text-pink-600 font-bold mb-4">Malzeme seçildi!</h2>
          <p>
            <b>{material.charAt(0).toUpperCase() + material.slice(1)}</b> malzemesi algılandı.
          </p>
          <button
            onClick={() => setMaterial(null)}
            className="mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
          >
            Yeni Tarama Yap
          </button>
        </div>
      )}
    </div>
  );
}
