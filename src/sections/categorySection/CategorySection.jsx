"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import LinkBack from "@/components/buttons/LinkBack/LinkBack";
import { areas } from "@/data/areas";
import { getObjectFromArrayByProperty } from "@/utils/getObjectFromArrayByProperty";
import styles from "./CategorySection.module.scss";
import ProductsList from "@/components/ProductsList/ProductsList";
import FreeSamples from "@/components/FreeSamples/FreeSamples";
import BtnLink from "@/components/buttons/BtnLink/BtnLink";
import { products } from "@/data/products";

const CategorySection = () => {
  const pathhame = usePathname();
  const data = getObjectFromArrayByProperty(areas, "category", pathhame, 11);

  return (
    <section className={`pageSection`}>
      <div className={`container ${styles.container}`}>
        <div className={`sectionTitleWpapp`}>
          <LinkBack />

          <h1 className={`sectionTitle`}>
            <span>{data?.title}</span>
          </h1>
        </div>
        <figure
          className={styles.figure + " " + styles.mainBlock}
          onClick={() => setIndex(0)}
        >
          <Image
            src={data?.image}
            alt="фото сайту"
            fill={true}
            priority={true}
            sizes="(max-width: 768px) 100vw,  50vw"
          />
        </figure>
        <div className={styles.descriptionBox}>
          <h2 className={styles.subTitle}>{data?.subTitle}</h2>
          <p className={styles.description}>{data?.description}</p>
          <ul>
            {data?.categoryItem?.map((el) => (
              <li key={el.itemTitle} className={styles.item}>
                <figure className={styles.figure}>
                  <Image
                    src={el.itemImg}
                    fill
                    sizes="(max-width: 767px) 90vw, (max-width: 1440px) 60vw, 33vw"
                    alt={el.itemTitle}
                  />
                </figure>
                <div className={styles.contentWrapp}>
                  <h2 className={styles.itemTitle}>{el.itemTitle}</h2>
                  <p className={styles.text}>{el.itemDescr}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <h3 className={`sectionTitle`}>Продукція</h3>
        <ProductsList data={products} />
        <FreeSamples />
        <BtnLink
          title="Вся продукція"
          href="/products"
          id={styles.allProduceBtn}
        />
      </div>
    </section>
  );
};

export default CategorySection;
