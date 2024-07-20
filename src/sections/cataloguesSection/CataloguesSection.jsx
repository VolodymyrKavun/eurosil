import CatalogueList from "@/components/CatalogueList/CatalogueList";
import styles from "./CataloguesSection.module.scss";

const CataloguesSection = () => {
  return (
    <section className={`pageSection`}>
      <div className={`container ${styles.container} `}>
        <h2 className={styles.title}>
          <span>Сфери використання</span>
        </h2>
        <CatalogueList />
      </div>
    </section>
  );
};

export default CataloguesSection;
