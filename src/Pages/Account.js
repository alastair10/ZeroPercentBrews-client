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
            message_1={"Account details for, "}
            message_2={userData.username}
          />
          <div className={styles.attribute}>Username: {userData.username}</div>
          <div className={styles.attribute}>Email: {userData.email}</div>
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
