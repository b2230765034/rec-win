import React from "react";

interface MarketProps {
  markets: { id: number; name: string; location: string }[];
}

export default function Market({ markets }: MarketProps) {
  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-pink-600 font-bold mb-4">Anlaşmalı Marketler</h2>
      <ul className="list-disc list-inside">
        {markets.map((market) => (
          <li key={market.id} className="mb-2">
            <b>{market.name}</b> - {market.location}
          </li>
        ))}
      </ul>
    </div>
  );
}
