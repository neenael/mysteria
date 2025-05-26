import styles from './marquee.module.scss';

export default function Marquee({ text }) {
    return (
        <div className={styles.marqueeWrapper}>
            <div className={styles.marqueeContent}>
                <span>{text}</span>
                <span>{text}</span>
            </div>
        </div>
    );
}