"use client";

import { SiteContext } from "@/context/SiteContext";
import { useWindowResize } from "@/hooks/windowResize";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import BurgerBtn from "../buttons/BurgerBtn/BurgerBtn";
import Logo from "../Logo/Logo";
import NavLinks from "../NavLinks/NavLinks";
import styles from "./Header.module.scss";

const Header = () => {
  const { isMobileMenu, setIsMobileMenu } = useContext(SiteContext);
  const { isMobile, isTablet, isDesktop } = useWindowResize();
  const [scrolledWindow, setScrolledWindow] = useState(0);

  const headerRef = useRef(null);
  const header = headerRef.current;

  const navlinksStyles = () => {
    if (!isDesktop && isMobileMenu) {
      return `${styles.navLinks}`;
    } else if (!isDesktop && !isMobileMenu) {
      return `${styles.navLinks} ${styles.navLinksHidden}`;
    } else {
      return `${styles.navLinks}`;
    }
  };

  const handleClickOutside = useCallback(
    (event) => {
      const target = event.target;
      if (!target.className.includes("navLinks")) {
        setIsMobileMenu(false);
      }
    },
    [setIsMobileMenu]
  );

  const headerScrollClassName = useCallback(() => {
    if (window?.scrollY <= 80) {
      header?.classList.remove(`${styles.hidden}`);
      header?.classList.add(`${styles.visible}`);
    } else if (window?.scrollY > scrolledWindow) {
      header?.classList.add(`${styles.hidden}`);
      header?.classList.remove(`${styles.visible}`);
    } else if (window?.scrollY < scrolledWindow) {
      header?.classList.remove(`${styles.hidden}`);
      header?.classList.add(`${styles.visible}`);
    }

    setScrolledWindow(window.scrollY);
  }, [scrolledWindow, setScrolledWindow, header?.classList]);

  useEffect(() => {
    if (isMobileMenu) {
      document?.addEventListener("click", handleClickOutside);
    }

    window?.addEventListener("scroll", headerScrollClassName);

    return () => {
      document?.removeEventListener("click", handleClickOutside);
      window?.removeEventListener("scroll", headerScrollClassName);
    };
  }, [isMobileMenu, handleClickOutside, headerScrollClassName]);

  return (
    <header className={`${styles.header}`} ref={headerRef}>
      <div className={`container ${styles.container}`}>
        {!isDesktop && <BurgerBtn />}

        <Logo className={`${styles.logo}`} />

        {(!isMobile || !isTablet) && (
          <a href="tel:+380636270773" className={`${styles.tell} hoverLink`} aria-label="Зробити замовлення">
            +380-63-627-07-73
          </a>
        )}

        {(isMobile || isTablet) && (
          <a href="tel:+380636270773" aria-label="Мобільний телефон">
            <svg className={styles.phoneIcon}>
              <use href="/sprite.svg#icon-phone"></use>
            </svg>
          </a>
        )}

        <NavLinks
          className={navlinksStyles()}
          onClick={() => {
            if (!isDesktop) {
              setIsMobileMenu(false);
            }
          }}
        />
      </div>
    </header>
  );
};

export default Header;
