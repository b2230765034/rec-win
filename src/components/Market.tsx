import React, { useState } from 'react';
import ProductCard from './ProductCard';

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

interface MarketProps {
  markets: MarketItem[];
  onBuy: (id: number) => void;
  cartCount: number;
  wallet: string | null;
}

export default function Market({ markets, onBuy, cartCount, wallet }: MarketProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');

  const categories = ['All', ...Array.from(new Set(markets.map(item => item.category)))];

  const filteredMarkets = markets
    .filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'All' || item.category === selectedCategory)
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="flex flex-col min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-xl border-b border-blue-100 backdrop-blur-sm w-full">
        <div className="w-full px-6 lg:px-12 flex items-center justify-between h-24 lg:h-28">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform">
                <span className="text-white text-2xl lg:text-3xl font-bold">🛒</span>
              </div>
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  OrganicMarket
                </h1>
                <p className="text-sm lg:text-base text-gray-500">Fresh & Organic</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-8">
            {wallet && (
              <div className="flex items-center space-x-4 bg-gradient-to-r from-blue-50 to-indigo-50 px-5 py-3 rounded-full border border-blue-200">
                <span className="text-blue-600 text-xl">👤</span>
                <span className="text-base text-blue-700 font-semibold">{wallet}</span>
              </div>
            )}
            <button className="relative p-4 text-gray-600 hover:text-blue-600 transition-all duration-300 hover:bg-blue-50 rounded-full">
              <span className="text-2xl">🛍️</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full px-6 lg:px-12 py-16 overflow-auto">
        <div className="text-center mb-14 max-w-full">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            🌱 Fresh & Organic Products
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto">
            Discover fresh and organic goods directly from farmers. Open the door to a healthy lifestyle.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-3xl shadow-xl p-10 border border-blue-100 backdrop-blur-sm max-w-full">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="relative flex-1 w-full">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-2xl">🔍</span>
              <input
                type="text"
                placeholder="What are you looking for?"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-6 py-5 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all text-lg placeholder-gray-400"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4 bg-gray-50 rounded-2xl px-6 py-3">
              <span className="text-2xl">🏷️</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border-0 bg-transparent focus:outline-none focus:ring-0 text-lg font-medium text-gray-700 cursor-pointer"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-4 bg-gray-50 rounded-2xl px-6 py-3">
              <span className="text-2xl">📊</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border-0 bg-transparent focus:outline-none focus:ring-0 text-lg font-medium text-gray-700 cursor-pointer"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price (Low)</option>
                <option value="price-high">Price (High)</option>
                <option value="rating">Sort by Rating</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 lg:gap-12 max-w-full">
          {filteredMarkets.map(item => (
            <ProductCard key={item.id} item={item} onBuy={onBuy} />
          ))}
        </div>

        {filteredMarkets.length === 0 && (
          <div className="text-center py-24 max-w-full">
            <div className="w-28 h-28 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <span className="text-5xl">🔍</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              No products found
            </h3>
            <p className="text-xl text-gray-600 max-w-xl mx-auto">
              Try changing your search criteria. Maybe the product you're looking for is in another category?
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Show All Products
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 w-full">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex justify-center items-center space-x-4 mb-6">
            <span className="text-4xl lg:text-5xl">🌱</span>
            <h4 className="text-3xl lg:text-4xl font-bold">OrganicMarket</h4>
          </div>
          <p className="text-blue-100 text-xl lg:text-2xl text-center max-w-4xl px-4">
            Your go-to for natural living – the start of a healthy future
          </p>
        </div>
      </footer>
    </div>
  );
}
