'use client'// import styles from "./page.module.css";
import Link from "next/link";
import {useState, useEffect} from "react";
import {getContactsPage} from "@/app/APIREQ/commands";
import PageSkeleton from "@/app/components/pageSkeleton/pageSkeleton";
import ContactForm from "@/app/components/ContactForm/ContactForm";
import styles from './contacts.module.scss'
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

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A possimus voluptates sapiente ex dolor modi voluptatum. Laborum provident, voluptate amet asperiores officiis cupiditate ratione pariatur numquam eius deserunt nihil velit, nostrum, perspiciatis nam fugiat odit dolor! Temporibus, laudantium autem.
                </p>

                <ContactForm />
            </div>

        </section>
    );

}
