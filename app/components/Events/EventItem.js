import styles from "@/app/components/Events/events.module.scss";
import LocationSVG from "@/app/components/SVG/LocationSVG";
import CalendarSvg from "@/app/components/SVG/CalendarSvg";
import Link from "next/link";

const EventItem = ({title, slug, thumbnailUrl,  address, time, status}) => {
    return (
        <Link
              href={`/events/${slug}`}
              className={styles.eventCard}
              style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.50) 100%), url(${thumbnailUrl})`,
                  backgroundColor: 'lightgray',
                  backgroundPosition: '50%',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
              }}
        >


            <h3>{title}</h3>
            <div className={styles.eventInfoRows}>
                <span><LocationSVG color={"#fff"} size={13}/>{address}</span>
                <span><CalendarSvg color={"#fff"} size={13}/>{time}</span>
            </div>

            {status === 'open' &&
                <div className={styles.signupBtn}>
                    Sign up
                </div>
            }

            {status === 'registration_closed' &&
                <div className={styles.signupBtn}>
                    Sold out
                </div>
            }


        </Link>
    );
};

export default EventItem;