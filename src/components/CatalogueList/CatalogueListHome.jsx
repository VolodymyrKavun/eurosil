"use client";

import Link from "next/link";
// import { CldImage } from "next-cloudinary";
import Image from 'next/image'

// import { GetDataWithPathname } from "@/fetch/ClientFetch";

import styles from "./CatalogueList.module.scss";
import { areas } from "@/data/areas";

const CatalogueListHome = () => {
  // const { data, isLoading, error } = GetDataWithPathname();
  // console.log("dataCataloguesListHome", data);
  return (
    <ul className={styles.catalogueList}>
      {areas
          ?.filter(
            (item) =>
              item.category === "medicine" ||
              item.category === "cosmetology" ||
              item.category === "agricultural" ||
              item.category === "сonstruction"
          )
          .map(({ title, category, image }) => (
            <li key={title} className={styles.catalogueItem}>
              <Link
                href={`/catalogue/${category}`}
                className={styles.catalogueLink}
              >
                <div className={styles.imgBox}>
                  <Image
                    src={image}
                    alt="фото сайту"
                    fill={true}
                    priority={true}
                    className={styles.img}
                    sizes="(max-width: 767px) 100vw, 50vw"
                  />
                </div>
                <div className={styles.subtitleBox}>
                  <h3 className={styles.subtitle}>{title}</h3>

                  <svg className={styles.icon}>
                    <use href="./sprite.svg#arrow-right"></use>
                  </svg>
                </div>
              </Link>
            </li>
          ))}
    </ul>
  );
};

export default CatalogueListHome;
