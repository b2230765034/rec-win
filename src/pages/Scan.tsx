import React, { useState } from "react";
import QRScanner from "../components/QRScanner";
import { useNavigate } from 'react-router-dom';

type ScanProps = {
  wallet: string | null;
};

export default function Scan({ wallet }: ScanProps) {
  const [material, setMaterial] = useState<string | null>(null);
  const navigate = useNavigate(); // <-- add this

  return (
    <div className="p-4 max-w-md mx-auto">
      {!material ? (
        <QRScanner onMaterialDetected={(mat: string) => setMaterial(mat)} wallet={wallet} />
      ) : (
        <div>
          <h2 className="text-pink-600 font-bold mb-4"> Package checked </h2>
          <p>
            <b>{material.charAt(0).toUpperCase() + material.slice(1)}</b> Detected Material
          </p>
          <button
            onClick={() => setMaterial(null)}
            className="mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
          >
            Scan  Again
          </button>
          <button
            onClick={() => navigate('/market')} // <-- navigate to /market route
            className="mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 ml-4"
          >
            Move to Market
          </button>
        </div>
      )}
    </div>
  );
}
