import styles from './ButtonTertiary.module.css';
import { Link } from 'react-router-dom';

const ButtonTertiary = ({path, text}) => {
  return (
    <Link className={styles.button} to={path}>
      {text}
    </Link>
  );
};

export default ButtonTertiary;
