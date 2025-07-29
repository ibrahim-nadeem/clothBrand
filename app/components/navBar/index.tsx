"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./navBar.module.scss";
import Image from "next/image";
import { ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation"; // ✅ useRouter for navigation

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter(); // ✅

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleUserClick = () => {
    router.push("/signUp"); // ✅ navigate directly
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.left}>
        <Link href="/">
          <Image src="/LAMARETAIL.jpg" alt="Logo" width={120} height={40} />
        </Link>
      </div>

      <div className={styles.center}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/listings">Listings</Link>
         
      </div>

      <div className={styles.right}>
        <ShoppingCart size={24} />
        <div className={styles.userWrapper}>
          <Link href="/signUp">
            <User size={24} className={styles.userIcon} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
