import star from '../../images/star.svg';

const BeerCardExpanded = () => {
  return (
    <>
      <h1 className='beer__title'>Moretti Zero</h1>
      <div className='social__proof'>
        <div className='rating__info'>
          <div className='rating__score'>4.5</div>
          <img src={star} className='rating__star' alt='star__icon'/>
        </div>
        <div className='reviews__info'>3 Reviews</div>
      </div>
      <div className='basic__info'>
        <div className='basic__info__item'>From: Italy</div>
        <div className='basic__info__item'>Calories: 66 kcal</div>
        <div className='basic__info__desc'>A refreshing and light taste. Great with pasta, pizza or on its own.</div>
      </div>
    </>
  );
};

export default BeerCardExpanded;