import Rating from './Rating';
import ReviewCard from './ReviewCard';
import ButtonPrimary from '../Core/ButtonPrimary';
import './SocialProof.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../Auth/AuthContext';

const SocialProof = (props) => {
  const [error, setError] = useState(undefined);
  const user_id = window.localStorage.getItem('user_id');
  const token = window.localStorage.getItem('token');
  const { id } = useParams();
  const [commentBody, setCommentBody] = useState('');
  const { isLoggedIn } = useAuth();

  const handleChange = (e) => {
    setCommentBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      `https://zero-percent-brews-api.onrender.com/api/beers/${id}/comments`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          comment: {
            user_id: user_id,
            body: commentBody,
          },
        }),
      }
    )
      .then((response) => {
        if (response.status === 200) {
          setCommentBody('');
          props.setCommentAdd(true);
        }
      })
      .catch((err) => {
        setError(err.message);
        console.log(error);
      });
  };

  return (
    <>
      {props.beerData && (
        <div className='social-proof'>
          <Rating beerData={props.beerData} />

        <h2>Comments:</h2>
        {isLoggedIn && 
          <div className='comment_box'>
            <form>
              <input
                placeholder='Add your review here!'
                type='text'
                name='comment'
                value={commentBody}
                onChange={handleChange}
              />
              <ButtonPrimary text={'Submit'} onClick={handleSubmit} />
            </form>
            {error && <p>error</p>}
          </div>
        }

          {props.beerData.comments
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .map((comment) => {
              return (
                <ReviewCard
                  author={comment.user_id.username}
                  key={comment._id}
                  body={comment.body}
                  date={comment.createdAt}
                />
              );
            })}
        </div>
      )}
    </>
  );
};

export default SocialProof;
