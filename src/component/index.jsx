import React, { useState, useEffect } from "react";
import handset from "./headset.png";

// Icons component (same as yours, not repeated fully here for brevity)
const Icon = ({ type, className = "w-6 h-6", color = "currentColor" }) => {
  const icons = {
    // ... all SVG icons from your original code ...
  };
  return icons[type] || null;
};

const Home = ({ cryptoData }) => {
  const {
    balance = "145.98",
    todaysPNL = "+3.70",
    selectedCryptoSet = "HEI",
    pnlPercentage = "+2.60",
    pnlColor = "green",
    btcPrice = "115,015.81",
    bnbPrice = "763.71",
    ethPrice = "3,681.26",
    solPrice = "166.43",
    fearGreed = "75",
  } = cryptoData || {};

  const cryptoList = [
    {
      name: "BNB",
      symbol: "🔸",
      price: bnbPrice,
      priceUsd: `$${bnbPrice}`,
      change: "+1.55%",
      isPositive: true,
    },
    {
      name: "BTC",
      symbol: "🔸",
      price: btcPrice,
      priceUsd: `$${btcPrice}`,
      change: "+0.58%",
      isPositive: true,
    },
    {
      name: "ETH",
      symbol: "🔸",
      price: ethPrice,
      priceUsd: `$${ethPrice}`,
      change: "+5.45%",
      isPositive: true,
    },
    {
      name: "SOL",
      symbol: "🔸",
      price: solPrice,
      priceUsd: `$${solPrice}`,
      change: "+2.89%",
      isPositive: true,
    },
  ];

  const TabButton = ({ title, isActive, onClick }) => (
    <button
      onClick={onClick}
      className={`px-3 py-2 text-sm font-medium whitespace-nowrap ${
        isActive
          ? "text-orange-400 border-b-2 border-orange-400"
          : "text-gray-400 hover:text-gray-300"
      }`}
    >
      {title}
    </button>
  );

  const CryptoRow = ({ crypto }) => (
    <div className="flex items-center py-2.5 px-4">
      <div className="flex items-center space-x-3 flex-1">
        <div>
          <div className="text-white font-medium text-sm">{crypto.name}</div>
        </div>
        <div className="text-base">{crypto.symbol}</div>
      </div>
      <div className="w-24 text-right">
        <div className="text-white font-medium text-sm">{crypto.price}</div>
        <div className="text-gray-400 text-xs">{crypto.priceUsd}</div>
      </div>
      <div className="w-20 flex justify-end">
        <div
          className={`px-2 py-1 rounded text-xs font-medium text-center ${
            crypto.isPositive
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {crypto.change}
        </div>
      </div>
    </div>
  );

  // Loader state
  const [loading, setLoading] = useState(true);

  // Simulate loader finish
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-white max-w-md mx-auto">
      {/* TOP AREA — hidden when loading */}
      {loading ? (
        // Show loader only
        <div className="flex justify-center items-center py-6">
          {/* Binance-like diamond loader */}
          <div className="w-4 h-4 bg-yellow-400 animate-bounce rounded-sm"></div>
        </div>
      ) : (
        // Show real top content when not loading
        <div className="flex items-center justify-between p-4 bg-gray-800">
          <div className="flex items-center space-x-4">
            <Icon type="menu" className="w-7 h-7" color="white" />
            <div className="flex items-center space-x-2">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 5h9M5 9h5m8-8H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4l3.5 4 3.5-4h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                />
              </svg>
            </div>
          </div>
          <div className="flex bg-gray-700 rounded-lg p-1">
            <span className="text-white font-medium text-sm px-4 py-1.5 bg-gray-600 rounded-md">
              Exchange
            </span>
            <span className="text-gray-400 text-sm px-4 py-1.5">Wallet</span>
          </div>
          <div className="flex items-center space-x-4">
            <Icon type="refresh" className="w-5 h-5" color="white" />
          </div>
        </div>
      )}

      {/* --- CFX SECTION --- (Always visible, static) */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4 bg-gray-800 rounded-lg p-3">
          <div className="flex items-center space-x-2">
            <span className="text-orange-400 text-lg">🔥</span>
            <span className="text-white font-medium text-sm">
              {cryptoData.selectedCryptoSet}
            </span>
          </div>
          <Icon type="search" className="w-5 h-5" color="#9CA3AF" />
        </div>

        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="text-gray-400 text-xs mb-1 flex items-center">
              Est. Total Value(USDT)
              <Icon type="chevronUp" className="w-3 h-3 ml-1" color="#9CA3AF" />
            </div>
            <div className="text-3xl font-bold text-white">{balance}</div>
            <div className="text-gray-400 text-sm">≈${balance}</div>
            <div className="text-sm flex items-center mt-1">
              <span className="text-white">Today's PNL </span>
              <span
                className={`ml-1 ${
                  pnlColor === "green" ? "text-green-400" : "text-red-400"
                }`}
              >
                {todaysPNL} USDT ({pnlPercentage}%)
              </span>
              <Icon
                type="chevronDown"
                className="w-3 h-3 ml-1"
                color={pnlColor === "green" ? "#10B981" : "#EF4444"}
              />
            </div>
          </div>
          <button className="bg-yellow-400 text-black px-6 py-2.5 rounded font-medium text-sm mt-8">
            Add Funds
          </button>
        </div>
      </div>

      {/* Rest of your page... */}
      <div className="p-3">
        <div className="px-4 bg-gray-800 rounded-lg">
          <div className="flex space-x-2">
            {["Favorites", "Hot", "Alpha", "New", "Gainers"].map((tab) => (
              <TabButton key={tab} title={tab} />
            ))}
            <div className="flex items-center px-2">
              <Icon type="menu" className="w-4 h-4" color="white" />
            </div>
          </div>

          {/* Crypto list */}
          <div>
            {cryptoList.map((crypto, index) => (
              <CryptoRow key={index} crypto={crypto} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
