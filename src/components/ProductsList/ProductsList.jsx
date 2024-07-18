import Image from 'next/image'
import BtnLink from '../buttons/BtnLink/BtnLink'
import styles from './ProductsList.module.scss'


const ProductsList = ({ data, className }) => {


    return (
        <ul className={`${styles.container} ${className}`}>
            {data?.map((item) =>
                <li key={item.title} className={styles.item}>
                    <Image
                        className={styles.img}
                        src={item?.image}
                        width={207}
                        height={130}
                        sizes="100vw"
                        alt={item?.title}
                    />
                    <div className={styles.contentWrapper}>
                        <p className={styles.title}>{item?.title}</p>
                        <BtnLink
                            title="Детальніше"
                            href={`/products/${item?.id}`}
                            className={styles.moreBtn}
                        />
                    </div>
                </li>)}
        </ul>
    )
}


export default ProductsList