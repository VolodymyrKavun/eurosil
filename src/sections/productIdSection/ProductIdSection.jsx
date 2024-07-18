'use client';
import { usePathname } from "next/navigation";
import ProductsList from "@/components/ProductsList/ProductsList";
import ProductIdInformation from "@/components/ProductIdInformation/ProductIdInformation";
import FreeSamples from "@/components/FreeSamples/FreeSamples";
import BtnLink from "@/components/buttons/BtnLink/BtnLink";
import { products } from "@/data/products";
import { getObjectFromArrayByProperty } from "@/utils/getObjectFromArrayByProperty";
import styles from "./ProductIdSection.module.scss";


const ProductIdSection = () => {
    const pathname = usePathname();
    const data = getObjectFromArrayByProperty(products, "id", pathname, 10)
    const filteredProducts = products.filter(item => item.id !== data?.id)

    return (
        <section className='pageSection'>
            <div className={`container ${styles.container}`}>
                <ProductIdInformation data={data} />
                <h3 className={styles.produceTitle}>Інша продукція</h3>
                <ProductsList data={filteredProducts}
                />
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

export default ProductIdSection;





