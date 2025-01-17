"use client";

import Link from "next/link";
import React from "react";
import styles from "./BtnLink.module.scss";

const BtnLink = ({ title, id, href, onClick, className }) => {
  return (
    <Link
      href={href}
      id={id}
      className={`${styles.link} ${className}`}
      onClick={() => {
        onClick, console.log("isClicked");
      }}
    >
      {title}
    </Link>
  );
};

export default BtnLink;
