"use client";

import { SiteContext } from "@/context/SiteContext";
import Link from "next/link";
import React, { useContext } from "react";
import styles from "./Logo.module.scss";

const Logo = ({ className, id }) => {
  const { setHash } = useContext(SiteContext);

  return (
    <>
      <Link
        href="/"
        className={`${styles.logo} ${className}`}
        onClick={() => {
          setHash("/");
        }}
        id={id}
      >
        Eurosil
      </Link>
    </>
  );
};

export default Logo;
