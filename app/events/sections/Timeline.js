
import Image from "next/image";
import styles from '../eventPage.module.scss'

const Timeline = ({data}) => {
    console.log("data")
    console.log(data)

    return (
        <section className={styles.timeSection}>

            <div className="container">
                <h2 className={styles.timeHeading}>Time line</h2>

                <div>
                    {data.map((point, index) => (
                        <div key={index} className={styles.timePointItem}>
                            <div className={styles.TimeHeadingRow}>
                                <Image src={point.icon_svg.url} className={styles.timeIcon} alt={point.icon_svg.name} height={36} width={36}/>
                                <p>{point.time}</p>
                            </div>

                            <div className={styles.timeDescr}>
                                <p>
                                    {point.description}
                                </p>

                            </div>
                        </div>)
                    )}
                </div>
            </div>

        </section>
    );
};

export default Timeline;