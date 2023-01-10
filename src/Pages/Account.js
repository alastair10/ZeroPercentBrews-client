import Hero from '../Components/Core/Hero';
import BeerContainer from '../Components/Beer/BeerContainer';
import { useEffect } from 'react';
import Loader from '../Components/Core/Loader';

const Account = () => {
  const [savedBeers, setSavedBeers] = useState();
  useEffect(() => {
    fetch(`https://zero-percent-brews-api.onrender.com/api/beers`)
      .then((response) => response.json())
      .then((data) => {
        setTimeout(
          () =>
            setSavedBeers(
              data.sort((a, b) => {
                return b.comments.length - a.comments.length;
              })
            ),
          2000
        );
      });
  }, []);
  
  
  return (
    <>
      <Hero message_1={'Account details for,'} message_2={'USERNAME_HERE'} />
      {savedBeers ? <BeerContainer beerData={savedBeers} /> : <Loader />}
    </>
  );
}
 
export default Account;