"use client";

import { useEffect, useState } from "react";
import styles from "./topNav.module.scss";

const messages = [
  "Save 10% in Card Payment to  every purchase",
  "Free delivery above order 2500",
];


const TopNav = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 3000);  
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.sliderWrapper}>
      <p className={styles.sliderText}>{messages[currentIndex]}</p>
    </div>
  );
};

export default TopNav;
