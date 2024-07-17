import Image from 'next/image'
import styles from './ProductIdInformation.module.scss'
import LinkBack from '../buttons/LinkBack/LinkBack'


const ProductIdInformation = ({ data }) => {


    return (
        <div className={styles.wrapper}>
            <div className={`sectionTitleWpapp`}>
                <LinkBack href="/products" />
                <h1 className={`sectionTitle`}>
                    <span>{data?.title}</span>
                </h1>
            </div>

            <Image
                className={styles.mainImg}
                src={data?.image}
                width={280}
                height={152}
                alt='Eurosil-A200'
            />
            <h2 className={styles.subTitle}>{data?.subTitle}</h2>
            <p className={styles.text}>{data?.description}</p>
            <ul className={styles.blocksWrapper}>
                {data?.blocks.map((item, index) => <li key={index} className={styles.block}>
                    <Image
                        className={styles.blockImg}
                        src={item.blockImg}
                        width={280}
                        height={280}
                        alt='Eurosil-A200'
                    />
                    <p className={`${styles.text} ${styles.blockText}`}>{item.blockText}</p>
                </li>)}
            </ul>

        </div>
    )
}

export default ProductIdInformation