import React from "react";
import GlobalSyle from './globalStyles'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//Pages 
import Home from "./pages/Home";
import PricingPage from "./pages/PricingPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <Router>
      <GlobalSyle />
      <Routes>
        <Route path="/" exact element={< Home />} />
        <Route path="/signup" exact element={<SignUpPage/>} />
        <Route  path="/pricingpage" exact element={<PricingPage/>} />
      </Routes>

    </Router>
  );
}

export default App;
