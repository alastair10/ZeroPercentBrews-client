import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState(
    {
      email: "",
      password: ""
    }
  );
  const navigate = useNavigate();
  const handleChange = (event) => {
    const {name, value} = event.target;
    setUserData((prevUserData) => ({ 
        ...prevUserData, 
        [name]: value 
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    fetch(
      "http://localhost:4000/api/user/login",
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
    <form onSubmit={handleSubmit}>
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
        name="login"
        type="submit"
        value="Log In"
      />
    </form>
  );
};

export default Login;
