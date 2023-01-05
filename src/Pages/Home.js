import BeerContainer from '../Components/Beer/BeerContainer';
import Hero from '../Components/Core/Hero';
import { useState, useEffect } from 'react';

const Home = () => {
  const [beerData, setBeerData] = useState([]);

  useEffect(() => {
    fetch(`https://zero-percent-brews-api.onrender.com/api/beers/`)
      .then((response) => response.json())
      .then((data) => {
        setBeerData(data);
      });
  }, []);

  return (
    <>
      <Hero />
      <BeerContainer beerData={beerData} />
    </>
  );
};

export default Home;
