import star from '../../images/star.svg';
import './BeerCardExpanded.css';
import ButtonPrimary from '../Core/ButtonPrimary';

const BeerCardExpanded = (props) => {
  return (
    <>
      {props.beerData && (
        <>
          <h1 className='beer__title'>{props.beerData.title}</h1>
          <div className='beer__card__container'>
            <img className='beer__image' src={props.beerData.image} alt='' />
            <div className='beer__basic__info'>
              <div className='social__proof'>
                <div className='rating'>
                  <div className='rating__score'>
                    {props.beerData.rating.overall}
                  </div>
                  <img src={star} className='rating__star' alt='star__icon' />
                </div>
                <a className='reviews__info' href='#reviews'>
                  {props.beerData.reviews.length} Reviews
                </a>
              </div>
              <div className='basic__info__item'>
                <span className='attribute'>From:</span>{' '}
                {props.beerData.country}
              </div>
              <div className='basic__info__item'>
                <span className='attribute'>Calories:</span>{' '}
                {props.beerData.calories} kcal
              </div>
              <div className='basic__info__desc'>
                {props.beerData.description}
              </div>
              <ButtonPrimary path={`/beer/${props.beerData._id}/review`} text={'Add Review'} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BeerCardExpanded;
