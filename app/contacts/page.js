'use client'// import styles from "./page.module.css";
import Link from "next/link";
import {useState, useEffect} from "react";
import {getContactsPage} from "@/app/APIREQ/commands";
import PageSkeleton from "@/app/components/pageSkeleton/pageSkeleton";
import ContactForm from "@/app/components/ContactForm/ContactForm";
import styles from './contacts.module.scss'
import HTMLContent from "@/app/components/HTMLParser/HTMLParser";
export default function ContactsUsPage() {
    const [page, setPage] = useState(null);

    useEffect(() => {
        getContactsPage().then(setPage).catch(console.error);
    }, []);

    if (!page) return <PageSkeleton mode={'light'}/>;

    return (
        <section className={styles.contactsSection}>
            <div className="container">
                <h1 className={styles.mobileHeading}>{page.title.rendered}</h1>
                <HTMLContent html={page.acf.text} />

                <ContactForm />
            </div>

        </section>
    );

}
