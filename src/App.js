import BeerListing from './Pages/BeerListing';
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beer/:id" element={<BeerListing />} />
      </Routes>
    </>
  );
}

export default App;
