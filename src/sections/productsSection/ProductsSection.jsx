import Link from "next/link"
import LinkBack from "@/components/buttons/LinkBack/LinkBack"
import ProductsList from "@/components/ProductsList/ProductsList"
import { products } from "@/data/products"
import styles from './ProductsSection.module.scss'
import Certificates from "../certificates/Certificates"


const ProductsSection = () => {

    return (
        <section className="pageSection">
            <div className={`container ${styles.container}`} >
                <div className={`sectionTitleWpapp`}>
                    <LinkBack />
                    <h1 className={`sectionTitle`}>
                        <span>Продукція</span>
                    </h1>
                </div>
                <ProductsList
                    data={products}
                    className=''
                />
                <p className={styles.text}>Числовий індекс у назві марки позначає питому поверхню продукту. Для різних ринків і сфер застосування є свій «Eurosil» з оптимальним поєднанням властивостей. Специфікації марок <Link
                    className={styles.link}
                    href="/documentation/brand-specification.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >детально
                </Link>.
                </p>
            </div>
            <Certificates />
        </section>
    )
}


export default ProductsSection