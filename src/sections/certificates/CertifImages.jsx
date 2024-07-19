"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./Certificates.module.scss";

const CertifImages = () => {
  const [backdropStates, setBackdropStates] = useState({});

  const handleImgBackdrop = (id) => {
    setBackdropStates((prevStates) => ({
      ...prevStates,
      [id]: !prevStates[id],
    }));
  };

  const certificates = [
    {
      id: "1",
      src: "/images/certificates/conclusion.webp",
      alt: "Висновок",
    },
    {
      id: "2",
      src: "/images/certificates/certificate.webp",
      alt: "Сертифікат",
    },
  ];

  return (
    <div className={styles.certifListPdf}>
      {certificates.map((cert) => (
        <div
          key={cert.id}
          className={
            backdropStates[cert.id]
              ? `${styles.imgBackdrop} ${styles.fullScreenBackdr}`
              : styles.imgBackdrop
          }
          onClick={() => handleImgBackdrop(cert.id)}
        >
          <figure className={styles.imgWrapp}>
            <Image
              src={cert.src}
              alt={cert.alt}
              fill
              sizes="(max-width: 520px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </figure>
        </div>
      ))}
    </div>
  );
};

export default CertifImages;
