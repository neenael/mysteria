'use client'
import { usePathname } from "next/navigation";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";

export default function BodyWrapper({ children, className }) {
    const pathname = usePathname();
    const isLightMode =
        ['about-us', 'rules', 'cooperate', 'datenschutzerklarung',
            'contacts', 'impressum', '404']
            .some(segment =>
        pathname.includes(segment)

    );

    const mode = isLightMode ? 'light' : 'dark'

    return (
        <body
            className={className}
            data-mode={mode}
            style={{display: 'flex', flexDirection: 'column'}}
        >
        <Header mode={mode}/>
        {!isLightMode && <div className={"bgBlurBall"}></div>}
        <main style={{ flex: 1, display: 'flex', flexDirection: "column" }}>
            {children}
        </main>


        <Footer />
        </body>
    );
}