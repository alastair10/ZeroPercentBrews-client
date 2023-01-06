import star from '../../images/star.svg';
// import beerImage from '../../images/beer_placeholder.png';
import styles from './BeerCard.module.css';
import ButtonPrimary from '../Core/ButtonPrimary';

const BeerCard = ({ beerInfo }) => {

  console.log(beerInfo)
  return (
    <div className={styles.beer}>
      <div className={styles.beer__card__container}>
        <img className={styles.beer__image} src={beerInfo.image} alt='' />
        <div className={styles.beer__basic__info}>
          <h3 className={styles.beer__title}>{beerInfo.title}</h3>
          <div className={styles.social__proof}>
            <div className={styles.rating}>
              <div className={styles.rating__score}>
                {beerInfo.rating.overall}
              </div>
              <img
                src={star}
                className={styles.rating__star}
                alt='star__icon'
              />
            </div>
            <a className={styles.reviews__info} href='#reviews'>
              {beerInfo.reviews.length} Reviews
            </a>
          </div>
          <div className={styles.basic__info__item}>
            <span className={styles.attribute}>From:</span> {beerInfo.country}
          </div>
          <div className={styles.basic__info__item}>
            <span className={styles.attribute}>Calories:</span>{' '}
            {beerInfo.calories} kcal
          </div>
          <ButtonPrimary id={beerInfo._id} text={"More Info"} />
          
        </div>
      </div>
    </div>
  );
};

export default BeerCard;


