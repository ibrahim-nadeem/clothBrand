 "use client";
import styles from "./product.module.scss";
import Image from "next/image";
import products from "../../id";  
import { use } from "react"; // 👈 use for async data fetching
export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params); // 👈 unwrap the promise

  const product = products.find((p) => String(p.id) === id);

  if (!product) return <div>Product not found.</div>;

  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <div className={styles.thumbnailGallery}>
          {product.images.map((img, index) => (
            <Image key={index} src={img} alt="thumb" width={60} height={80} />
          ))}
        </div>
        <div className={styles.mainImage}>
          <Image
            src={product.images[0]}
            alt={product.name}
            width={500}
            height={600}
          />
        </div>
      </div>

      <div className={styles.rightColumn}>
        <h1 className={styles.title}>{product.name}</h1>
        <p className={styles.price}>Rs. {product.price}</p>

        <div className={styles.sizes}>
          {product.sizes.map((size, index) => (
            <button key={index} className={styles.sizeButton}>
              {size}
            </button>
          ))}
        </div>

        <div className={styles.quantity}>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>

        <div className={styles.actions}>
          <button className={styles.addToCart}>Add to Cart</button>
          <button className={styles.buyNow}>Buy It Now</button>
        </div>

        <div className={styles.description}>
          <p>
            <strong>Fit type:</strong> {product.fit}
          </p>
          <p>
            <strong>Material:</strong> {product.material}
          </p>
          <p>
            <strong>Occasion:</strong> {product.occasion}
          </p>
          <p>
            <small>
              Note: The actual color may vary slightly from the image.
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}
