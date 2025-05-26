'use client'// import styles from "./page.module.css";
import Link from "next/link";
import {useState, useEffect} from "react";
import {getAboutUsPage} from "@/app/API/commands";
export default function ContactUsPage() {
    const [page, setPage] = useState(null);

    useEffect(() => {
        getContactPage().then(setPage).catch(console.error);
    }, []);

    if (!page) return <p>Загрузка...</p>;

    return (
        <div>
            <h1>{page.title.rendered}</h1>
        </div>
    );

}
