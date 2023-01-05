import Rating from './Rating';
import ReviewCard from './ReviewCard';

const SocialProof = (beerData) => {

  return (
    <>
      <Rating beerData={beerData} />
      <ReviewCard beerData={beerData} />
    </>
  )

}

export default SocialProof;