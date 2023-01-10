import { useEffect } from 'react';
import styles from './BeerContainer.module.css';
import BeerCard from './BeerCard';
import ButtonTertiary from '../Core/ButtonTertiary';

const BeerContainer = ({ beerData, setBeerData }) => {

  const getMostLiked = () => {
      fetch(`http://localhost:4000/api/beers/most-liked`)
        .then((response) => response.json())
        .then((data) => {
          setBeerData(data);
        });
  };

  const getLowestCal = () => {
    fetch(`http://localhost:4000/api/beers/low-cal`)
      .then((response) => response.json())
      .then((data) => {
        setBeerData(data);
      });
};

  return (
    <>
      <div className={styles.refinement_field}>
        <ButtonTertiary text={'Most Liked'} onClick={getMostLiked} />
        <ButtonTertiary text={'Low Cal'} onClick={getLowestCal} />
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
