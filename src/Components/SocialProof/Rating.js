import star from '../../images/star.svg';
import './Rating.css';

const Rating = (props) => {

const generateStars = (value) => {

  return [...Array(value)].map((e, i) => <img src={star} className='rating__star' alt='star__icon' key={i}/>)
}

  return (
    <>
    {props.beerData &&
      (<>
    <h2 className='review__count'  id='reviews'>{props.beerData.reviews.length} Reviews</h2>

    <div className='ratings__container'>
      <div className='rating__item'>
      {generateStars(props.beerData.rating.overall)}
        <div className='rating__name'>Overall</div>
      </div>
      <div className='rating__item'>
      {generateStars(props.beerData.rating.taste)}
        <div className='rating__name'>Taste</div>
      </div>
      <div className='rating__item'>
      {generateStars(props.beerData.rating.realness)}
        <div className='rating__name'>Realness</div>
      </div>
      <div className='rating__item'>
      {generateStars(props.beerData.rating.value)}
        <div className='rating__name'>Value</div>
      </div>
    </div>
  </>)}
</>

  );


}

export default Rating;