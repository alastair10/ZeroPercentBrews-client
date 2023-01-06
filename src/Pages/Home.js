import BeerContainer from '../Components/Beer/BeerContainer';
import Loader from '../Components/Core/Loader';
import Hero from '../Components/Core/Hero';
import { useState, useEffect } from 'react';

const Home = () => {
  const [beerData, setBeerData] = useState();

  useEffect(() => {
    fetch(`https://zero-percent-brews-api.onrender.com/api/beers`)
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => setBeerData(data), 3000);
      });
  }, []);

  return (
    <>
      <Hero />
      {beerData ? <BeerContainer beerData={beerData} /> : <Loader />}
    </>
  );
};

export default Home;
