import LinkBack from "@/components/buttons/LinkBack/LinkBack";
import CatalogueList from "@/components/CatalogueList/CatalogueList";
import styles from "./CataloguesSection.module.scss";

const CataloguesSection = () => {
  return (
    <section className={`pageSection`}>
      <div className={`container ${styles.container} `}>
        <div className={`sectionTitleWpapp ${styles.sectionTitleWpapp}`}>
          <LinkBack />

          <h1 className={`sectionTitle`}>
            <span>Сфери використання</span>
          </h1>
        </div>
        <CatalogueList />
      </div>
    </section>
  );
};

export default CataloguesSection;
