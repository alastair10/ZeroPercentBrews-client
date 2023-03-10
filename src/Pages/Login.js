import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonPrimary from '../Components/Core/ButtonPrimary';
import Hero from '../Components/Core/Hero';
import styles from './Access.module.css';
import { useAuth } from '../Auth/AuthContext';

const Login = () => {
  const { setTokens, setIsLoggedIn } = useAuth();
  const [error, setError] = useState('');

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let response = await fetch(
      'https://zero-percent-brews-api.onrender.com/api/user/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: userData.email,
          password: userData.password,
        }),
      }
    );

    if (response.status === 200) {
      let data = await response.json();
      // set the data in authContext
      setTokens(data);
      setIsLoggedIn(true);
      navigate('/');
    } else {
      let data = await response.json();
      console.log(data.error);
      setError(data.error);
      navigate('/login');
    }
  };

  return (
    <>
      <Hero message_1={'Welcome back,'} message_2={'smooth hoperator'} />
      <form className={styles.log_reg_form}>
        <label>
          Email
          <input
            type='email'
            name='email'
            value={userData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type='password'
            name='password'
            value={userData.password}
            onChange={handleChange}
          />
        </label>
        <ButtonPrimary text={'Submit'} onClick={handleSubmit} />
        {error && <p className={styles.error_message}>{error}</p>}
      </form>
    </>
  );
};

export default Login;
