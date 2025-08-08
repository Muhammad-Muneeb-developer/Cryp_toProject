import React, { useState } from "react";

// CSS Icons Component
const Icon = ({ type, className = "w-6 h-6", color = "currentColor" }) => {
  const icons = {
    menu: (
      <svg className={className} fill="none" stroke={color} viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    ),
    chat: (
      <svg className={className} fill="none" stroke={color} viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
    speaker: (
      <svg className={className} fill="none" stroke={color} viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
        />
      </svg>
    ),
    refresh: (
      <svg className={className} fill="none" stroke={color} viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
    search: (
      <svg className={className} fill="none" stroke={color} viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
    gift: (
      <svg className={className} fill="none" stroke={color} viewBox="0 0 24 24">
        <rect x="3" y="8" width="18" height="4" rx="1" />
        <path d="M12 8v13" />
        <path d="M19 12v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7" />
        <path d="M7.5 8a2.5 2.5 0 010-5A3.5 3.5 0 0112 6.5a3.5 3.5 0 014.5-2A2.5 2.5 0 0116.5 8" />
      </svg>
    ),
    settings: (
      <svg className={className} fill="none" stroke={color} viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    users: (
      <svg className={className} fill="none" stroke={color} viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
    trending: (
      <svg className={className} fill="none" stroke={color} viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 11l5-5m0 0l5 5m-5-5v12"
        />
      </svg>
    ),
    dollar: (
      <svg className={className} fill="none" stroke={color} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6v12m4-9a4 4 0 00-4-3v0a4 4 0 00-4 3v0a4 4 0 004 3v0a4 4 0 014 3"
        />
      </svg>
    ),
    back: (
      <svg className={className} fill="none" stroke={color} viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
    ),
    grid: (
      <svg className={className} fill="none" stroke={color} viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
        />
      </svg>
    ),
    home: (
      <svg className={className} fill={color} stroke="none" viewBox="0 0 24 24">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    ),
    chart: (
      <svg className={className} fill="none" stroke={color} viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    exchange: (
      <svg className={className} fill="none" stroke={color} viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
    ),
    briefcase: (
      <svg className={className} fill="none" stroke={color} viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0H8m0 0H5a2 2 0 00-2 2v6a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2H8z"
        />
      </svg>
    ),
    folder: (
      <svg className={className} fill="none" stroke={color} viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
        />
      </svg>
    ),
    chevronDown: (
      <svg className={className} fill="none" stroke={color} viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    ),
    chevronUp: (
      <svg className={className} fill="none" stroke={color} viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 15l7-7 7 7"
        />
      </svg>
    ),
    dots: (
      <svg className={className} fill="none" stroke={color} viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 12h.01M12 12h.01M19 12h.01"
        />
      </svg>
    ),
  };

  return icons[type] || null;
};

const Home = ({ cryptoData }) => {
  // Use passed data or default values
  const {
    balance = "145.98",
    todaysPNL = "+3.70",
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

  return (
    <div className="bg-gray-900 min-h-screen text-white max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-gray-800">
        <div className="flex items-center space-x-4">
          <Icon type="menu" className="w-5 h-5" color="white" />
          <div className="flex items-center space-x-2">
            <Icon type="chat" className="w-5 h-5" color="#FBBF24" />
            <span className="bg-yellow-400 text-black text-xs px-1.5 py-0.5 rounded font-medium">
              99
            </span>
          </div>
        </div>
        <div className="flex bg-gray-700 rounded-lg p-1">
          <span className="text-white font-medium text-sm px-4 py-1.5 bg-gray-600 rounded-md">
            Exchange
          </span>
          <span className="text-gray-400 text-sm px-4 py-1.5">Wallet</span>
        </div>
        <div className="flex items-center space-x-4">
          <Icon type="speaker" className="w-5 h-5" color="white" />
          <Icon type="refresh" className="w-5 h-5" color="white" />
        </div>
      </div>

      {/* CFX Section */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-4 bg-gray-800 rounded-lg p-3">
          <div className="flex items-center space-x-2">
            <span className="text-orange-400 text-lg">🔥</span>
            <span className="text-white font-medium text-sm">CFX</span>
          </div>
          <Icon type="search" className="w-5 h-5" color="#9CA3AF" />
        </div>

        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="text-gray-400 text-xs mb-1 flex items-center">
              Est. Total Value(USDT){" "}
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

        {/* Feature Icons - Fixed Grid Layout */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {/* First Row */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-2">
              <Icon type="gift" className="w-6 h-6" color="#FB923C" />
            </div>
            <span className="text-xs text-gray-400 text-center leading-tight">
              Rewards Hub
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-2">
              <Icon type="settings" className="w-6 h-6" color="#FB923C" />
            </div>
            <span className="text-xs text-gray-400 text-center leading-tight">
              Sharia Earn
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-2">
              <Icon type="users" className="w-6 h-6" color="#FB923C" />
            </div>
            <span className="text-xs text-gray-400 text-center leading-tight">
              Referral
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-2">
              <Icon type="trending" className="w-6 h-6" color="#FB923C" />
            </div>
            <span className="text-xs text-gray-400 text-center leading-tight">
              Simple Earn
            </span>
          </div>

          {/* Second Row */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-2">
              <Icon type="dollar" className="w-6 h-6" color="#FB923C" />
            </div>
            <span className="text-xs text-gray-400 text-center leading-tight">
              BNB ATH Button
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-2">
              <Icon type="back" className="w-6 h-6" color="#FB923C" />
            </div>
            <span className="text-xs text-gray-400 text-center leading-tight">
              BNB
              <br />
              CRYPTOBACK
            </span>
          </div>
          {/* <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-2">
              <span className="text-orange-400 text-sm font-bold">
                {fearGreed}
              </span>
            </div>
            <span className="text-xs text-gray-400 text-center leading-tight">
              Fear & Greed
              <br />
              Index
            </span>
          </div> */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-2">
              <Icon type="grid" className="w-6 h-6" color="#FB923C" />
            </div>
            <span className="text-xs text-gray-400 text-center leading-tight">
              More
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Tabs */}
      <div className="p-3">
        <div className="px-4 bg-gray-800 rounded-lg">
          <div className="flex ">
            {["Favorites", "Hot", "Alpha", "New", "Gainers"].map((tab) => (
              <TabButton
                key={tab}
                title={tab}
                // isActive={tab === "Hot"}
                // onClick={() => {}}
              />
            ))}
            <div className="flex items-center px-2">
              <Icon type="menu" className="w-4 h-4" color="white" />
            </div>
          </div>

          {/* Crypto/Futures Tabs */}
          <div className="flex space-x-4">
            {["Crypto", "Futures"].map((tab) => (
              <TabButton
                key={tab}
                title={tab}
                // isActive={tab === "Crypto"}
                // onClick={() => {}}
              />
            ))}
          </div>

          {/* Table Header */}
          <div className="flex items-center py-3 px-4 mt-2">
            <span className="flex-1">Name</span>
            <span className="w-24 text-right">Last Price</span>
            <span className="w-20 text-right">24h chg%</span>
          </div>

          {/* Crypto List */}
          <div>
            {cryptoList.map((crypto, index) => (
              <CryptoRow key={index} crypto={crypto} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation Tabs */}
      <div className="mt-6 px-4">
        <div className="flex space-x-4 border-b border-gray-700">
          {["Discover", "Following", "Campaign", "News"].map((tab) => (
            <TabButton
              key={tab}
              title={tab}
              isActive={false}
              onClick={() => {}}
            />
          ))}
          <div className="flex items-center px-2">
            <Icon type="chevronUp" className="w-4 h-4" color="#9CA3AF" />
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 max-w-md mx-auto">
        <div className="flex justify-around py-2">
          <div className="flex flex-col items-center py-2">
            <Icon type="home" className="w-5 h-5 mb-1" color="#FB923C" />
            <span className="text-xs text-orange-400">Home</span>
          </div>
          <div className="flex flex-col items-center py-2">
            <Icon type="chart" className="w-5 h-5 mb-1" color="#9CA3AF" />
            <span className="text-xs text-gray-400">Markets</span>
          </div>
          <div className="flex flex-col items-center py-2">
            <Icon type="exchange" className="w-5 h-5 mb-1" color="#9CA3AF" />
            <span className="text-xs text-gray-400">Trade</span>
          </div>
          <div className="flex flex-col items-center py-2">
            <Icon type="briefcase" className="w-5 h-5 mb-1" color="#9CA3AF" />
            <span className="text-xs text-gray-400">Futures</span>
          </div>
          <div className="flex flex-col items-center py-2">
            <Icon type="folder" className="w-5 h-5 mb-1" color="#9CA3AF" />
            <span className="text-xs text-gray-400">Assets</span>
          </div>
        </div>
      </div>

      {/* Bottom padding to account for fixed nav */}
      <div className="h-20"></div>
    </div>
  );
};

export default Home;
