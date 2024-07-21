import Image from 'next/image'
import BtnLink from '../buttons/BtnLink/BtnLink'
import styles from './ProductItem.module.scss'


const ProductItem = ({ data }) => {
    return (
        <li className={styles.item}>
            <Image
                className={styles.img}
                src={data?.image}
                width={207}
                height={130}
                sizes="100vw"
                alt={data?.title}
            />
            <div className={styles.contentWrapper}>
                <p className={styles.title}>{data?.title}</p>
                <BtnLink
                    title="Детальніше"
                    href={`/products/${data?.id}`}
                    className={styles.moreBtn}
                />
            </div>
        </li>
    )
}


export default ProductItem