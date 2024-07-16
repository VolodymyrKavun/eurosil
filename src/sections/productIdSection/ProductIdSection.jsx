// import ProductsList from "@/components/ProductsList/ProductsList";
// import LinkBack from "@/components/buttons/LinkBack/LinkBack";
import ProductIdInformation from "@/components/ProductIdInformation/ProductIdInformation";
import styles from "./ProductIdSection.module.scss";
import LinkBack from "@/components/buttons/LinkBack/LinkBack";

const ProductIdSection = () => {
    return (
        <section className='pageSection'>
            <div className='container'>
                {/* <LinkBack/> */}
                <ProductIdInformation />
                {/* <LinkBack /> */}
                {/* <ProductsList /> */}
            </div>
        </section>
    );
};

export default ProductIdSection;
