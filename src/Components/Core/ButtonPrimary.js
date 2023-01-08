import styles from './ButtonPrimary.module.css';
import { Link } from 'react-router-dom';

const ButtonPrimary = (props) => {
  
  if (props.onClick) {
    return (
      <button 
        className={styles.button}
        onClick={props.onClick}
      >
        {props.text}
      </button>
    )
  } else {
    return (
      <Link className={styles.button} to={props.path}>
        {props.text}
      </Link>
    );
  }

};

export default ButtonPrimary;
