import styles from './ButtonTertiary.module.css';
import { Link } from 'react-router-dom';

const ButtonPrimary = ({path, text}) => {
  return (
    <Link className={styles.button} to={path}>
      {text}
    </Link>
  );
};

export default ButtonPrimary;
