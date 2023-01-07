import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loader__beer}></div>
      <div className={styles.loader__text}>Pouring...</div>
    </div>
  );
};

export default Loader;
