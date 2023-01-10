import star from '../../images/star.svg';
import styles from './BeerCard.module.css';
import ButtonPrimary from '../Core/ButtonPrimary';
import Badge from '../../images/staff_pick.png'

const BeerCard = ({ beerInfo }) => {
  return (
    <div className={styles.beer}>
      {beerInfo.staffPick && <img className={styles.badge} src={Badge} alt="staff pick badge" />}
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
            <div className={styles.rating}>
              <div className={styles.rating__score}>
                {beerInfo.rating.overall}
              </div>
              <img
                src={star}
                className={styles.rating__star}
                alt='star__icon'
                loading='lazy'
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
        </div>
        <ButtonPrimary path={`/beer/${beerInfo._id}`} text={'More Info'} />
      </div>
    </div>
  );
};

export default BeerCard;
