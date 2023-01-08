import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from '../Components/Core/ButtonPrimary.module.css';
import star from '../images/star.svg';
import '../Components/SocialProof/Rating.css';


const BeerReview = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(undefined);
  const [commentBody, setCommentBody] = useState("");
  const { id } = useParams();
  const userId = window.localStorage.getItem("userId");
  const token = window.localStorage.getItem("token");
  const generateStars = (value) => {
    return [...Array(value)].map((e, i) => (
      <img
        src={star}
        className='rating__star'
        alt='star__icon'
        key={i}
        loading='lazy'
      />
    ));
  };

  const handleChange = (e) => {
    setCommentBody(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();



    fetch(
      // `https://zero-percent-brews-api.onrender.com/api/beers/${id}/reviews`,
      `http://localhost:4000/api/beers/${id}/reviews`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          user_id: userId,
          review: {
            body: commentBody
          },
          rating: {
            overall: "",
            taste: "",
            realness: "",
            value: ""
          }
        }),
      }
    ).then((response) => {
      if (response.ok) {
        navigate(-1);
      }
    }).catch(e => {
      setError(e.message);
    });
  }

  return (
    <>
      <div className="hero">
        <p className="hero__top">
          <span className="hero__span">Have your say on</span> {}
        </p>
      </div>

      <h2 className='review__count' id='reviews'>
          Rating:
      </h2>
      <div className='ratings__container'>
        <div className='rating__item'>
          {generateStars(1)}
          <div className='rating__name'>Overall</div>
        </div>
        <div className='rating__item'>
          {generateStars(2)}
          <div className='rating__name'>Taste</div>
        </div>
        <div className='rating__item'>
          {generateStars(3)}
          <div className='rating__name'>Realness</div>
        </div>
        <div className='rating__item'>
          {generateStars(4)}
          <div className='rating__name'>Value</div>
        </div>
      </div>
      

      <form onSubmit={handleSubmit}>
        <input type="textarea" onChange={handleChange}></input>
        <input className={styles.button} type="submit" value="Submit"/>
      </form>
    { error && <p>error</p>}
    
   </>
   )
};

export default BeerReview;
