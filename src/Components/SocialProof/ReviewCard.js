import star from '../../images/star.svg';
import './ReviewCard.css'

const ReviewCard = () => {

  return (
    <>
      <div className='review__info'>

        <div className='review__header'>
          <div className='rating'>
            <div className='rating__score'>4.5</div>
            <img src={star} className='rating__star' alt='star__icon'/>
          </div>
          <h3 className='review__title'>So good the Italian’s want it back</h3>
        </div>

        <div className='review__body'>Not too bad. A bit bitter. But I like it.</div>
        <div className='review__author'>AlastairLanderFyfe</div>
      </div>
    
    </>

  );

}

export default ReviewCard;