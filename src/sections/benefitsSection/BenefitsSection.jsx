"use client";

import styles from "./BenefitsSection.module.scss";
import { benefits } from "../../data/benefits";

const BenefitsSection = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <h2 className="sectionTitle">
          <span>Чому варто обрати продукцію Eurosil?</span>
        </h2>
        <ul className={styles.benefitsList}>
          {benefits.map((el) => {
            return (
              <li key={el.id}>
                <p className={styles.itemNumber}>{el.id}</p>
                <h3>{el.title}</h3>
                <p className={styles.itemText}>{el.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default BenefitsSection;
