"use client";

import Link from "next/link";

import styles from "./CategorySection.module.scss";
import OrderBtn from "@/components/buttons/OrderBtn/OrderBtn";
import Image from "next/image";
import { areas } from "@/data/areas";
import { getProductByCategory } from "@/utils/getProductByCategory";
import { usePathname } from "next/navigation";

const CategorySection = () => {
  const pathName = usePathname();
  const data = getProductByCategory(areas, pathName)

  return (
    <>
        <section className={styles.section}>
          <div className={`container ${styles.container} `}>
            <Link href="/catalogue" className={styles.linkBack}>
              <svg className={styles.icon}>
                <use href="/sprite.svg#arrow-left"></use>
              </svg>
              Назад
            </Link>
            <h1 className={styles.title}>
              <span>{data?.title}</span>
            </h1>

            <div className={styles.innerWrap}>
              <div className={styles.imgBox} onClick={() => setIndex(0)}>
                <Image
                  src={data?.image}
                  alt="фото сайту"
                  fill={true}
                  priority={true}
                  className={styles.img}
                  sizes="(max-width: 768px) 100vw,  50vw"
                />
              </div>
              <div className={styles.descriptionBox}>
                <h2 className={styles.subTitle}>{data?.subTitle}</h2>
                <div className={styles.description}>{data?.description}</div>

                <OrderBtn
                  type="button"
                  id={styles.btn}
                  onClick={() => setModalOpen(true)}
                  title="Замовити"
                />
              </div>
            </div>
          </div>
        </section>
    </>
  );
};

export default CategorySection;
