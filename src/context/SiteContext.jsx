"use client";
import { useState, createContext } from "react";

export const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const [hash, setHash] = useState("");

  const [isModalOpen, setModalOpen] = useState(false);
  const [isBackdrop, setBackdrop] = useState(false);
  const [isTarget, setIsTarget] = useState("");

  return (
    <SiteContext.Provider
      value={{
        isMobileMenu,
        setIsMobileMenu,
        hash,
        setHash,
        isModalOpen,
        setModalOpen,
        isBackdrop,
        setBackdrop,
        isTarget,
        setIsTarget,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
