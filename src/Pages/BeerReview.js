import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../Components/Core/ButtonPrimary.module.css';
import SocialProof from '../Components/SocialProof/SocialProof';

const BeerReview = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(undefined);
  const [commentBody, setCommentBody] = useState("");
  // const { id } = useParams();
  const userId = window.localStorage.getItem("userId");
  const token = window.localStorage.getItem("token");

  const handleChange = (e) => {
    setCommentBody(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      //`https://zero-percent-brews-api.onrender.com/api/beers/{beer_id}/reviews`
      `http://localhost:4000/api/beers/{beer_id}/reviews`,
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
      <div className='beer__listing__container'>
        <SocialProof />
      </div>
      <div className="hero">
        <p className="hero__top">
          <span className="hero__span">Have your say on</span> {}
        </p>
      </div>
      <form onSubmit={handleSubmit}>
      <input type="textarea" onChange={handleChange}></input>
      <input className={styles.button} type="submit" value="Submit"/>
    </form>
    { error && <p>error</p>}

    </>
  );
};

export default BeerReview;
