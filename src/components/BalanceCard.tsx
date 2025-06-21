import React from "react";

interface BalanceCardProps {
  balance: number;
  tokenName: string;
}

export default function BalanceCard({ balance, tokenName }: BalanceCardProps) {
  return (
    <div className="p-4 bg-white rounded shadow max-w-xs mx-auto text-center">
      <h3 className="text-lg font-semibold mb-2">Bakiyeniz</h3>
      <p className="text-2xl font-bold text-pink-600">{balance.toFixed(2)}</p>
      <p className="text-gray-600">{tokenName}</p>
    </div>
  );
}
