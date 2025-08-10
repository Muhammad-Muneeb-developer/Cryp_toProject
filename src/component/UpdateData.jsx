import React, { useState } from "react";

const InputForm = ({ onDataSubmit }) => {
  const [formData, setFormData] = useState({
    balance: "145.98",
    todaysPNL: "+3.70",
    selectedCryptoSet: "HEI", // Default selected crypto set
    pnlPercentage: "+2.60",
    pnlColor: "green", // green or red
    btcPrice: "115,015.81",
    bnbPrice: "763.71",
    ethPrice: "3,681.26",
    solPrice: "166.43",
    fearGreed: "75", // Fear & Greed Index (0-100)
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onDataSubmit(formData);
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center text-orange-400">
        Update Crypto Data
      </h1>

      <div className="space-y-4">
        {/* Balance */}
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">
            Balance (USDT)
          </label>
          <input
            type="text"
            name="balance"
            value={formData.balance}
            onChange={handleInputChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-400"
            placeholder="145.98"
          />
        </div>

        {/* Today's PNL */}
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">
            Today's PNL (USDT)
          </label>
          <input
            type="text"
            name="todaysPNL"
            value={formData.todaysPNL}
            onChange={handleInputChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-400"
            placeholder="+3.70"
          />
        </div>

        {/* PNL Percentage */}
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">
            PNL Percentage
          </label>
          <input
            type="text"
            name="pnlPercentage"
            value={formData.pnlPercentage}
            onChange={handleInputChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-400"
            placeholder="+2.60"
          />
        </div>

        {/* PNL Color */}
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">
            PNL Color
          </label>
          <select
            name="pnlColor"
            value={formData.pnlColor}
            onChange={handleInputChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-400"
          >
            <option value="green">Green (Profit)</option>
            <option value="red">Red (Loss)</option>
          </select>
        </div>

        {/* BTC Price */}
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">
            BTC Price ($)
          </label>
          <input
            type="text"
            name="btcPrice"
            value={formData.btcPrice}
            onChange={handleInputChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-400"
            placeholder="115,015.81"
          />
        </div>

        {/* BNB Price */}
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">
            BNB Price ($)
          </label>
          <input
            type="text"
            name="bnbPrice"
            value={formData.bnbPrice}
            onChange={handleInputChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-400"
            placeholder="763.71"
          />
        </div>

        {/* ETH Price */}
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">
            ETH Price ($)
          </label>
          <input
            type="text"
            name="ethPrice"
            value={formData.ethPrice}
            onChange={handleInputChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-400"
            placeholder="3,681.26"
          />
        </div>

        {/* SOL Price */}
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">
            SOL Price ($)
          </label>
          <input
            type="text"
            name="solPrice"
            value={formData.solPrice}
            onChange={handleInputChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-400"
            placeholder="166.43"
          />
        </div>

        {/* Fear & Greed Index */}
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">
            Fear & Greed Index (0-100)
          </label>
          <input
            type="number"
            name="fearGreed"
            value={formData.fearGreed}
            onChange={handleInputChange}
            min="0"
            max="100"
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-400"
            placeholder="75"
          />
        </div>
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">
            Select Crypto Set
          </label>
          <select
            name="selectedCryptoSet"
            value={formData.selectedCryptoSet}
            onChange={handleInputChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-400"
          >
            <option value="HEI">HEI</option>
            <option value="ALPINE">ALPINE</option>
            <option value="VELODROME">VELODROME</option>
            <option value="PIO">PIO</option>
            <option value="COW">COW</option>
            <option value="OG">OG</option>
            <option value="ENA">ENA</option>
            <option value="HFT">HFT</option>
            <option value="RESOLV">RESOLV</option>
            <option value="TURBO">TURBO</option>
            <option value="XVG">XVG</option>
            <option value="CITY">CITY</option>
            <option value="CELO">CELO</option>
            <option value="ARB">ARB</option>
            <option value="BIO">BIO</option>
            <option value="PHA">PHA</option>
            <option value="PEOPLE">PEOPLE</option>
            <option value="BERA">BERA</option>
            <option value="BAND">BAND</option>
            <option value="PORTAL">PORTAL</option>
            <option value="PORTO">PORTO</option>
            <option value="RSR">RSR</option>
            <option value="LINK">LINK</option>
            <option value="LAZIO">LAZIO</option>
            <option value="MAGIC">MAGIC</option>
            <option value="TREE">TREE</option>
            <option value="RARE">RARE</option>
            <option value="AZZ">AZZ</option>
            <option value="DEXE">DEXE</option>
            <option value="SIGN">SIGN</option>
            <option value="LV">LV</option>
            <option value="XLM">XLM</option>
            <option value="DEGO">DEGO</option>
            <option value="SUN">SUN</option>
            <option value="VIC">VIC</option>
          </select>
        </div>

        {/* Fear & Greed Index */}
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">
            Fear & Greed Index (0-100)
          </label>
          <input
            type="number"
            name="fearGreed"
            value={formData.fearGreed}
            onChange={handleInputChange}
            min="0"
            max="100"
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-400"
            placeholder="75"
          />
        </div>
        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-orange-400 hover:bg-orange-500 text-black font-medium py-3 px-4 rounded-lg transition-colors duration-200 mt-6"
        >
          Update Data
        </button>
      </div>
    </div>
  );
};

export default InputForm;
