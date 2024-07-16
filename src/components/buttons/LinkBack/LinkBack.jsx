"use client";

import { useRouter } from "next/navigation";
import React from "react";
import styles from "./LinkBack.module.scss";

const LinkBack = ({ id }) => {
  const router = useRouter();

  return (
    <button id={id} className={styles.linkBack} onClick={() => router.back()}>
      <svg>
        <use href="/sprite.svg#arrow-left"></use>
      </svg>
      Назад
    </button>
  );
};

export default LinkBack;
