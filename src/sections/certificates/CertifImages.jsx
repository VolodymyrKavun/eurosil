"use client";

import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Certificates.module.scss";
import { certificates } from "@/data/certImages";
import { SiteContext } from "@/context/SiteContext";

const CertifImages = () => {
  const { isModalOpen, setModalOpen, setIsTarget, setBackdrop } =
    useContext(SiteContext);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : null
  );

  const openModal = (e) => {
    if (!isModalOpen) {
      setModalOpen(true);
      setIsTarget(e.target.alt);
      setTimeout(() => {
        setBackdrop(true);
      }, 250);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.certifListPdf}>
      {certificates.map((el) => (
        <figure className={styles.imgWrapp} key={el.id}>
          <Image
            src={el.src}
            alt={el.alt}
            fill
            sizes="(max-width: 520px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onClick={windowWidth > 519 ? openModal : null}
          />
        </figure>
      ))}
    </div>
  );
};

export default CertifImages;
