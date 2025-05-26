import "./globals.css";
import { montserrat, bebas } from './fonts';
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import BodyWrapper from "@/app/components/BodyWrapper"; // Импортируй компонент

export const metadata = {
  title: "Mysteria Vienna - Events, Fun, Friends",
  description: "Viennese community that makes events for you",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <BodyWrapper className={`${montserrat.variable} ${bebas.variable}`}>

        {children}
      </BodyWrapper>
      </html>
  );
}