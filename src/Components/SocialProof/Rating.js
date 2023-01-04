import star from '../../images/star.svg';

const Rating = () => {

  return (
    <>
      <h2 className='review__count'>2 Reviews</h2>
      <div className='rating__item'>
        <img src={star} className='rating__star' alt='star__icon'/>
        <img src={star} className='rating__star' alt='star__icon'/>
        <img src={star} className='rating__star' alt='star__icon'/>
        <img src={star} className='rating__star' alt='star__icon'/>
        <img src={star} className='rating__star' alt='star__icon'/>
        <div className='rating__name'>Overall</div>
      </div>
      <div className='rating__item'>
        <img src={star} className='rating__star' alt='star__icon'/>
        <img src={star} className='rating__star' alt='star__icon'/>
        <img src={star} className='rating__star' alt='star__icon'/>
        <img src={star} className='rating__star' alt='star__icon'/>
        <img src={star} className='rating__star' alt='star__icon'/>
        <div className='rating__name'>Taste</div>
      </div>
      <div className='rating__item'>
        <img src={star} className='rating__star' alt='star__icon'/>
        <img src={star} className='rating__star' alt='star__icon'/>
        <img src={star} className='rating__star' alt='star__icon'/>
        <img src={star} className='rating__star' alt='star__icon'/>
        <img src={star} className='rating__star' alt='star__icon'/>
        <div className='rating__name'>Realness</div>
      </div>
      <div className='rating__item'>
        <img src={star} className='rating__star' alt='star__icon'/>
        <img src={star} className='rating__star' alt='star__icon'/>
        <img src={star} className='rating__star' alt='star__icon'/>
        <img src={star} className='rating__star' alt='star__icon'/>
        <img src={star} className='rating__star' alt='star__icon'/>
        <div className='rating__name'>Value</div>
      </div>
    </>

  );


}

export default Rating;