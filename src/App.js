import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./component/home";


// Load Stripe


function App() {
  

  return (
    <Router>
      <div className="">
        <Routes>
         <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
