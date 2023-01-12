import styles from "./BeerCard.module.css";
import ButtonUpVote from "../Core/ButtonUpVote";
import ButtonPrimary from "../Core/ButtonPrimary";
import ButtonTertiary from "../Core/ButtonTertiary";
import ButtonSecondary from "../Core/ButtonSecondary";
import Badge from "../../images/staff_pick.png";
import { useEffect, useState } from "react";
import { useAuth } from "../../Auth/AuthContext";

const BeerCard = ({ beerInfo, parent, userData, setUserData, setIsSaved }) => {
  const [error, setError] = useState(undefined);
  const token = window.localStorage.getItem("token");
  const user_id = window.localStorage.getItem("user_id");
  const id = beerInfo._id;
  const [upvotes, setUpvotes] = useState(beerInfo.upvotes);
  const [voted, setVoted] = useState(false);
  const [savedBeers, setSavedBeers] = useState([]);
  const { isLoggedIn } = useAuth();

  const handleKegVote = async (event) => {
    const newUpvotes = upvotes + 1;
    event.preventDefault();


    if (!voted) {
      let response = await fetch(
        `https://zero-percent-brews-api.onrender.com/api/beers/${id}/kegs`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            kegs: newUpvotes,
          }),
        }
      );
  
      if (response.status === 200) {
        await response.json();
        setUpvotes(newUpvotes);
        setVoted(true);
      } else {
        setError(response.status);
        console.log(error);
      }
    }
   };

  const handleSave = async () => {
    let response = await fetch(
      `https://zero-percent-brews-api.onrender.com/api/user/${user_id}/saved`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          beer_id: beerInfo._id,
        }),
      }
    );

    if (response.ok) {
      let data = await response.json();

      setUserData((prevUserData) => ({
        ...prevUserData,
        saved: data.saved,
      }));

      setIsSaved((prev) => !prev);
    }
  };

  const handleUnsave = async () => {
    let response = await fetch(
      `https://zero-percent-brews-api.onrender.com/api/user/${user_id}/saved`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          beer_id: beerInfo._id,
          isSaved: true,
        }),
      }
    );

    if (response.ok) {
      let data = await response.json();

      setUserData((prevUserData) => ({
        ...prevUserData,
        saved: data.saved,
      }));

      setIsSaved((prev) => !prev);
    }
  };

  useEffect(() => {
    if (userData) {
      let saved = userData.saved.map((element) => element._id);
      setSavedBeers(saved);
    }
  }, [userData]);

  return (
      <div className={styles.beer}>
        {beerInfo.staffPicks && (
          <img className={styles.badge} src={Badge} alt="staff pick badge" />
        )}
        <img
          className={styles.beer__image}
          src={beerInfo.image}
          alt="beer"
          loading="lazy"
        />
        <div className={styles.info__container}>
          <h3 className={styles.beer__title}>{beerInfo.title}</h3>
          <div className={styles.beer__basic__info}>
            {isLoggedIn && (
              <div className={styles.social__proof}>
                <div className={styles.upvote}>
                  <div className={styles.upvote__score}>{upvotes}</div>
                </div>
                <ButtonUpVote handleKegVote={handleKegVote} />
              </div>
            )}
            <div className={styles.type_calories__container}>
              <div className={styles.basic__info__item}>
                <span className={styles.attribute}>Type:</span> {beerInfo.type}
              </div>
              <div className={styles.basic__info__item}>
                <span className={styles.attribute}>Calories:</span>{" "}
                {beerInfo.calories} kcal
              </div>
            </div>
            {parent === "beerContainer" ? (
              <ButtonPrimary
                path={`/beer/${beerInfo._id}`}
                text={"More Info"}
              />
            ) : (
              userData &&
              isLoggedIn &&
              (parent === "beerListing" &&
              !savedBeers.includes(beerInfo._id) ? (
                <ButtonSecondary text={"Save"} onClick={handleSave} />
              ) : (
                <ButtonTertiary text={"Unsave"} onClick={handleUnsave} />
              ))
            )}
          </div>
        </div>
      </div>
  );
};

export default BeerCard;
