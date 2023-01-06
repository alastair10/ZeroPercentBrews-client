import styles from './ButtonSecondary.module.css';
import { Link } from 'react-router-dom';

const ButtonSecondary = ({path, text}) => {
  return (
    <Link className={styles.button} to={path}>
      {text}
    </Link>
  );
};

export default ButtonSecondary;
