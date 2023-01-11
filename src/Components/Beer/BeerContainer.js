import { useState } from 'react';
import styles from './BeerContainer.module.css';
import BeerCard from './BeerCard';
import ButtonSecondary from '../Core/ButtonSecondary';
import ButtonTertiary from '../Core/ButtonTertiary';

const BeerContainer = ({ beerData, setBeerData, userData, setUserData }) => {
  const [refinement, setRefinement] = useState('default');
  const [defaultResults, setDefaultResults] = useState(beerData);

  const getMostLiked = () => {
    setRefinement('liked');

    fetch('https://zero-percent-brews-api.onrender.com/api/beers/most-liked')
      .then((response) => response.json())
      .then((data) => {
        setBeerData(data);
      });
  };

  const getLowestCal = () => {
    setRefinement('cals');

    fetch('https://zero-percent-brews-api.onrender.com/api/beers/low-cal')
      .then((response) => response.json())
      .then((data) => {
        setBeerData(data);
      });
  };

  const getBeersByType = (event) => {
    setRefinement('type');

    let type = event.target.value;

    fetch(`https://zero-percent-brews-api.onrender.com/api/beers/type/${type}`)
      .then((response) => response.json())
      .then((data) => {
        setBeerData(data);
      });
  }

  const handleClear = () => {
    setBeerData(defaultResults);
    setRefinement('default');
  }

  return (
    <>
      <label className={styles.refinement_label}>Refine Brews:</label>
      <div className={styles.refinement_field}>
        {refinement === 'liked' ? <ButtonSecondary text={'Most Liked'} /> : <ButtonTertiary text={'Most Liked'} onClick={getMostLiked} />}
   
        {refinement === 'cals' ? <ButtonSecondary text={'Low Cal'} /> : <ButtonTertiary text={'Low Cal'} onClick={getLowestCal} />}
        
        <select
          onChange={getBeersByType}
          className={refinement === 'type' ? styles.refinement_dropdown_selected : styles.refinement_dropdown }
        >
          <option value="" disabled>Type</option>
          <option value="Ale">Ale</option>
          <option value="Cider">Cider</option>
          <option value="Lager">Lager</option>
        </select>
        <span className={styles.clear_refinement} onClick={handleClear}>Clear</span>
      </div>
      <div className={styles.beer_container}>
        {beerData.map((beer) => {
          return <BeerCard key={beer._id} beerInfo={beer} parent='beerContainer' userData={userData} setUserData={setUserData}/>;
        })}
      </div>
    </>
  );
};

export default BeerContainer;
