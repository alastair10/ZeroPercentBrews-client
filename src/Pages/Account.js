import Hero from '../Components/Core/Hero';
import BeerContainer from '../Components/Beer/BeerContainer';
import { useState } from 'react';

const Account = () => {

  const user_id = window.localStorage.getItem('user_id');
  const [savedBeers, setSavedBeers] = useState('');

  
  // will need to populate username instead of user_id below
  // pull in BeerContainer to map through saved results
  return (
    <>
      <Hero message_1={'Account details for,'} message_2={user_id} />

    </>
  );
}
 
export default Account;