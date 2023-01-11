import Hero from '../Components/Core/Hero';
import { useState, useEffect } from 'react';
import ButtonPrimary from '../Components/Core/ButtonPrimary';
import BeerCard from '../Components/Beer/BeerCard';

const Account = ({userData, setUserData}) => {
  const user_id = window.localStorage.getItem('user_id');
  const token = window.localStorage.getItem('token');
  // const [userData, setUserData] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // fetch(`https://zero-percent-brews-api.onrender.com/api/user/${user_id}`, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${token}`,
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setUserData(data);
    //   });
  }, [token, user_id]);

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

console.log(userData.saved)

  return (
    <>
      {userData && (
        <>
          <Hero
            message_1={'Account details for:'}
            message_2=<strong className='review__title'>
              {userData.username}
            </strong>
          />
          <h2 className='beer__title'>Account information:</h2>
          <div className='info__item'>
            <span className='attribute'>Username: </span>
            {userData.username}
          </div>
          <div className='info__item'>
            <span className='attribute'>Email:</span> {userData.email}
          </div>
          <form>
            <label>Change Password:</label>
            <div>{message}</div>
            <input
              placeholder='Add your new password here'
              type='password'
              value={newPassword}
              onChange={handleChange}
            />
            <ButtonPrimary text={'Submit'} onClick={handleSubmit} />
          </form>
          <h2 className='beer__title'>Your saved beers:</h2>
          <div>
            {userData.saved.map((savedBeer) => {
              return (
                <BeerCard beerInfo={ savedBeer } parent='beerContainer'/>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Account;
