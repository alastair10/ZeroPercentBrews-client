import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userData, setUserData] = useState(
    {
      username: "",
      email: "",
      password: ""
    });

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

    fetch("https://zero-percent-brews-api.onrender.com/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userData.email,
        username: userData.username,
        password: userData.password
      }),
    }).then((response) => {
      if (response.status === 200) {
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
      <input
        className="register-form-submit"
        name="submit"
        type="submit"
        value="Sign Up"
      />
    </form>
  );
};

export default Register;
