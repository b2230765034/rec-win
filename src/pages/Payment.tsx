import React, { useState } from "react";
import Market from "../components/Market";

const demoItems = [
  {
    id: 1,
    name: "Organic Apple",
    location: "Izmir - EcoGarden",
    image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=400",
    price: 5,
    category: "Fruit",
    rating: 4.8,
    seller: "EcoGarden Farm"
  },
  {
    id: 2,
    name: "Natural Olive Oil",
    location: "Ayvalik - OliveField",
    image: "https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400",
    price: 15,
    category: "Oil",
    rating: 4.9,
    seller: "OliveField Cooperative"
  },
  {
    id: 3,
    name: "Fresh Spinach",
    location: "Bursa - GreenField",
    image: "https://images.pexels.com/photos/2255935/pexels-photo-2255935.jpeg?auto=compress&cs=tinysrgb&w=400",
    price: 3,
    category: "Vegetable",
    rating: 4.7,
    seller: "GreenField Organic"
  },
  {
    id: 4,
    name: "Organic Tomato",
    location: "Antalya - SunField",
    image: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=400",
    price: 4,
    category: "Vegetable",
    rating: 4.6,
    seller: "SunField Farming"
  },
  {
    id: 5,
    name: "Fresh Honey",
    location: "Mugla - BeeHive",
    image: "https://images.pexels.com/photos/220747/pexels-photo-220747.jpeg?auto=compress&cs=tinysrgb&w=400",
    price: 25,
    category: "Honey",
    rating: 5.0,
    seller: "BeeHive Apiary"
  },
  {
    id: 6,
    name: "Organic Carrot",
    location: "Konya - SoilField",
    image: "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=400",
    price: 6,
    category: "Vegetable",
    rating: 4.5,
    seller: "SoilField Organic"
  }
];

export default function MarketplacePage() {
  const [wallet, setWallet] = useState<string | null>("Nur B");
  const [cartItems, setCartItems] = useState<number[]>([]);

  const handleBuy = (id: number) => {
    setCartItems(prev => [...prev, id]);
    // Simulate purchase notification
    const item = demoItems.find(item => item.id === id);
    if (item) {
      alert(`${item.name} has been added to your cart!`);
    }
  };

  return (
    <Market 
      markets={demoItems} 
      onBuy={handleBuy} 
      cartCount={cartItems.length}
      wallet={wallet}
    />
  );
}
