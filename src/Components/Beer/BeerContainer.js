import { useEffect } from 'react';
import styles from './BeerContainer.module.css';
import BeerCard from './BeerCard';
import ButtonTertiary from '../Core/ButtonTertiary';

const BeerContainer = ({ beerData, setBeerData }) => {

  const getMostLiked = () => {
    fetch('http://localhost:4000/api/beers/most-liked')
      .then((response) => response.json())
      .then((data) => {
        setBeerData(data);
      });
  };

  const getLowestCal = () => {
    fetch('http://localhost:4000/api/beers/low-cal')
      .then((response) => response.json())
      .then((data) => {
        setBeerData(data);
      });
  };

  const getBeersByType = (event) => {
    let type = event.target.value;
    fetch(`http://localhost:4000/api/beers/${type}`)
      .then((response) => response.json())
      .then((data) => {
        setBeerData(data);
      });
  }

  return (
    <>
      <div className={styles.refinement_field}>
        <ButtonTertiary text={'Most Liked'} onClick={getMostLiked} />
        <ButtonTertiary text={'Low Cal'} onClick={getLowestCal} />
        <select
          onChange={getBeersByType}
          className="discover__dropdown"
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
