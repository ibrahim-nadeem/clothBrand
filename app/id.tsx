"use client";

import Image from "next/image";
import styles from "./Collection.module.scss";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Wool Vest",
    price: "$4000",
    colors: ["#000000", "#ffffff", "#bba472"],
    fit: "Relaxed",
    material: "95% Rayon Slub, 5% Linen",
    occasion: "Casual",
    sizes: ["SMALL", "MEDIUM", "LARGE", "XLARGE"],
    images: [
      "/beige dune.jpg",
      "/beige dune paisely.jpg",
    ],
  },
  {
    id: 2,
    name: "Adjustable Waist Trousers",
    price: "$4000",
    colors: ["#ffffff", "#ddd", "#222"],
    fit: "Slim",
    material: "100% Cotton",
    occasion: "Formal",
    sizes: ["SMALL", "MEDIUM", "LARGE", "XLARGE"],
    images: [
      "/knitted polo.jpg",
      "/knitted.polo.jpg",
    ],
    
  },
  {
    id: 3,
    name: "Adjustable Waist Trousers",
    price: "$4000",
    colors: ["#ffffff", "#ddd", "#222"],
    fit: "Regular",
    material: "100% Cotton",
    occasion: "Casual",
    sizes: ["SMALL", "MEDIUM", "LARGE", "XLARGE"],
    images: [
      "/accent polo.jpg",
      "/accent polo.t.jpg",
    ],
  },
  {
    id: 4,
    name: "Adjustable Waist Trousers",
    price: "$4000",
    colors: ["#ffffff", "#ddd", "#222"],
    fit: "Boxy",
    material: "100% Cotton",
    occasion: "Casual",
    sizes: ["SMALL", "MEDIUM", "LARGE", "XLARGE"],
    images: [
      "/boxy-t.jpg",
      "/boxy-ts.jpg",
    ],
  },
  {
    id: 5,
    name: "Adjustable Waist Trousers",
    price: "$4000",
    colors: ["#ffffff", "#ddd", "#222"],
    fit: "Snug",
    material: "100% Cotton",
    occasion: "Casual",
    sizes: ["SMALL", "MEDIUM", "LARGE", "XLARGE"],
    images: [
      "/snug tee.jpg",
      "/snug-t.jpg",
    ],
  },
  {
    id: 6,
    name: "Adjustable Waist Trousers",
    price: "$4000",
    colors: ["#ffffff", "#ddd", "#222"],
    fit: "Relaxed",
    material: "100% Cotton",
    occasion: "Casual",
    sizes: ["SMALL", "MEDIUM", "LARGE", "XLARGE"],
    images: [
      "/half sleve tshit model.jpg ",
      "/half resort.jpg",
    ],
  },
  {
    id: 7,
    name: "Adjustable Waist Trousers",
    price: "$4000",
    colors: ["#ffffff", "#ddd", "#222"],
    fit: "Regular",
    material: "100% Cotton",
    occasion: "Casual",
    sizes: ["SMALL", "MEDIUM", "LARGE", "XLARGE"],
     images: [
    "/crew pink t mode.jpg",
    "/crew pink t.jpg",]
  },
  {
    id: 8,
    name: "Adjustable Waist Trousers",
    price: "$4000",
    colors: ["#ffffff", "#ddd", "#222"],
    fit: "Relaxed",
    material: "100% Linen",
    occasion: "Casual",
    sizes: ["SMALL", "MEDIUM", "LARGE", "XLARGE"],
      images: [
    "/linen trouser model.jpg",
    "/linen trouser.jpeg",]
  },
];
export default products;
