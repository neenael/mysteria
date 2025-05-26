'use client'
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react'
import styles from './ticket.module.scss'
import PageSkeleton from "@/app/components/pageSkeleton/pageSkeleton";

export function TicketPage() {
    return (
        // You could have a loading skeleton as the `fallback` too
        <Suspense fallback={<PageSkeleton mode={'dark'} />}>
            <TicketPageRender />
        </Suspense>
    )
}
const TicketPageRender = () => {
    const searchParams = useSearchParams();
    return (
        <section className={styles.ticketSection}>

            <div className={`container ${styles.ticketContainer}`}>

                <div className={styles.ticketWrapper}>
                    <div className={styles.headWrapper}>
                        <span className={styles.ticketFor}>Ticket for</span>
                        <span className={styles.eventName}>{searchParams.get('event')}</span>

                        <span className={styles.name}> {searchParams.get('name')}</span>

                        <span className={styles.email}>Email: {searchParams.get('email')}</span>
                        <span className={styles.phone}>Phone: {searchParams.get('phone')}</span>

                        <div className={styles.barcode}>
                        </div>
                    </div>

                    <div className={styles.bottomWrapper}>

                        <span className={styles.metaInfo}>Date of purchase: {searchParams.get('date')}</span>
                        <span className={styles.metaInfo}>Event ID: {searchParams.get('event_id')}</span>
                        <span className={styles.metaInfo}>Ticket ID: {searchParams.get('ticket')}</span>
                    </div>

                </div>
            </div>


        </section>
    );
};

export default TicketPage;