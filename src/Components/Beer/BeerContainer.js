import { useState, useEffect } from 'react';
import styles from './BeerContainer.module.css';
import BeerCard from './BeerCard';
import ButtonSecondary from '../Core/ButtonSecondary';
import ButtonTertiary from '../Core/ButtonTertiary';

const BeerContainer = ({ beerData, setBeerData }) => {
  const [refinedLiked, setRefinedLiked] = useState(false);
  const [refinedCals, setRefinedCals] = useState(false);
  const [refinedType, setRefinedType] = useState(false);
  const [refinement, setRefinement] = useState('default');

  const getMostLiked = () => {
    // setRefinedType(false);
    // setRefinedCals(false);
    // setRefinedLiked(true);
    setRefinement('liked');

    fetch('http://localhost:4000/api/beers/most-liked')
      .then((response) => response.json())
      .then((data) => {
        setBeerData(data);
      });
  };

  const getLowestCal = () => {
    // setRefinedLiked(false);
    // setRefinedType(false);
    // setRefinedCals(true);
    setRefinement('cals');

    fetch('http://localhost:4000/api/beers/low-cal')
      .then((response) => response.json())
      .then((data) => {
        setBeerData(data);
      });
  };

  const getBeersByType = (event) => {
    setRefinement('type');
    let type = event.target.value;
    fetch(`http://localhost:4000/api/beers/${type}`)
      .then((response) => response.json())
      .then((data) => {
        setBeerData(data);
      });
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
          <option value="">Type</option>
          <option value="Ale">Ale</option>
          <option value="Cider">Cider</option>
          <option value="Lager">Lager</option>
        </select>
      </div>
      <div className={styles.beer_container}>
        {beerData.map((beer) => {
          return <BeerCard key={beer._id} beerInfo={beer} />;
        })}
      </div>
    </>
  );
};

export default BeerContainer;
