import React from "react";
import GlobalSyle from './globalStyles'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/NavBar/Navbar"
//Paginas  
import Home from "./pages/Home";
import PricingPage from "./pages/PricingPage"
import SignUpPage from "./pages/SignUpPage"

function App() {
  return (
    <Router>
      <GlobalSyle />
      <Navbar/>
      <Routes>
        <Route path="/" exact element={< Home />} />
        <Route path="/signup" exact element={<SignUpPage/>} />
        <Route  path="/pricing" exact element={<PricingPage/>} />
      </Routes>

    </Router>
  );
}

export default App;
