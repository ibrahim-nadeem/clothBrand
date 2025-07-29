"use client";
import React, { useEffect, useState } from "react";
import styles from "./hero.module.scss";
import Image from "next/image";

const modelImages = [
  "/model-removebg-preview.png",
  "/model2-removebg-preview.png",
  "/model3-removebg-preview.png"
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % modelImages.length);
    }, 150);  

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <span className={styles.tagline}>Discover Your Style</span>
        <h1 className={styles.heading}>Iconic Fashion, Reimagined</h1>
        <p className={styles.description}>
          One icon. Unlimited looks. Watch your style evolve instantly.
        </p>
        <button className={styles.button}>Try it Now</button>
      </div>

      <div className={styles.modelWrapper}>
        {modelImages.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Look ${index + 1}`}
            width={500}
            height={700}
            className={`${styles.modelImage} ${
              index === current ? styles.active : ""
            }`}
          />
        ))}
      </div>
    </section>
  );
}
