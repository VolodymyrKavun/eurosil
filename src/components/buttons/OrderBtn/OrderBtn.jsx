"use client";

import React from "react";
import styles from "./OrderBtn.module.scss";

const OrderBtn = ({ className, title, onClick, id, type }) => {
  return (
    <button
      type={type}
      className={`hoverLink ${styles.btn} ${className}`}
      onClick={onClick}
      id={id}
    >
      {title}
    </button>
  );
};

export default OrderBtn;
