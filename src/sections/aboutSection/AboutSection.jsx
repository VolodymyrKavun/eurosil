import Image from "next/image";
import styles from "./AboutSection.module.scss";
import Link from "next/link";
import BtnLink from "@/components/buttons/BtnLink/BtnLink";

const AboutSection = () => {
  return (
    <section className={styles.section} id="about">
      <div className={`container ${styles.container}`}>
        <h2 className="sectionTitle">
          <span>Про нас</span>
        </h2>
        <div className={styles.aboutWrapp}>
          <div className={styles.imgWrapp}>
            <Image
              src="/images/about_us_home.webp"
              fill
              alt="Про нас"
              sizes="(max-width: 767px) 100vw, (min-width: 768px) 50vw, 33vw"
            />
          </div>
          <div className={styles.aboutDescr}>
            <p>
              «Eurosil» — український продукт європейської якості, що
              виробляється за інноваційною технологією із замкнутим циклом.
            </p>
            <p>
              Eurosil А500 — високочистий нанодисперсний аморфний кремнезем,
              отриманий шляхом фторидно-амонієвої переробки. Він поліпшує
              сипучість, зменшує схильність порошків до спікання, перетворює
              речовину на зручну для дозування, стабілізує в’язкість, підвищує
              міцність та модифікує інші властивості виробів і речовин.
            </p>

            <BtnLink href="/about" title="Детальніше" id={styles.btnLink} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
