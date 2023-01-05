import star from '../../images/star.svg';
import beerImage from '../../images/beer_placeholder.png';
import './BeerCardExpanded.css';

const BeerCardExpanded = (props) => {
  return (
    <>
      <h1 className='beer__title'>{props.beerData.title}</h1>
      <div className='beer__card__container'>

          <img className='beer__image' src={beerImage} />

        <div className='beer__basic__info'>

          <div className='social__proof'>

            <div className='rating'>
              <div className='rating__score'>{props.beerData.overall}</div>
              <img src={star} className='rating__star' alt='star__icon'/>
            </div>

            <a className='reviews__info' href='#reviews'>{props.beerData.reviewCount} Reviews</a>
          </div>
   
          <div className='basic__info__item'><span className='attribute'>From:</span> {props.beerData.country}</div>
          <div className='basic__info__item'><span className='attribute'>Calories:</span> {props.beerData.calories} kcal</div>
          <div className='basic__info__desc'>A refreshing and light taste. Great with pasta, pizza or on its own.</div>
        </div>
      </div>
    </>
  );
};

export default BeerCardExpanded;