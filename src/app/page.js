import HeroSection from "@/sections/heroSection/HeroSection";
import AboutSection from "@/sections/aboutSection/AboutSection";
import BenefitsSection from "@/sections/benefitsSection/BenefitsSection";
import HomeCataloguesSection from "@/sections/homeCataloguesSection/HomeCataloguesSection";
import Certificates from "@/sections/certificates/Certificates";
import HomeProductsSection from "@/sections/homeProductsSection/HomeProductsSection";

export default function Home() {
  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: {
      "@type": "ListItem",
      position: 1,
      item: {
        "@id": process.env.NEXT_PUBLIC_MAIN_URL,
        name: "Діоксид кремнію європейської якості. Eurosil.",
      },
    },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <HomeCataloguesSection />
      <HomeProductsSection />
      <Certificates />
    </>
  );
}
