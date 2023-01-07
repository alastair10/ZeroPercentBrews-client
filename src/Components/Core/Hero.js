import './Hero.css';

const hero = () => {
  return (
    <div className='hero'>
      <div className='hero__container'>
        <p className='hero__tagline'>
          <span className='hero__span'>Actually</span> Not That Bad
        </p>
        <div className="hero__message">
          <p className='hero__message_1'>
            Find the best tasting,
          </p>
          <p className='hero__message_2'>
            hangover free beers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default hero;
