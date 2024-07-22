import ProductsList from "@/components/ProductsList/ProductsList";
import FreeSamples from "@/components/FreeSamples/FreeSamples";
import BtnLink from "@/components/buttons/BtnLink/BtnLink";
import { products } from "@/data/products";
import styles from "./HomeProductsSection.module.scss";

const HomeProductsSection = () => {
  return (
    <section>
      <div className={`container ${styles.container}`}>
        <h2 className={`sectionTitle ${styles.produceTitle}`}>
          <span>Продукція</span>
        </h2>
        <ProductsList data={products} />
        <FreeSamples />
        <BtnLink
          title="Вся продукція"
          href="/products"
          className={styles.allProduceBtn}
        />
      </div>
    </section>
  );
};

export default HomeProductsSection;
