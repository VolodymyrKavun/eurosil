"use client";

import { SiteContext } from "@/context/SiteContext";
import Link from "next/link";
import React, { useContext } from "react";
import styles from "./Logo.module.scss";


const Logo = ( className ) => {
  const { hash, setHash } = useContext(SiteContext);

  return (
    <>
      <Link
        href="/"
        className={`${styles.logo} ${className}`}
        onClick={() => {
          setHash("/");
        }}
      >
        Eurosil
      </Link>
    </>
  );
};

export default Logo;
