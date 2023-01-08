import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonPrimary from "../Components/Core/ButtonPrimary";
import Hero from "../Components/Core/Hero";
import styles from './Login.module.css';

const Login = () => {
  const [userData, setUserData] = useState(
    {
      email: "",
      password: ""
    }
  );
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    fetch(
      "https://zero-percent-brews-api.onrender.com/api/user/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userData.email,
          password: userData.password
        }),
      }
    ).then((response) => {
      if (response.status === 200) {
        const data = response.json();
        window.localStorage.setItem("token", data.token);
        window.localStorage.setItem("user_id", data.user_id);
        navigate("/");
      } else {
        navigate("/login");
      }
    });

  };

  return (
    <>
      <Hero message_1={"Welcome back,"} message_2={"smooth hoperator"} />
      <div className={styles.login_container}>
        <form className={styles.login_form}>
          <label>
            Email
            <input
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
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
            />
          </label>
          <br />
          <ButtonPrimary text={"Log In"} onClick={handleSubmit} />
        </form>
      </div>
    </>
  );
};

export default Login;
