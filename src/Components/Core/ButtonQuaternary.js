import styles from './ButtonQuaternary.module.css';
import { Link } from 'react-router-dom';

const ButtonQuaternary = ({path, text}) => {
  return (
    <Link className={styles.button} to={path}>
      {text}
    </Link>
  );
};

export default ButtonQuaternary;
