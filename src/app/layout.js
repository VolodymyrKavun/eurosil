import { Noto_Serif, Inter, Manrope } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { SiteProvider } from "@/context/SiteContext";
import ToTopBtn from "@/components/buttons/ToTopBtn/ToTopBtn";
import Modal from "@/components/Modal/Modal";

const manrope = Manrope({
  subsets: ["cyrillic"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-manrope",
});

const notoSerif = Noto_Serif({
  subsets: ["cyrillic"],
  weight: ["300"],
  variable: "--font-notoSerif",
});

const inter = Inter({
  subsets: ["cyrillic"],
  weight: ["300"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Eurosil",
  description: "The best product",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="uk"
      className={`${manrope.variable} ${notoSerif.variable} ${inter.variable}`} // any Warnings 😃
    >
      <body style={{ overflowX: "hidden", overflowY: "auto" }}>
        <SiteProvider>
          <Header />
          <main>{children}</main>

          <Footer />
          <ToTopBtn />
          <Modal />
        </SiteProvider>
      </body>
    </html>
  );
}
