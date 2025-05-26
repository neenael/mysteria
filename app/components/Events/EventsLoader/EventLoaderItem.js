import styles from './eventsLoader.module.scss'

const EventLoaderItem = () => {
    return (
        <div className={styles.card}>

            <div className={styles.title}></div>
            <div className={styles.rows}>
                <div className={styles.rowLocation}></div>
                <div className={styles.rowTime}></div>
            </div>

            <div className={styles.button}></div>
        </div>
    );
};

export default EventLoaderItem;