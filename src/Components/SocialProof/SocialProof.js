import Rating from './Rating';
import ReviewCard from './ReviewCard';
import ButtonPrimary from '../Core/ButtonPrimary';
import { useState } from 'react';

const SocialProof = (props) => {

  // doesn't need to be set up like this, could just be the comment body that is store here if it is easier
  const [comment, setComment] = useState(
    {
      user_id: "",
      body: "",
    }
  );

  const handleChange = () => {
    /// handle change to comment body
  }

  const handleSubmit = () => {
    // API endpoint ..../api/beers/{id}/comments 
    
  // It needs thhe below in the request body:
  //   {
  //     "comment": {
  //         "user_id": {This should be the user_id of the user who is logged in},
  //         "body": String 
  //     }
  // }
  }

  return (
    <>
      {props.beerData && (<>
        <Rating beerData={props.beerData} />
        
        <div className='comment_box'>
          <h2>What's brewin'?</h2>
          <form>
          <input
              type="text"
              name="comment"
              value={comment.body}
              onChange={handleChange}
            />
          <ButtonPrimary text={"Submit"} onClick={handleSubmit}/>
          </form>
        </div>

        {props.beerData.comments.map((comment) => {
          return <ReviewCard author={comment.user_id.username} key={comment._id} body={comment.body} />
        })}

      </>)}


    </>
  )

}

export default SocialProof;