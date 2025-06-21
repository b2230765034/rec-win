import React from 'react';
import { MapPin, Star, ShoppingCart, Heart } from 'lucide-react';

interface MarketItem {
  id: number;
  name: string;
  location: string;
  image: string;
  price: number;
  category: string;
  rating: number;
  seller: string;
}

interface ProductCardProps {
  item: MarketItem;
  onBuy: (id: number) => void;
}

export default function ProductCard({ item, onBuy }: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Favorite Button */}
        <button className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white">
          <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors" />
        </button>

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-full">
            {item.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-gray-800 text-lg leading-tight">
            {item.name}
          </h3>
          <div className="flex items-center space-x-1 bg-yellow-50 px-2 py-1 rounded-full">
            <Star className="w-3 h-3 text-yellow-500 fill-current" />
            <span className="text-xs font-medium text-yellow-700">
              {item.rating}
            </span>
          </div>
        </div>

        <div className="flex items-center text-gray-500 text-sm mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{item.location}</span>
        </div>

        <div className="mb-4">
          <p className="text-gray-600 text-sm">
            Seller: <span className="font-medium text-gray-800">{item.seller}</span>
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-blue-600">
              ₺{item.price}
            </span>
            <span className="text-xs text-gray-500">per kg</span>
          </div>
          
          <button
            onClick={() => onBuy(item.id)}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-2 rounded-xl flex items-center space-x-2 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="font-medium">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
