import { Link } from 'react-router-dom';
import homeButton from '../../images/home__logo.png';
import './Nav.css';
import ButtonTertiary from './ButtonTertiary';
import ButtonSecondary from './ButtonSecondary';

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='nav__container'>
        <Link className='nav__link--logo' to='/'>
          <img className='nav__home' src={homeButton} alt='svg logo' />
        </Link>
        <div className='nav__buttons'>
          <ButtonTertiary path={'/login'} text={'Log In'} />
          <ButtonSecondary path={'/register'} text={'Sign Up'} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
