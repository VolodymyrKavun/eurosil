"use client";
import { useState, createContext } from "react";

export const SiteContext = createContext();

export const SiteProvider = ({children}) => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSubmited, setSubmited] = useState(false);
  const [hash, setHash] = useState("");

  return (
    <SiteContext.Provider
      value={{
        isMobileMenu,
        setIsMobileMenu,
        isModalOpen,
        setModalOpen,
        isSubmited,
        setSubmited,
        hash,
        setHash,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
