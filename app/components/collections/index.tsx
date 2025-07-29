"use client";

import Image from "next/image";
import styles from "./Collection.module.scss";
import Link from "next/link";
import products from "../../id";

export default function CollectionGrid() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h2>Our Premium Collection</h2>
        <p>Discover minimal elegance and timeless silhouettes</p>
      </div>
      <div className={styles.grid}>
        {products.map((item) => (
          <div className={styles.card} key={item.id}>
            <div className={styles.imageWrapper}>
              <Image
                src={item.images[0]}
                alt="model"
                fill
                className={styles.modelImg}
              />
              <Image
                src={item.images[1]}
                alt="cloth"
                fill
                className={styles.clothImg}
              />
            </div>
            <div className={styles.info}>
              <h4>{item.name}</h4>
              <p>{item.price}</p>
              <div className={styles.colors}>
                {item.colors.map((clr, i) => (
                  <span
                    key={i}
                    style={{ backgroundColor: clr }}
                    className={styles.colorDot}
                  />
                ))}
              </div>
              <Link
                href={`/productDetail/${item.id}`}
                className={styles.cartBtn}
              >
                View Product
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
