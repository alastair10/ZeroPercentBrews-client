import { useState } from "react";

const Register = ({ navigate }) => {

}

const handleSubmit = async (event) => {
  event.preventDefault();

  // update with Render address after deployment
  fetch("/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userData: userData,
    }),
 }).then((response) => {
  if (response.status !== 201) {
    navigate("/login");
  } else {
  
 })
  }
 
  return ( 
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input
        placeholder="Enter Email"
        type="email"
        name="email"
        value={userData.email}
        onChange{handleChange}
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
      </form>
   );
};
 
export default ;