import styles from './BeerCard.module.css';
import ButtonPrimary from '../Core/ButtonPrimary';
import ButtonTertiary from "../Core/ButtonTertiary";
import ButtonSecondary from "../Core/ButtonSecondary";
import Badge from '../../images/staff_pick.png'
import { useState } from "react";
import { useAuth } from '../../Auth/AuthContext';

const BeerCard = ({ beerInfo, parent }) => {
  const [error, setError] = useState(undefined);
  const token = window.localStorage.getItem("token");
  const user_id = window.localStorage.getItem("user_id")
  const id = beerInfo._id;
  const [kegs, setKegs] = useState(beerInfo.kegs);
  const [isSaved, setIsSaved] = useState(false);
  const {isLoggedIn} = useAuth();

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
      await response.json();
      setKegs(newKegs);
    } else {
      setError(response.status);
      console.log(error)
    }

  };

  const handleSave = () => {
    fetch(`https://zero-percent-brews-api.onrender.com/api/user/${user_id}/saved`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        beer_id: beerInfo._id
      }),
    }
    )
      .then((response) => {
        if (response.status === 200) {
          setIsSaved(true);
        }
      })
  }

  const handleUnsave = () => {
    fetch(`https://zero-percent-brews-api.onrender.com/api/user/${user_id}/saved`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        beer_id: beerInfo._id,
        isSaved: true
      }),
    }
    )
      .then((response) => {
        if (response.status === 200) {
          setIsSaved(false);
        }
      })
  }

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
         
         {isLoggedIn && 
          <div className={styles.social__proof}>
            <div className={styles.upvote}>
              <div className={styles.upvote__score}>{kegs}</div>
            </div>
            <button onClick={handleKegVote} className={styles.upvote__button}>⬆️</button>
          </div> }

          <div className={styles.basic__info__item}>
            <span className={styles.attribute}>From:</span> {beerInfo.country}
          </div>
          <div className={styles.basic__info__item}>
            <span className={styles.attribute}>Calories:</span>{' '}
            {beerInfo.calories} kcal
          </div>
        </div>

        {parent === 'beerContainer' ? <ButtonPrimary path={`/beer/${beerInfo._id}`} text={'More Info'} /> :

          parent === 'beerListing' &&

          !isSaved ?
          <ButtonSecondary text={'Save'} onClick={handleSave} /> :
          <ButtonTertiary text={'Unsave'} onClick={handleUnsave} />
        
        
        }


      </div>
    </div>
  );
};

export default BeerCard;
