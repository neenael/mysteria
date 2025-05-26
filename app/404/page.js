import React from 'react';
import styles from './notFound.module.scss'
import Link from "next/link";
const Page = () => {
    return (
        <section className={styles.notFoundSection}>

            <Link href={'/'} className={styles.homeBtn}>
                Home page
            </Link>
        </section>
    );
};

export default Page;