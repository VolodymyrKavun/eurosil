import { Noto_Serif, Inter, Manrope } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { SiteProvider } from "@/context/SiteContext";
// import ToTopBtn from "@/components/buttons/ToTopBtn/ToTopBtn";
import Modal from "@/components/Modal/Modal";
import dynamic from "next/dynamic";

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

const DynamicToTopBtn = dynamic(() =>
  import("@/components/Buttons/ToTopBtn/ToTopBtn")
);

export const metadata = {
  title: "Діоксид кремнію європейської якості | Eurosil",
  description:
    "ICM — інноваційна компанія з виробництва спеціальних хімічних елементів. Eurosil є маркою компанії ICM — Innovative Chemical Materials",
  keywords: [
    "Діоксид кремнію",
    "Eurosil",
    "ICM",
    "Український продукт",
    "Діоксид кремнію європейської якості",
    "Діоксид кремнію європейської якості Eurosil",
  ],
  alternates: {
    canonical: process.env.NEXT_PUBLIC_MAIN_URL,
  },
  applicationName: "Eurosil",
};

export const viewport = {
  themeColor: "#032c44",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="uk-UA"
      className={`${manrope.variable} ${notoSerif.variable} ${inter.variable}`} // any Warnings 😃
    >
      <body style={{ overflowX: "hidden", overflowY: "auto" }}>
        <SiteProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <DynamicToTopBtn />
          <Modal />
        </SiteProvider>
      </body>
    </html>
  );
}
