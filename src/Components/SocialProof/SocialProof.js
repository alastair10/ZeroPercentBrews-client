import Rating from './Rating';
import ReviewCard from './ReviewCard';

const SocialProof = (props) => {

  return (
    <>
      {props.beerData && (<>
        <Rating beerData={props.beerData} />

        {props.beerData.comments.map((comment) => {
          return <ReviewCard author={comment.user_id.username} key={comment._id} body={comment.body} />
        })}

      </>)}


    </>
  )

}

export default SocialProof;