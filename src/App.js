import { Routes, Route } from "react-router-dom";
import BeerReview from './Pages/BeerReview';
import BeerListing from "./Pages/BeerListing";
import Navbar from "./Components/Core/Nav";
import Footer from "./Components/Core/Footer";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/beer/:id/review" element={<BeerReview />} />
        <Route path="/beer/:id" element={<BeerListing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
