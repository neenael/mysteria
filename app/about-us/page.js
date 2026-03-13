'use client'// import styles from "./page.module.css";
import Link from "next/link";
import {useState, useEffect} from "react";
import {getAboutUsPage} from "@/app/APIREQ/commands";
import styles from './about-us.module.scss'
import Image from "next/image";
import PageSkeleton from "@/app/components/pageSkeleton/pageSkeleton";
import HTMLContent from "@/app/components/HTMLParser/HTMLParser";

export default function AboutUsPage() {
    const [page, setPage] = useState(null);

    useEffect(() => {
        getAboutUsPage().then(setPage).catch(console.error);
    }, []);

    if (!page) return <PageSkeleton/>;

    return (
        <section className={styles.section}>
            <div className={`container ${styles.AboutContainer}`}>

                <h2 className={styles.mobileHeading}>About us</h2>

                <div className={styles.content}>
                    <HTMLContent html={page.acf.descriprion} />

                    {!page.acf.anon_mode &&
                        <div className={`${styles.photos} fadeInUp`}>
                        <Image src={page.acf.sergeis_photo} alt={"Sergei"} width={300} height={0} style={{ height: '100%' }}/>
                            <Image src={page.acf.sophies_photo} alt={"Sophie"} width={300}  height={0} style={{ height: '100%' }}/>


                    </div> }
                </div>

            </div>

        </section>
    );

}