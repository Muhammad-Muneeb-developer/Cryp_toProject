import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./component/home";
import UpdateData from "./component/UpdateData";

// Load Stripe


function App() {
  
 const [cryptoData, setCryptoData] = useState(null);
  const [showForm, setShowForm] = useState(true);
    const handleDataSubmit = (data) => {
    setCryptoData(data);
    setShowForm(false);
  };
  return (
    <div>
      {showForm ? (
        <UpdateData onDataSubmit={handleDataSubmit} />
      ) : (
        <Home cryptoData={cryptoData} />
      )}
    </div>
  );
}

export default App;
