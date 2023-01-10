import Hero from '../Components/Core/Hero';
import BeerContainer from '../Components/Beer/BeerContainer';
import { useState, useEffect } from 'react';

const Account = () => {
  const user_id = window.localStorage.getItem('user_id');
  const token = window.localStorage.getItem('token');
  const [userData, setUserData] = useState('');
  const [savedBeers, setSavedBeers] = useState('');

  useEffect(() => {
    fetch(`https://zero-percent-brews-api.onrender.com/api/users/user/${user_id}`, {
      headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }})
    .then((response) => response.json())
    .then((data) => {
      setUserData(data);
    });
  }, []);

  
  // will need to populate username instead of user_id below
  // pull in BeerContainer to map through saved results
  return (
    <>
      <Hero message_1={'Account details for,'} message_2={userData.username} />
      <p><strong>Username: </strong> {userData.username}</p>
      <p><strong>Email: </strong> {userData.email}</p>
    </>
  );
}
 
export default Account;