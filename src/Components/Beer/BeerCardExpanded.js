import star from '../../images/star.svg';
import ButtonTertiary from "../Core/ButtonTertiary";
import ButtonSecondary from "../Core/ButtonSecondary";

import './BeerCardExpanded.css';

const BeerCardExpanded = ({ beerData }) => {
  return (
    <>
      {beerData && (
        <>
          <h1 className='beer__title'>{beerData.title}</h1>
          <div className='beer__card__container'>
            <img className='beer__image' src={beerData.image} alt='' />
            <div className='beer__basic__info'>
              <div className='social__proof'>
                <div className='rating'>
                  <div className='rating__score'>{beerData.upvote}</div>
                  <img src={star} className='rating__star' alt='star__icon' />
                </div>
                <a className='reviews__info' href='#reviews'>
                  {beerData.comments.length} Comments
                </a>
              </div>
              <div className='basic__info__item'>
                <span className='attribute'>From:</span> {beerData.country}
              </div>
              <div className='basic__info__item'>
                <span className='attribute'>Calories:</span> {beerData.calories}{' '}
                kcal
              </div>
              <div className='basic__info__desc'>{beerData.description}</div>
              <ButtonSecondary text={'Favourite'} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BeerCardExpanded;
