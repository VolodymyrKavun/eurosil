"use client";

import styles from "./CategorySection.module.scss";
import Image from "next/image";
import { areas } from "@/data/areas";
import { getProductByCategory } from "@/utils/getProductByCategory";
import { usePathname } from "next/navigation";
import { aboutUs } from "@/data/aboutUs";
import LinkBack from "@/components/buttons/LinkBack/LinkBack";

const CategorySection = () => {
  const pathName = usePathname();
  const data = getProductByCategory(areas, pathName)

  return (
    <>
        <section className={`pageSection`}>
          <div className={`container ${styles.container}`}>
            <div className={`sectionTitleWpapp`}>
              <LinkBack />

              <h1 className={`sectionTitle`}>
                <span>{data?.title}</span>
              </h1>
            </div>
              <figure className={styles.figure + ' ' + styles.mainBlock} onClick={() => setIndex(0)}>
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
                    <li key={el.id} className={styles.item}>
                      <figure className={styles.figure}>
                        <Image
                          src={el.itemImg}
                          fill
                          sizes="(max-width: 767px) 90vw, (max-width: 1440px) 60vw, 33vw"
                          alt={el.title}
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
          </div>
        </section>
    </>
  );
};

export default CategorySection;
