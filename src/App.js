
import BeerListing from './Pages/BeerListing';
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Core/Nav'
import Footer from './Components/Core/Footer'
import Register from './Pages/Register';


function App() {
  return (
    <>
    <Navbar />
     <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/beer/:id" element={<BeerListing />} />
      </Routes>
      
      <Footer />
      
    </>


  );
}

export default App;
