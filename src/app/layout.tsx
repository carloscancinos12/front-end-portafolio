import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navBar";
import HeadPage from "./components/head-page";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portafolio",
  description: "Desarrollador backend y frontend en proceso",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-419">
      <body className={urbanist.className}>
      <NavBar></NavBar>
      <HeadPage></HeadPage>
        
        {children}
      </body>
    </html>
  );
}
