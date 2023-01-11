import BeerCardExpanded from '../Components/Beer/BeerCardExpanded';
import BeerCard from '../Components/Beer/BeerCard';
import BeerInfo from '../Components/Beer/BeerInfo';
import SocialProof from '../Components/SocialProof/SocialProof';
import './BeerListing.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BeerListing = ({userData, setUserData}) => {
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

  return (
    <>
    {beerData &&
      
    <div className='beer__listing__container'>
      <BeerCard beerInfo={beerData} parent='beerListing' userData={userData} setUserData={setUserData} />
      <BeerInfo beerData={beerData} />
      <SocialProof beerData={beerData} setCommentAdd={setCommentAdd} />
    </div>
    }

    </>
  );
};

export default BeerListing;
