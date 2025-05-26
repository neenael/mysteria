import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Events from "@/app/components/Events/Events";
export default function Home() {
  return (

    <section className={styles.page}>
        <div className={`container ${styles.eventsSection}`}>
            <Events skeletonNumber={6}/>
        </div>

    </section>
  );
}
