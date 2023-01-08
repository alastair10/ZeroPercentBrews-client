import BeerListing from "./Pages/BeerListing";
import Home from "./Pages/Home";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Core/Nav";
import Footer from "./Components/Core/Footer";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(window.localStorage.getItem("token"));

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/register" element={<Register isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/" element={<Home />} />
        <Route path="/beer/:id" element={<BeerListing />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
