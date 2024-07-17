import styles from "./Footer.module.scss";
import NavLinks from "../NavLinks/NavLinks";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <footer className={styles.footer} id="contacts">
      <div className={`container ${styles.container}`}>
        <address className={styles.contactsWrapp}>
          <a href="tel:+380973988008" className={`${styles.contact} `}>
            <svg>
              <use href="./sprite.svg#icon-phonemini"></use>
            </svg>
            +380-63-627-07-73
          </a>
          <a
            href="mailto:biosil.inbox@gmail.com"
            className={`${styles.contact} `}
          >
            <svg>
              <use href="./sprite.svg#icon-mail"></use>
            </svg>
            biosil.inbox@gmail.com
          </a>
          <p className={`${styles.contact} `}>
            <svg>
              <use href="./sprite.svg#icon-location"></use>
            </svg>
            Київ, Україна
          </p>
        </address>

        <Logo className={styles.logo} />

        <NavLinks className={styles.footerNavLinks} />

        <pre className={styles.madeBy}>
          made by{" "}
          <a href="https://webevery.dev/" target="_blank">
            webevery.dev
          </a>
        </pre>
      </div>
    </footer>
  );
};

export default Footer;
