import HeroSection from "@/sections/heroSection/HeroSection";
import AboutSection from "@/sections/aboutSection/AboutSection";
import BenefitsSection from "@/sections/benefitsSection/BenefitsSection";
import HomeCataloguesSection from "@/sections/homeCataloguesSection/HomeCataloguesSection";
import Certificates from "@/sections/certificates/Certificates";
import HomeProductsSection from "@/sections/homeProductsSection/HomeProductsSection";
// import ContactUsSection from "@/sections/contactUsSection/ContactUsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <HomeCataloguesSection />
      <HomeProductsSection />
      <Certificates />
    </>
  );
}
