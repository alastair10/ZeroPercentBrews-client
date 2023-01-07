import logo from '../../images/primary-logo.svg';
import { Link } from 'react-router-dom';
import './Nav.css';

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='nav__container'>
        <Link className='nav__link--logo' to='/'>
          <img className='nav__logo' src={logo} alt='svg logo' />
        </Link>
        <div className='nav__buttons'>
          <div className='signin'>SIGNIN</div>
          <div className='signup'>SIGNUP</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
