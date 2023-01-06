import { useState } from "react";

const Register = ({ navigate }) => {
  const [userData, setUserData] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserData((prevUserData) => ({ ...prevUserData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    console.log("You submitted info");
    event.preventDefault();

    fetch("/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userData: userData,
      }),
    }).then((response) => {
      if (response.status === 201) {
        navigate("/login");
      } else {
        navigate("/register");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input
          placeholder="e.g. BeerMaster4000"
          type="text"
          name="username"
          value={userData.username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email
        <input
          placeholder="e.g. name@address.com"
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password
        <input
          placeholder="make a secure password"
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <input
        className="sign-up-form-submit"
        name="submit"
        type="submit"
        value="Sign Up"
      />
    </form>
  );
};

export default Register;
