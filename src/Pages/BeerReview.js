import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from '../Components/Core/ButtonPrimary.module.css';


const BeerReview = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(undefined);
  const [commentBody, setCommentBody] = useState("");
  const { id } = useParams();

  const handleChange = (e) => {
    setCommentBody(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      `https://zero-percent-brews-api.onrender.com/beer/${id}/review`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // userId: params.id,
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
      <form onSubmit={handleSubmit}>
      <input type="textarea" onChange={handleChange}></input>
      <input className={styles.button} type="submit" value="Submit"/>
    </form>
    { error && <p>error</p>}

    </>
  );
};

export default BeerReview;
