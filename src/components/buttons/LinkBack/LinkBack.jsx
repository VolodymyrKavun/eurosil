"use client";

import { SiteContext } from "@/context/SiteContext";
import Link from "next/link";
import React, { useContext } from "react";
import styles from "./LinkBack.module.scss";

const LinkBack = ({ id, href }) => {
  const { setHash } = useContext(SiteContext);
  return (
    <Link
      id={id}
      href={href}
      className={styles.linkBack}
      onClick={() => {
        setHash(el.href.slice(1));
      }}
    >
      <svg>
        <use href="/sprite.svg#arrow-left"></use>
      </svg>
      Назад
    </Link>
  );
};

export default LinkBack;
