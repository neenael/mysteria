'use client'
import { usePathname } from "next/navigation";

export default function BodyWrapper({ children, className }) {
    const pathname = usePathname();
    const isLightMode = ['about-us', 'cooperate'].some(segment =>
        pathname.includes(segment)
    );

    return (
        <body
            className={className}
            data-theme="dark"
            data-mode={isLightMode ? 'light' : undefined}
        >
        {children}
        </body>
    );
}