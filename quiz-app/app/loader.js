// components/Loader.js
import styles from './loader.module.css';

const Loader = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.loader}>
                Loading...
            </div>
        </div>
    );
};

export default Loader;
