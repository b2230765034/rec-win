import React, { useEffect, useRef, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
// import { triggerRecycleReward } from "../utils/stellar"; // Token işlemi Soroban ile yapılacak

const validMaterials = ["glass", "plastic", "paper", "cam", "plastik", "karton"];

const materialImages: Record<string, string> = {
  glass: "https://cdn-icons-png.flaticon.com/512/1784/1784618.png",
  cam: "https://cdn-icons-png.flaticon.com/512/1784/1784618.png",
  plastic: "https://cdn-icons-png.flaticon.com/512/3202/3202926.png",
  plastik: "https://cdn-icons-png.flaticon.com/512/3202/3202926.png",
  paper: "https://cdn-icons-png.flaticon.com/512/1163/1163661.png",
  karton: "https://cdn-icons-png.flaticon.com/512/1163/1163661.png",
};

interface QRScannerProps {
  onMaterialDetected: (material: string) => void;
  wallet?: string | null;
}

export default function QRScanner({ onMaterialDetected, wallet }: QRScannerProps) {
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [material, setMaterial] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);

  const parseMaterial = (data: string | null): string | null => {
    if (!data) return null;

    try {
      const parsed = JSON.parse(data);
      const mat = parsed.material?.toLowerCase();
      if (mat && validMaterials.includes(mat)) return mat;
    } catch {
      const lowerData = data.toLowerCase().trim();
      if (validMaterials.includes(lowerData)) return lowerData;
      if (lowerData.startsWith("material=")) {
        const val = lowerData.split("=")[1];
        if (validMaterials.includes(val)) return val;
      }
    }

    return null;
  };

  useEffect(() => {
    if (scanResult || scannerRef.current) return;

    const scanner = new Html5QrcodeScanner(
      "qr-reader",
      {
        fps: 10,
        qrbox: { width: 250, height: 250 },
      },
      false
    );

    scanner.render(
      async (decodedText: string) => {
        setScanResult(decodedText);
        const detected = parseMaterial(decodedText);
        if (detected) {
          setMaterial(detected);
          setError(null);
          onMaterialDetected(detected);
          scanner.clear();

          // 🚫 Token işlemi burada değil, Soroban smart contract üzerinden yapılacak
          // Burası boş bırakıldı.
        } else {
          setError("Geçersiz / Invalid malzeme tipi.");
        }
      },
      (err) => {
        console.warn("QR Tarama hatası / QR Scan error:", err);
        setError("Kamera hatası / Camera error: " + err);
      }
    );

    scannerRef.current = scanner;

    return () => {
      scanner.clear().catch(console.error);
      scannerRef.current = null;
    };
  }, [scanResult, onMaterialDetected, wallet]);

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">QR Kodunu Tara / Scan the QR Code</h2>

      {error && <p className="text-red-600 mb-2">{error}</p>}

      {!scanResult && <div id="qr-reader" style={{ width: "100%", maxWidth: 400 }} />}

      {scanResult && (
        <div className="mt-4 text-center">
          <p>Tarama Sonucu / Scan Result: <b>{scanResult}</b></p>

          {material ? (
            <>
              <p className="text-green-700 font-semibold mt-2">
                Malzeme / Material: {material.charAt(0).toUpperCase() + material.slice(1)}
              </p>
              {materialImages[material] && (
                <img
                  src={materialImages[material]}
                  alt={material}
                  className="mx-auto mt-4 w-32 h-32"
                />
              )}
              <p className="mt-2 text-sm">♻️ Bu malzeme için token kazanabilirsiniz (Soroban ile).</p>
            </>
          ) : (
            <p className="text-red-700">Geçersiz malzeme tipi!</p>
          )}

          <button
            onClick={() => {
              setScanResult(null);
              setMaterial(null);
              setError(null);
              scannerRef.current = null;
            }}
            className="mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
          >
            Tekrar Tara / Scan Again
          </button>
        </div>
      )}
    </div>
  );
}
