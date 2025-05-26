'use client'// import styles from "./page.module.css";
import Link from "next/link";
import {useState, useEffect} from "react";
import {getCooperatePage} from "@/app/APIREQ/commands";
import styles from './cooperate.module.scss'
import PageSkeleton from "@/app/components/pageSkeleton/pageSkeleton";
import HTMLContent from "@/app/components/HTMLParser/HTMLParser";
export default function CooperatePage() {
    const [page, setPage] = useState(null);

    useEffect(() => {
        getCooperatePage().then(setPage).catch(console.error);
    }, []);

    if (!page) return <PageSkeleton mode={'light'}/>;

    return (
        <section className={styles.section}>
            <div className={'container'}>

                <div className={styles.content}>
                    <h1 className={styles.mobileHeading}>Cooperate</h1>

                    <HTMLContent html={page.acf.text} />

                </div>

            </div>

        </section>
    );

}
