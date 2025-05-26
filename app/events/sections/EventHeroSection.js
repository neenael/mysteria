import styles from "../eventPage.module.scss";
import Link from "next/link";
import LocationSVG from "@/app/components/SVG/LocationSVG";
import CalendarSvg from "@/app/components/SVG/CalendarSvg";
import TicketSvg from "@/app/components/SVG/TicketSVG";
import Slider from "@/app/components/Slider/Slider";


const EventHeroSection = ({post}) => {
    return (
        <section className={styles.eventHero}>
            <div className={styles.bgImage}></div>

            <div className={`${styles.heroContainer} container`}>

                <div className={styles.headingRow}>
                    <h1>{post.acf.title}</h1>
                    <Link href={"#sign-up"} className={styles.signUpBtn}>
                        Sign up
                    </Link>
                </div>

                <div className={styles.badges}>

                    <div className={styles.badge}>
                        <LocationSVG color={"#fff"} size={16}/> {post.acf.event_info.address}
                    </div>
                    <div className={styles.badge}>
                        <CalendarSvg color={"#fff"} size={16}/> {post.acf.event_info.date_and_time}
                    </div>
                    <div className={styles.badge}>
                        <TicketSvg color={"#fff"} size={16}/> {post.acf.event_info.price}
                    </div>

                </div>


                <Link href={"#sign-up"} className={`${styles.signUpBtn} ${styles.signUpBtnMobile}`}>
                    Sign up
                </Link>

                <p className={styles.desciption}>
                    {post.acf.description}
                </p>

            </div>


            {post.acf.add_slider &&
                <section className={styles.eventSlider}>

                    <div className="container">
                        <Slider photos={post.acf.slider_images} height={460}/>
                    </div>

                </section>

            }


        </section>
    );
};

export default EventHeroSection;