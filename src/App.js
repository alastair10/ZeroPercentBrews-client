
import BeerListing from './Pages/BeerListing';
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Core/Nav'
import Footer from './Components/Core/Footer'


function App() {
  return (
    <>
    <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beer/:id" element={<BeerListing />} />
      </Routes>
      <Footer />
    </>


  );
}

export default App;
