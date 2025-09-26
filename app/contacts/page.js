'use client'
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
            <div className="container fadeInUp">
                <h1 className={styles.mobileHeading}>{page.title.rendered}</h1>
                <HTMLContent className={'animate__animated animate__fadeIn'} html={page.acf.text} />

                <ContactForm className={'animate__animated animate__fadeIn'} />
            </div>

        </section>
    );

}
