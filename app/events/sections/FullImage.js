import React from 'react';
import styles from '../eventPage.module.scss'
const FullImage = ({src}) => {
    return (
        <section className={styles.fullImage} style={{backgroundImage: `url(${src})` }}>

        </section>
    );
};

export default FullImage;