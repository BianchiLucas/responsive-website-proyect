import React, { Suspense, lazy } from "react";
import GlobalSyle, { Loader } from './globalStyles'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PuffLoader from "react-spinners/ClipLoader"
//Lazy components
const NavBar = lazy(() => import("./components/NavBar/Navbar"))
const Footer = lazy(() => import("./components/Footer/Footer"))
//Paginas  
const Home = lazy(() => import("./pages/Home"))
const PricingPage = lazy(() => import("./pages/PricingPage"))
const SignUpPage = lazy(() => import("./pages/SignUpPage"))


function App() {
  return (
    <Router>
      <GlobalSyle />
      <Suspense
        fallback={
          <Loader>
            <PuffLoader color="#fff" size={150} />
          </Loader>
        }>
        <NavBar />
        <Routes>
          <Route path="/" exact element={< Home />} />
          <Route path="/signup" exact element={<SignUpPage />} />
          <Route path="/pricing" exact element={<PricingPage />} />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
