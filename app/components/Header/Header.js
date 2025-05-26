'use client'
import Link from "next/link";
import styles from "./header.module.scss"
import {usePathname} from "next/navigation";
import {useState} from "react";
const Header = () => {
    const pathname = usePathname()

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <header className={styles.header} >
            <div className={`container ${styles.wrapper}`}>
                <div className={styles.logoWrapper}>
                    <Link href={"/"} className={styles.logo}>
                        Mysteria
                    </Link>


                    <label className={styles.burger}>
                        <input type="checkbox" id="burger" checked={isMenuOpen}
                               onChange={(e) => setIsMenuOpen(e.target.checked)}/>
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>


                </div>
                <nav className={styles.navbar}>
                    <Link href={"/"}
                          className={pathname === '/' || pathname.includes('events') ? styles.active : ''}>Events</Link>
                    <Link href={"/about-us"} className={pathname === '/about-us' ? styles.active : ''}>About us</Link>
                    <Link href={"/cooperate"}
                          className={pathname === '/cooperate' ? styles.active : ''}>Cooperate</Link>
                    <Link href={"/gallery"} className={pathname === '/gallery' ? styles.active : ''}>Gallery</Link>
                    <Link href={"/contacts"} className={pathname === '/contacts' ? styles.active : ''}>Contacts</Link>
                </nav>


                <nav className={`${isMenuOpen && styles.burgerNavOpen} ${styles.burgerNav}`}>
                    <Link href={"/"} onClick={()=>{setIsMenuOpen(false)}}
                          className={pathname === '/' || pathname.includes('events') ? styles.active : ''}>Events</Link>
                    <Link href={"/about-us"} onClick={()=>{setIsMenuOpen(false)}}
                          className={pathname === '/about-us' ? styles.active : ''}>About us</Link>
                    <Link href={"/cooperate"} onClick={()=>{setIsMenuOpen(false)}}
                          className={pathname === '/cooperate' ? styles.active : ''}>Cooperate</Link>
                    <Link href={"/gallery"} onClick={()=>{setIsMenuOpen(false)}}
                          className={pathname === '/gallery' ? styles.active : ''}>Gallery</Link>
                    <Link href={"/contacts"} onClick={()=>{setIsMenuOpen(false)}}
                          className={pathname === '/contacts' ? styles.active : ''}>Contact</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;