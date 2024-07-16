'use client';
import { usePathname } from "next/navigation";
// import ProductsList from "@/components/ProductsList/ProductsList";
import ProductIdInformation from "@/components/ProductIdInformation/ProductIdInformation";
import styles from "./ProductIdSection.module.scss";
import { products } from "@/data/products";
import { getObjectFromArrayByProperty } from "@/utils/getObjectFromArrayByProperty";


const ProductIdSection = () => {
    const pathname = usePathname();
    const data = getObjectFromArrayByProperty(products, "id", pathname, 10)


    return (
        <section className='pageSection'>
            <div className='container'>
                <ProductIdInformation data={data} />
                {/* <ProductsList /> */}
            </div>
        </section>
    );
};

export default ProductIdSection;
