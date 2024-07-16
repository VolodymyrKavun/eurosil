// "use client";

import BtnLink from "@/components/buttons/BtnLink/BtnLink";

import styles from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <section id="/hero" className={`${styles.section}`}>
      <div className={`container ${styles.container} `}>
        <h1 className={styles.heroTitle}>
          Діоксид кремнію європейської якості
        </h1>

        <BtnLink href="#products" title="Замовити" id={styles.btn} />
      </div>
    </section>
  );
};

export default HeroSection;
