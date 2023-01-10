import styles from "../Components/Beer/BeerCard.module.css";

import Hero from "../Components/Core/Hero";
import { useState, useEffect } from "react";

const Account = () => {
  const user_id = window.localStorage.getItem("user_id");
  const token = window.localStorage.getItem("token");
  const [userData, setUserData] = useState("");

  useEffect(() => {
    fetch(`https://zero-percent-brews-api.onrender.com/api/user/${user_id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      });
  }, [token, user_id]);

  return (
    <>
      {userData && (
        <>
          <Hero
            message_1={"Account details for "}
            message_2={userData.username}
          />
          <h1 className="beer__title">Account information:</h1>
          <div class="basic__info__item">
            <span class="attribute">Username: </span>
            {userData.username}</div>
          <div class="basic__info__item">
            <span class="attribute">Email:</span> {userData.email}
          </div>
          <h1 className="beer__title">Your saved beers:</h1>
          <div>
            {userData.saved.map((savedBeers) => {
              return <p>{savedBeers.title}</p>;
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Account;
