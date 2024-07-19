import { certificates } from "@/data/certificates";
import Image from "next/image";
import React from "react";
import styles from "./Certificates.module.scss";
import CertifImages from "./CertifImages";

const Certificates = () => {
  return (
    <section>
      <div className={`container ${styles.container}`}>
        <h2 className={`sectionTitle`}>
          <span>Сертифікати</span>
        </h2>
        <div className={styles.contentWrapp}>
          <ul className={styles.certifList}>
            {certificates.map((el) => (
              <li key={el.id} className={styles.certificate}>
                <figure className={styles.iconWrapp}>
                  <Image src={el.img} alt={el.title} fill sizes="16vw" />
                </figure>
                <h3 className={styles.title}>{el.title}</h3>
              </li>
            ))}
          </ul>
          <CertifImages />
        </div>
      </div>
    </section>
  );
};

export default Certificates;
