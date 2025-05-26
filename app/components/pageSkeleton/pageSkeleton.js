import React from 'react';
import styles from './pageSkeleton.module.scss'
const PageSkeleton = ({mode}) => {
    return (
        <section className={mode === "dark" ? styles.dark : ""}>
            <div className={"container"}>
                <div className={styles.skeletonWrapper}>
                    <div className={styles.thinCol}></div>
                    <div className={styles.thinCol}></div>
                    <div className={styles.boldCol}></div>
                </div>
            </div>
        </section>


    );
};

export default PageSkeleton;