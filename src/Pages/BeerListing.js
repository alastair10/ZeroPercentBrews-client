
import BeerCard from '../Components/Beer/BeerCard';
import BeerInfo from '../Components/Beer/BeerInfo';
import SocialProof from '../Components/SocialProof/SocialProof';
import './BeerListing.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BeerListing = ({userData, setUserData, setIsSaved }) => {
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
      {beerData && (
        <div className="beer__listing__container">
          <div className="bCard_bInfo">
            <BeerCard userData={userData} setUserData={setUserData} setIsSaved={setIsSaved} beerInfo={beerData} parent="beerListing" />
            <BeerInfo beerData={beerData} />
          </div>
          <SocialProof beerData={beerData} setCommentAdd={setCommentAdd} />
        </div>
      )}
    </>
  );
};

export default BeerListing;
