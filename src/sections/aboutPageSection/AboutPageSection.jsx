import React from "react";
import LinkBack from "@/components/buttons/LinkBack/LinkBack";
import styles from "./AboutPageSection.module.scss";
import { aboutUs } from "@/data/aboutUs";
import Image from "next/image";
import BtnLink from "@/components/buttons/BtnLink/BtnLink";

const AboutPageSection = () => {
  return (
    <section className={`pageSection`}>
      <div className={`container ${styles.container}`}>
        <div className={`sectionTitleWpapp`}>
          <LinkBack />

          <h1 className={`sectionTitle`}>
            <span>Про нас</span>
          </h1>
        </div>
        <ul>
          {aboutUs.map((el) => (
            <li key={el.id} className={styles.item}>
              <figure className={styles.figure}>
                <Image
                  src={el.img}
                  fill
                  sizes="(max-width: 767px) 90vw, (max-width: 1440px) 60vw, 33vw"
                  alt={el.title}
                />
              </figure>
              <div className={styles.contentWrapp}>
                <h2 className={styles.title}>{el.title}</h2>
                <p className={styles.text}>{el.text}</p>
                <BtnLink
                  href={el.href}
                  title="Сфери використання"
                  id={styles.link}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutPageSection;
