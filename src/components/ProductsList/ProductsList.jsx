import ProductItem from '../ProductItem/ProductItem'
import styles from './ProductsList.module.scss'


const ProductsList = ({ data, className }) => {


    return (
        <ul className={`${styles.container} ${className}`}>
            {data?.map((item) =>
                <ProductItem key={item.title} data={item} />)}
        </ul>
    )
}


export default ProductsList