import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserData((prevUserData) => ({ ...prevUserData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // update with Render address after deployment
    let response = fetch(
      "https://zero-percent-brews-api.onrender.com/api/user/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userData: userData,
        }),
      }
    );

    if (response.status !== 201) {
      navigate("/login");
    } else {
      let data = await response.json();

      // Stores token and user_id in users local storage (if app is refreshed token is still accessible)
      window.localStorage.setItem("token", data.token);
      window.localStorage.setItem("user_id", data.user_id);
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input
          placeholder="Enter Email"
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
          placeholder="Enter password"
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <input
        className="register-form-submit"
        name="login"
        type="submit"
        value="login"
      />
    </form>
  );
};

export default Login;
