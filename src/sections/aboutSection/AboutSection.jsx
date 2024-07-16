import Image from "next/image";
import styles from "./AboutSection.module.scss";
import BtnLink from "@/components/buttons/BtnLink/BtnLink";

const AboutSection = () => {
  return (
    <section className={styles.section} id="about">
      <div className={`container ${styles.container}`}>
        <h2 className={`sectionTitle ${styles.sectionTitle}`}>
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
              «Eurosil» є маркою компанії «ICM» — «Innovative Chemical Materials».
            </p>
            <p>
              «ICM» — інноваційна компанія з виробництва спеціальних хімічних елементів.
            </p>

            <BtnLink href="/about" title="Детальніше" id={styles.btnLink} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
