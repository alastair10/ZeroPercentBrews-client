import Hero from '../Components/Core/Hero';
import { useState } from 'react';
import ButtonPrimary from '../Components/Core/ButtonPrimary';
import BeerCard from '../Components/Beer/BeerCard';
import styles from './Account.module.css'

const Account = ({userData, setUserData, setIsSaved}) => {
  const user_id = window.localStorage.getItem('user_id');
  const token = window.localStorage.getItem('token');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      `https://zero-percent-brews-api.onrender.com/api/user/${user_id}/account`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          newPassword: newPassword,
        }),
      }
    ).then((response) => {
      setNewPassword('');
      if (response.ok) {
        setMessage('Password Updated');
      }
    });
  };

  return (
    <>
      {userData && (
        <>
          <Hero
            message_1={`${userData.username}'s Account`}
            message_2='& Saved Beers'
          />
          <h2>Account information:</h2>
          <div>
            <span className={styles.user_data}>Username: </span>
            {userData.username}
          </div>
          <div>
            <span className={styles.user_data}>Email:</span> {userData.email}
          </div>

          <div className={styles.change_password}>
            <form className={styles.password_form}>
              <label>Change Password:</label>
              <input
                placeholder='Add your new password here'
                type='password'
                value={newPassword}
                onChange={handleChange}
              />
              <ButtonPrimary text={'Submit'} onClick={handleSubmit} />
            </form>
            <div className={styles.confirmation_message}>
              {message}
            </div>
          </div>

          <h2>Your saved beers:</h2>
          <div className={styles.saved_beers}>
            {userData.saved.map((savedBeer) => {
              return (
                <BeerCard key={savedBeer._id} className={styles.beer_card} beerInfo={ savedBeer } parent='beerContainer' userData={userData} setUserData={setUserData} setIsSaved={setIsSaved} />
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Account;
