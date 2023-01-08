import './Hero.css';
import logo from '../../images/primary-logo.svg';

const Hero = ({message_1, message_2}) => {
  return (
    <div className='hero'>
      <div className='hero__container'>
        <img className='hero__logo' src={logo} alt='svg logo' />
        <div className='hero__message'>
          <p className='hero__message_1'>{message_1}</p>
          <p className='hero__message_2'>{message_2}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
