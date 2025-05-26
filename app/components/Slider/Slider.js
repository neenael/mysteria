'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';
import 'swiper/css';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// import 'swiper/css/navigation';
import styles from './slider.module.scss'
import Image from "next/image";
import {useState} from "react";
export default function Slider({photos, height}) {
    const [fullscreenImage, setFullscreenImage] = useState(null);
    return (

        <div className={styles.sliderWrapper}>

            <div className={styles.navigationRow}>
                <button className={`${styles.prevBtn} swiper-button-prev`}>
                    <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.94031 5.93748L6.44791 0.437479C7.03331 -0.147921 7.98021 -0.145021 8.56361 0.441378C9.14711 1.02828 9.14511 1.97798 8.55971 2.56248L4.11591 6.99998L8.55971 11.4375C9.14511 12.022 9.14711 12.9717 8.56361 13.5586C8.27141 13.853 7.88761 14 7.50381 14C7.12201 14 6.74011 13.8545 6.44791 13.5625L0.94031 8.06248C0.65881 7.78128 0.50001 7.39888 0.50001 6.99998C0.50001 6.60108 0.65881 6.21878 0.94031 5.93748Z"
                            fill="white"/>
                    </svg>

                </button>
                <button className={`${styles.nextBtn} swiper-button-next`}>
                    <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.5597 5.93748L3.0521 0.437479C2.4667 -0.147921 1.5198 -0.145021 0.936398 0.441378C0.352898 1.02828 0.354898 1.97798 0.940298 2.56248L5.3841 6.99998L0.940298 11.4375C0.354898 12.022 0.352898 12.9717 0.936398 13.5586C1.2286 13.853 1.6124 14 1.9962 14C2.378 14 2.7599 13.8545 3.0521 13.5625L8.5597 8.06248C8.8412 7.78128 9 7.39888 9 6.99998C9 6.60108 8.8412 6.21878 8.5597 5.93748Z"
                            fill="white"/>
                    </svg>

                </button>
            </div>
            <Swiper slidesPerView={'auto'} spaceBetween={17}
                    grabCursor
                    className={styles.sliderSwiper}
                    modules={[Navigation, FreeMode]}
                    freeMode={true}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}>

                {photos.map((photo) => (
                    <SwiperSlide key={photo.id} className={styles.slideItem}
                                 onClick={() => setFullscreenImage(photo.url)}>

                            <Image alt={photo.name} src={photo.url}
                                   height={height} width={photo.width / photo.height * height}
                                   className={styles.photoItem}/>


                    </SwiperSlide>
                    ))}


            </Swiper>


            {fullscreenImage && (
                <div className={styles.modalWindowWrapper} onClick={() => setFullscreenImage(null)}>
                    <div className={styles.modalWindow} style={{backgroundImage: `url(${fullscreenImage})`}}></div>
                </div>
            )}


        </div>

);
}

