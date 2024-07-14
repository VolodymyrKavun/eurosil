"use client";

import OrderBtn from "@/components/buttons/OrderBtn/OrderBtn";
import { SiteContext } from "@/context/SiteContext";
import { useContext } from "react";
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  const { setModalOpen } = useContext(SiteContext);
  return (
    <section id="/hero" className={styles.section}>
      <div className={`container ${styles.container} `}>
        <h1 className={styles.heroTitle}>Діоксид кремнію європейської якості</h1>

        <OrderBtn
          type="button"
          title="Замовити"
          className={styles.btn}
          onClick={() => setModalOpen(true)}
        />
      </div>
    </section>
  );
};

export default HeroSection;
