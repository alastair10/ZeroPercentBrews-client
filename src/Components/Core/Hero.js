import './Hero.css';
import logo from '../../images/primary-logo.svg';

const hero = () => {
  return (
    <div className='hero'>
      <div className='hero__container'>
        <img className='hero__logo' src={logo} alt='svg logo' />
        <div className='hero__message'>
          <p className='hero__message_1'>Find the best tasting,</p>
          <p className='hero__message_2'>hangover free beers.</p>
        </div>
      </div>
    </div>
  );
};

export default hero;
