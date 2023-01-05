import Rating from './Rating';
import ReviewCard from './ReviewCard';

const SocialProof = (props) => {

  return (
    <>
      {props.beerData && (<>
        <Rating beerData={props.beerData} />

        {props.beerData.reviews.map((review) => {
          return <ReviewCard author={review.author} key={review.author} body={review.body} />
        })}

      </>)}


    </>
  )

}

export default SocialProof;