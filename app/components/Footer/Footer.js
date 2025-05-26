import styles from './footer.module.scss'
// import Marquee from "@/app/components/Footer/Mariquee/Mariquee";
import Marquee from 'react-fast-marquee';
import Link from "next/link";
import InstaSvg from "@/app/components/SVG/InstaSvg";
const Footer = (props) => {
    return (
        <footer className={styles.footer} style={{
            backgroundImage: `url('/images/footer_image.png')`,
        }}>
            <Marquee autoFill={true} gradient={false} speed={50} style={{backgroundColor: "#C20037", color: "#fff", fontSize: "17px"}}>
                 Build connections with people all over the world&nbsp;|&nbsp;
            </Marquee>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.firstCol}>
                        <Link href={'/'} className={styles.logo}>
                            Mysteria
                        </Link>

                        <div className={styles.stayBlock}>
                        <span>
                            Stay in touch with us
                        </span>
                            <div className={styles.socials}>
                                <Link href={'/'} className={styles.eventsBtn}>
                                    Events
                                </Link>

                                <Link href={'https://www.instagram.com/mysteria_vienna/'}>
                                    <InstaSvg/>
                                </Link>

                            </div>
                        </div>
                    </div>


                    <div className={styles.secondCol}>
                        <nav>
                            <Link href={'/'}>Events</Link>
                            <Link href={'/about-us'}>About us</Link>
                            <Link href={'/cooperate'}>Cooperate</Link>
                            <Link href={'/gallery'}>Gallery</Link>
                            <Link href={'/contacts'}>Contacts</Link>

                        </nav>
                        <div className={styles.rulesLinks}>
                            <Link href={'/impressum'}>Impressum</Link>
                            <Link href={'/datenschutzerklarung'}>Datenschutzerklärung</Link>

                        </div>

                    </div>
                </div>

            </div>

        </footer>
    );
};

export default Footer;





