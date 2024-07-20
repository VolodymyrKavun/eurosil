"use client";

import { SiteContext } from "@/context/SiteContext";
import React, { useContext, useEffect } from "react";
import { certificates } from "@/data/certImages";
import styles from "./Modal.module.scss";
import Image from "next/image";

const Modal = () => {
  const { isModalOpen, setModalOpen, isBackdrop, setBackdrop, isTarget } =
    useContext(SiteContext);

  const closeModal = (e) => {
    if (isModalOpen && e.target.nodeName !== "IMG") {
      setBackdrop(false);
      setTimeout(() => {
        setModalOpen(false);
      }, 250);
    } else return;
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      isModalOpen
        ? (document.body.style.overflowY = "hidden")
        : (document.body.style.overflowY = "auto");
    }
  }, [isModalOpen]);

  const targetImg = certificates.map((el) => {
    if (el.alt === isTarget) {
      return (
        <figure className={styles.imgWrapp} key={el.alt}>
          <Image
            src={el.src}
            alt={el.alt}
            fill
            sizes="(max-width: 520px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={true}
          />
        </figure>
      );
    } else return;
  });

  return (
    <div
      className={isModalOpen ? styles.modalFrame : styles.modalFrameNone}
      onClick={closeModal}
    >
      <div
        className={
          isBackdrop
            ? styles.modalBackdrop
            : `${styles.modalBackdrop} ${styles.modalBackdropNone}`
        }
      >
        {targetImg}
      </div>
    </div>
  );
};

export default Modal;
