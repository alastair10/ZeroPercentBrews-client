import styles from './BeerContainer.module.css';
import BeerCard from './BeerCard';

const BeerContainer = () => {
  return (
    <div className={styles.beer_container}>
      <BeerCard />
    </div>
  );
};

export default BeerContainer;
