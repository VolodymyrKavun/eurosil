"use client";

import Link from "next/link";
import Image from 'next/image'
import styles from "./CatalogueList.module.scss";
import { areas } from "@/data/areas";

const CatalogueList = () => {
  return (
    <>
        <ul className={styles.catalogueList}>
          {
            areas?.map(({ title, category, image, alt }) => (
              <li key={title}>
                <Link
                  href={`/catalogue/${category}`}
                  className={styles.catalogueLink}
                >
                  <div className={styles.imgBox}>
                    <Image
                      src={image}
                      alt={alt}
                      fill={true}
                      priority={true}
                      className={styles.img}
                      sizes="(max-width: 767px) 100vw, 50vw"
                    />
                  </div>
                  <div className={styles.subtitleBox}>
                    <h3>{title}</h3>

                    <svg>
                      <use href="./sprite.svg#arrow-right"></use>
                    </svg>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
    </>
  );
};

export default CatalogueList;
