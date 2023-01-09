import footer from '../../images/inverse-logo.svg';
import git from '../../images/github-mark-white.svg';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className='footer__container'>
        <div className='footer__logo'>
          <Link to='/'>
            <img src={footer} alt='svg logo' />
          </Link>
        </div>
        <div className='footer__info'>
          <div className='footer__info--left'>
            <h4 className='info__header'>The Team</h4>
            <ul className='list'>
              <li className='list__item'>
                <a href='https://github.com/alastair10' className='link'>
                  <img src={git} alt='git logo' className='link__git' />
                  <span>Alastair</span>
                </a>
              </li>
              <li className='list__item'>
                <a href='https://github.com/tomfyfe85' className='link'>
                  <img src={git} alt='git logo' className='link__git' />
                  <span>Tom</span>
                </a>
              </li>
              <li className='list__item'>
                <a href='https://github.com/josephclander' className='link'>
                  <img src={git} alt='git logo' className='link__git' />
                  <span>Joe</span>
                </a>
              </li>
              <li className='list__item'>
                <a href='https://github.com/lwly-jpg' className='link'>
                  <img src={git} alt='git logo' className='link__git' />
                  <span>Adon</span>
                </a>
              </li>
            </ul>
          </div>
          <div className='footer__info--right'>
            <h4 className='info__header'>The App</h4>
            <ul className='list'>
              <li className='list__item'>
                <a
                  href='https://github.com/alastair10/ZeroPercentBrews-api'
                  className='link'
                >
                  API Repo
                </a>
              </li>
              <li className='list__item'>
                <a
                  href='https://github.com/alastair10/ZeroPercentBrews-client'
                  className='link'
                >
                  Client Repo
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
