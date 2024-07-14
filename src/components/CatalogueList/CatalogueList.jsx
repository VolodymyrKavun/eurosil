"use client";

import Link from "next/link";
// import { CldImage } from "next-cloudinary";
import Image from 'next/image'
// import { GetDataWithPathname } from "@/fetch/ClientFetch";


import styles from "./CatalogueList.module.scss";
// import Loader from "../Loader/Loader";
import { areas } from "@/data/areas";

const CatalogueList = () => {
  // const { data, isLoading, error } = GetDataWithPathname();
  return (
    <>
        <ul className={styles.catalogueList}>
          {
            areas?.map(({ title, category, image }) => (
              <li key={title}>
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
