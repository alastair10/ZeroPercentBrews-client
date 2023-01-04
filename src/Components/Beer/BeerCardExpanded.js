import star from '../../images/star.svg';

const BeerCardExpanded = () => {
  return (
    <>
      <h1>Moretti Zero</h1>
      <div className='social__proof'>
        <div className='rating__info'>
          <div className='rating__score'>4.5</div>
          <img src={star} className='rating__star' alt='star__icon'/>
        </div>
      </div>
    </>
  );
};

export default BeerCardExpanded;