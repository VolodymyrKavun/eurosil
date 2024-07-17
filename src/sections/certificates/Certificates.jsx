import { certificates } from "@/data/certificates";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Certificates.module.scss";

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
                <figure className={styles.imgWrapp}>
                  <Image src={el.img} alt={el.title} fill sizes="16vw" />
                </figure>
                <h3 className={styles.title}>{el.title}</h3>
              </li>
            ))}
          </ul>
          <div className={`${styles.certifListPdf}`}>
            <Link
              href="/images/certificates/conclusion.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.pdfImgWrapp}
            >
              <Image
                src="/images/certificates/conclusion.webp"
                alt="Висновок"
                fill
                sizes="(max-width: 520px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </Link>

            <Link
              href="/images/certificates/certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.pdfImgWrapp}
            >
              <Image
                src="/images/certificates/certificate.webp"
                alt="Сертифікат"
                fill
                sizes="(max-width: 520px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
