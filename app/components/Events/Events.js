'use client';

import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {getCategories, getPosts, usePosts} from "@/app/APIREQ/commands";
import styles from './events.module.scss'
import Link from "next/link";
import LocationSVG from "@/app/components/SVG/LocationSVG";
import CalendarSvg from "@/app/components/SVG/CalendarSvg";
import {redirect} from "next/navigation";
import EventItem from "@/app/components/Events/EventItem";
import EventLoaderItem from "@/app/components/Events/EventsLoader/EventLoaderItem";
export default function Events({skeletonNumber}) {
    const [posts, setPosts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCat, setSelectedCat] = useState('all');
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        setLoading(true);
        const postsData = await getPosts(selectedCat);
        const catsData = await getCategories();

        setPosts(postsData);
        setCategories(catsData);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, [selectedCat]);

    const handleCategoryClick = (catId) => {
        setSelectedCat(catId);
    };

    return (
        <div className={styles.wrapper} id={"events"}>

            <h2 className={styles.mobileHeading}>Events</h2>
            <div className={styles.categoriesSet}>
                <button onClick={() => handleCategoryClick('all')}
                        className={selectedCat === 'all' ? `${styles.active} ${styles.badge}` : styles.badge}
                >
                    All events
                </button>

                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        className={cat.id === selectedCat ? `${styles.active} ${styles.badge}` : styles.badge}
                        onClick={() => handleCategoryClick(cat.id)}>
                        {cat.name}

                    </button>
                ))}
            </div>

            {loading ? (
                    <div className={styles.eventCards}>
                        {Array.from({ length: skeletonNumber }).map((_, index) => (
                            <EventLoaderItem key={index} />
                        ))}

                    </div>




            ) : (
                <div className={styles.eventCards}>
                    {posts.length === 0 && <p>Нет записей для выбранной категории.</p>}

                    {posts.map((post) => (

                        post.acf.status === 'hided' ? '' :
                            (<EventItem
                           slug={post.slug}
                           thumbnailUrl={post.acf.thumbnail.url}
                           time={post.acf.event_info.date_and_time}
                           address={post.acf.event_info.address}
                           title={post.acf.title}
                           status={post.acf.status}
                           key={post.id}/>)
                    ))}




                </div>
            )}
        </div>
    );
}