import BeerCardExpanded from "../Components/Beer/BeerCardExpanded";
import BeerInfo from "../Components/Beer/BeerInfo";
import SocialProof from "../Components/SocialProof/SocialProof";
import "./BeerListing.css"

const BeerListing = () => {

  return (
    <>
      <div className='beer__listing__container'>
        <BeerCardExpanded />
        <BeerInfo />
        <SocialProof />
      </div>
    </>
  );

};

export default BeerListing;