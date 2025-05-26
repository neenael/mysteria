import styles from "@/app/components/Events/events.module.scss";
import LocationSVG from "@/app/components/SVG/LocationSVG";
import CalendarSvg from "@/app/components/SVG/CalendarSvg";
import Link from "next/link";

const Event = ({post}) => {
    return (
        <Link key={post.slug}
              href={`/events/${post.slug}`}
              className={styles.eventCard}
              style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.50) 100%), url(${post.acf.thumbnail.url})`,
                  backgroundColor: 'lightgray',
                  backgroundPosition: '50%',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
              }}
        >


            <h3>{post.acf.title}</h3>
            <div className={styles.eventInfoRows}>
                <span><LocationSVG/>{post.acf.event_info.address}</span>
                <span><CalendarSvg />{post.acf.event_info.date_and_time}</span>
            </div>

            {post.acf.status === 'open' &&
                <div className={styles.signupBtn}>
                    Sign up
                </div>
            }

            {post.acf.status === 'registration_closed' &&
                <div className={styles.signupBtn}>
                    Sold out
                </div>
            }


        </Link>
    );
};

export default Event;