import Hero from "../Components/Core/Hero";
// import BeerContainer from "../Components/Beer/BeerContainer";
import { useState } from "react";
import ButtonPrimary from "../Components/Core/ButtonPrimary";

const Account = () => {
  const user_id = window.localStorage.getItem("user_id");
  // const [savedBeers, setSavedBeers] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const token = window.localStorage.getItem("token");
  const handleChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      `https://zero-percent-brews-api.onrender.com/api/user/${user_id}/account`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          newPassword: newPassword,
        }),
      }
    ).then((response) => {
      if (response.ok) {
        setMessage("Password Updated");
      }
      console.log(response.json());
    });
  };

  // will need to populate username instead of user_id below
  // pull in BeerContainer to map through saved results
  return (
    <>
      <Hero message_1={"Account details for,"} message_2={user_id} />
      <div>{message}</div>
      <form>
        <label>Change Password:</label>
        <input type="password" value={newPassword} onChange={handleChange} />
        <ButtonPrimary text={"Submit"} onClick={handleSubmit} />
      </form>
    </>
  );
};

export default Account;

// value={userData.password}
