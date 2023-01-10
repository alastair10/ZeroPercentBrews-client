import styles from './BeerCard.module.css';
import ButtonPrimary from '../Core/ButtonPrimary';
import Badge from '../../images/staff_pick.png'
import { useState } from "react";

const BeerCard = ({ beerInfo }) => {
  const [error, setError] = useState(undefined);
  const token = window.localStorage.getItem("token");
  const id = beerInfo._id;
  const [kegs, setKegs] = useState(beerInfo.kegs);

  const handleKegVote = async (event) => {
    const newKegs = kegs + 1;
    event.preventDefault();

    let response = await fetch(`https://zero-percent-brews-api.onrender.com/api/beers/${id}/kegs`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        kegs: newKegs
      }),
    });

    if (response.status === 200) {
      let data = await response.json();
      setKegs(newKegs);
    } else {
      setError(response.status);
      console.log(error)
    }
    
  };

  return (
    <div className={styles.beer}>
      {beerInfo.staffPick && <img className={styles.badge} src={Badge} alt="staff pick badge" />}
      <img
        className={styles.beer__image}
        src={beerInfo.image}
        alt='beer'
        loading='lazy'
      />
      <div className={styles.info__container}>
        <div className={styles.beer__basic__info}>
          <h3 className={styles.beer__title}>{beerInfo.title}</h3>
          <div className={styles.social__proof}>
            <div className={styles.upvote}>
              <div className={styles.upvote__score}>{kegs}</div>
            </div>
            <button onClick={handleKegVote} className={styles.upvote__button}>⬆️</button>
          </div>

          <div className={styles.basic__info__item}>
            <span className={styles.attribute}>From:</span> {beerInfo.country}
          </div>
          <div className={styles.basic__info__item}>
            <span className={styles.attribute}>Calories:</span>{' '}
            {beerInfo.calories} kcal
          </div>
        </div>
        <ButtonPrimary path={`/beer/${beerInfo._id}`} text={'More Info'} />
      </div>
    </div>
  );
};

export default BeerCard;
