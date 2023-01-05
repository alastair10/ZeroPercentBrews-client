import star from '../../images/star.svg';
import beerImage from '../../images/beer_placeholder.png';
import './BeerCardExpanded.css';

const BeerCardExpanded = () => {
  return (
    <>
      <h1 className='beer__title'>Moretti Zero</h1>
      <div className='beer__card__container'>

          <img className='beer__image' src={beerImage} />

        <div className='beer__basic__info'>

          <div className='social__proof'>

            <div className='rating'>
              <div className='rating__score'>4.5</div>
              <img src={star} className='rating__star' alt='star__icon'/>
            </div>

            <a className='reviews__info' href='#reviews'>3 Reviews</a>
          </div>
   
          <div className='basic__info__item'><span className='attribute'>From:</span> Italy</div>
          <div className='basic__info__item'><span className='attribute'>Calories:</span> 66 kcal</div>
          <div className='basic__info__desc'>A refreshing and light taste. Great with pasta, pizza or on its own.</div>
        </div>
      </div>
    </>
  );
};

export default BeerCardExpanded;