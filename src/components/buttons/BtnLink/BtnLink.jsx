"use client";

import Link from "next/link";
import React from "react";
import styles from "./BtnLink.module.scss";

const BtnLink = ({ title, id, href }) => {
  return (
    <Link href={href} id={id} className={`hoverLink ${styles.link}`}>
      {title}
    </Link>
  );
};

export default BtnLink;
