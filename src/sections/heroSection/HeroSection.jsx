"use client";

import BtnLink from "@/components/buttons/BtnLink/BtnLink";
import OrderBtn from "@/components/buttons/OrderBtn/OrderBtn";
import { SiteContext } from "@/context/SiteContext";
import { useContext } from "react";
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  const { setModalOpen } = useContext(SiteContext);
  return (
    <section id="/hero" className={`${styles.section}`}>
      <div className={`container ${styles.container} `}>
        <h1 className={styles.heroTitle}>
          Діоксид кремнію європейської якості
        </h1>

        <BtnLink href="tel:+380636270773" title="Замовити" id={styles.btn} />
      </div>
    </section>
  );
};

export default HeroSection;
