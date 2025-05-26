'use client'// import styles from "./page.module.css";
import Link from "next/link";
import {useState, useEffect} from "react";
import {getDatenschutzerklarungPage} from "@/app/APIREQ/commands";
import styles from "@/app/impressum/impressum.module.scss";
import HTMLContent from "@/app/components/HTMLParser/HTMLParser";
import PageSkeleton from "@/app/components/pageSkeleton/pageSkeleton";
export default function DatenschutzerklarungPage() {
    const [page, setPage] = useState(null);

    useEffect(() => {
        getDatenschutzerklarungPage().then(setPage).catch(console.error);
    }, []);

    if (!page) return <PageSkeleton mode={'light'} />;

    return (
        <section className={styles.section}>
            <div className="container">
                <h1>{page.title.rendered}</h1>
                <HTMLContent html={page.content.rendered}/>
            </div>
        </section>
    );

}
