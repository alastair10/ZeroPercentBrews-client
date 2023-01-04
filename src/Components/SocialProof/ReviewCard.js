import star from '../../images/star.svg';

const ReviewCard = () => {

  return (
    <>
      <div className='review__info'>
        <div className='rating__score'>4.5</div>
        <img src={star} className='rating__star' alt='star__icon'/>
        <h3 className='review__title'>So good the Italian’s want it back</h3>
        <div className='review__body'>Not too bad. A bit bitter. But I like it.</div>
        <div className='review__author'>AlastairLanderFyfe</div>
      </div>
    
    </>

  );

}

export default ReviewCard;