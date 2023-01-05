
import BeerListing from './Pages/BeerListing';
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Core/Nav'
import Hero from './Components/Core/Hero'

function App() {
  return (
    <>
    <Navbar />
     <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beer/:id" element={<BeerListing />} />
      </Routes>
    </>


  );
}

export default App;
