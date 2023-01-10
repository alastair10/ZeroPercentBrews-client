import styles from "../Beer/BeerCard.module.css";
import { useState } from "react";

const Voting = ( {kegs, setKegs, beer_id} ) => {
  const [error, setError] = useState(undefined);
  const token = window.localStorage.getItem("token");
  
 
  const handleKegUpVote = async (event) => {
    const newUpKegs = kegs + 1;
    event.preventDefault();

    let response = await fetch(
      `https://zero-percent-brews-api.onrender.com/api/beers/${beer_id}/kegs`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          kegs: newUpKegs,
        }),
      }
    );

    if (response.status === 200) {
      await response.json();
      setKegs(newUpKegs);
      console.log(newUpKegs)
    } else {
      setError(response.status);
      console.log(error);
    }
  };

  const handleKegDownVote = async (event) => {
    const newDownKegs = kegs - 1;
    event.preventDefault();

    let response = await fetch(
      `https://zero-percent-brews-api.onrender.com/api/beers/${beer_id}/kegs`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          kegs: newDownKegs
        }),
      }
    );

    if (response.status === 200) {
      await response.json();
      setKegs(newDownKegs);
      console.log(newDownKegs)
    } else {
      setError(response.status);
      console.log(error);
    }
  };

  return (
    <div>
     <button onClick={handleKegUpVote} className={styles.upvote__button}>
        ⬆️
      </button>
      <button onClick={handleKegDownVote} className={styles.upvote__button}>
     ⬇️
         
      </button>
    </div>
  );
};

export default Voting;
