'use client'// import styles from "./page.module.css";
import Link from "next/link";
import React, {useState, useEffect} from "react";
import {getGalleryPage} from "@/app/APIREQ/commands";
import Slider from "@/app/components/Slider/Slider";

import styles from './gallery.module.scss'
import PageSkeleton from "@/app/components/pageSkeleton/pageSkeleton";
export default function GalleryPage() {
    const [page, setPage] = useState(null);

    useEffect(() => {
        getGalleryPage().then(setPage).catch(console.error);
    }, []);

    if (!page) return <PageSkeleton mode={'dark'} />;

    return (
        <section>

            <div className="container">
                <h1 className={styles.mobileHeading}>{page.title.rendered}</h1>
                <Slider photos={page.acf.gallery} height={450}/>
            </div>

        </section>
    );

}
