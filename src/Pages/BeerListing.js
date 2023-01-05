import BeerCardExpanded from "../Components/Beer/BeerCardExpanded";
import BeerInfo from "../Components/Beer/BeerInfo";
import SocialProof from "../Components/SocialProof/SocialProof";
import "./BeerListing.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BeerListing = () => {
  const { beer_id } = useParams();
  
  const [beerData, setBeerData] = useState();

  console.log(beer_id)
  useEffect(() => {
    fetch(`http://localhost:4000/api/beers`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      });
  }, []);

  // console.log(beerData);

  return (
    <>
      <div className="beer__listing__container">
        <BeerCardExpanded />
        <BeerInfo />
        <SocialProof />
      </div>
    </>
  );
};

export default BeerListing;
