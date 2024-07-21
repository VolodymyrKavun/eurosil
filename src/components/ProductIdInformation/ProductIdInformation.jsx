import Image from 'next/image'
import LinkBack from '../buttons/LinkBack/LinkBack'
import styles from './ProductIdInformation.module.scss'


const ProductIdInformation = ({ data }) => {


    return (
        <div className={styles.wrapper}>
            <div className={`sectionTitleWpapp`}>
                <LinkBack />
                <h1 className={`sectionTitle`}>
                    <span>{data?.title}</span>
                </h1>
            </div>

            <Image
                className={styles.mainImg}
                src={data?.image}
                width={280}
                height={152}
                sizes="100vw"
                alt={data?.title}
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
                        sizes="(max-width: 767px) 100vw, (max-width: 1439px) 50vw, 700px"
                        alt={data?.title}
                    />
                    <p className={`${styles.text} ${styles.blockText}`}>{item.blockText}</p>
                </li>)}
            </ul>

        </div>
    )
}


export default ProductIdInformation