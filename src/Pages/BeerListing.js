import BeerCardExpanded from '../Components/Beer/BeerCardExpanded';
import BeerCard from '../Components/Beer/BeerCard';
import BeerInfo from '../Components/Beer/BeerInfo';
import SocialProof from '../Components/SocialProof/SocialProof';
import './BeerListing.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BeerListing = () => {
  const { id } = useParams();
  const [beerData, setBeerData] = useState();
  const [commentAdd, setCommentAdd] = useState();

  useEffect(() => {
    fetch(`https://zero-percent-brews-api.onrender.com/api/beers/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setBeerData(data);
      });
  }, [id, commentAdd]);

console.log(beerData)

  return (
    <>
    {beerData &&
      
    <div className='beer__listing__container'>
      {/* <BeerCardExpanded beerData={beerData} /> */}
      <BeerCard beerInfo={beerData}  />
      <BeerInfo beerData={beerData} />
      <SocialProof beerData={beerData} setCommentAdd={setCommentAdd} />
    </div>
    }

    </>
  );
};

export default BeerListing;
