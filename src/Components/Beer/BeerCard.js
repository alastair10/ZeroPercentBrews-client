import star from '../../images/star.svg';
import beerImage from '../../images/beer_placeholder.png';
import styles from './BeerCard.module.css';

const BeerCard = () => {
  return (
    <>
      <h1 className={styles.beer__title}>Moretti Zero</h1>
      <div className={styles.beer__card__container}>
        <img className={styles.beer__image} src={beerImage} alt='' />

        <div className={styles.beer__basic__info}>
          <div className={styles.social__proof}>
            <div className={styles.rating}>
              <div className={styles.rating__score}>4.5</div>
              <img src={star} className='rating__star' alt='star__icon' />
            </div>
            <a className={styles.reviews__info} href='#reviews'>
              3 Reviews
            </a>
          </div>

          <div className={styles.basic__info__item}>
            <span className={styles.attribute}>From:</span> Italy
          </div>
          <div className={styles.basic__info__item}>
            <span className={styles.attribute}>Calories:</span> 66 kcal
          </div>
          <div className={styles.basic__info__desc}>
            A refreshing and light taste. Great with pasta, pizza or on its own.
          </div>
        </div>
      </div>
    </>
  );
};

export default BeerCard;
