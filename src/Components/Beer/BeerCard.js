import styles from './BeerCard.module.css';
import ButtonPrimary from '../Core/ButtonPrimary';

const BeerCard = ({ beerInfo }) => {

  return (
    <div className={styles.beer}>
      <img
        className={styles.beer__image}
        src={beerInfo.image}
        alt='beer'
        loading='lazy'
      />
      <div className={styles.info__container}>
        <div className={styles.beer__basic__info}>
          <h3 className={styles.beer__title}>{beerInfo.title}</h3>
          <div className={styles.social__proof}>
            <div className={styles.upvote}>
              <div className={styles.upvote__score}>{beerInfo.upvote}</div>
            </div>
            <button className={styles.upvote__button}>⬆️</button>
          </div>

          <div className={styles.basic__info__item}>
            <span className={styles.attribute}>From:</span> {beerInfo.country}
          </div>
          <div className={styles.basic__info__item}>
            <span className={styles.attribute}>Calories:</span>{' '}
            {beerInfo.calories} kcal
          </div>
        </div>
        <ButtonPrimary path={`/beer/${beerInfo._id}`} text={'More Info'} />
      </div>
    </div>
  );
};

export default BeerCard;
