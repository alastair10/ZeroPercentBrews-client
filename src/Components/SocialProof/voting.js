
import styles from "../Beer/BeerCard.module.css";
import { useState } from "react";

const Voting = (beerProps) => {
  const [error, setError] = useState(undefined);
  const token = window.localStorage.getItem("token");
  const id = beerProps._id;
  const [kegs, setKegs] = useState(beerProps.kegs);
  
  
  const handleKegUpVote = async (event) => {
  
    const newKegs = kegs + 1;
    event.preventDefault();

    let response = await fetch(
      `https://zero-percent-brews-api.onrender.com/api/beers/${id}/kegs`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          kegs: newKegs,
        }),
      }
    );

    if (response.status === 200) {
      await response.json();
      setKegs(newKegs);
    } else {
      setError(response.status);
      console.log(error);
    }
  };



  return (
  
  <button onClick={handleKegUpVote} className={styles.upvote__button}>
  ⬆️
</button> 
);
}
 
export default Voting;

  {/* <div className={styles.upvote__score}>{kegs}</div> */}
    {/* <div className={styles.upvote__score}>{kegs}</div>*/}