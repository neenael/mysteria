'use client'// import styles from "./page.module.css";
import Link from "next/link";
import {useState, useEffect} from "react";
import {getRulesPage} from "@/app/APIREQ/commands";
import HTMLContent from "@/app/components/HTMLParser/HTMLParser";
import styles from './rules.module.scss'
import PageSkeleton from "@/app/components/pageSkeleton/pageSkeleton";
export default function RulesPage() {
    const [page, setPage] = useState(null);

    useEffect(() => {
        getRulesPage().then(setPage).catch(console.error);
    }, []);

    if (!page) return  <PageSkeleton mode={'light'} />;

    return (
        <section className={styles.section}>
            <div className="container">
                <h1>{page.title.rendered}</h1>
                <HTMLContent html={page.content.rendered} />
            </div>

        </section>
    );

}
