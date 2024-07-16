import { Noto_Serif, Inter, Manrope } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
// import ModalR from "@/components/Modal/Modal";
import { SiteProvider } from "@/context/SiteContext";

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
    <html lang="uk">
      <body
        className={`${manrope.variable} ${notoSerif.variable} ${inter.variable}`}
        style={{ overflowX: "hidden", overflowY: "auto" }}
      >
        <SiteProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          {/* <ModalR /> */}
        </SiteProvider>
      </body>
    </html>
  );
}
