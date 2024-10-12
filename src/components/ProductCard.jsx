import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ name, isNew, isOutOfStock, image }) => {
  return (
    <article className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.productImage} />
        {isNew && <span className={styles.newLabel}>new product</span>}
        {isOutOfStock && <div className={styles.outOfStock}>out of stock</div>}
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{name}</h3>
        <p className={styles.pricingInfo}>
          <span>Sign in</span> or Create an account to see pricing
        </p>
        <button className={styles.wishlistButton} aria-label="Add to wishlist">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc193d8c7b8dc278531997ba11895ff0946aafc4e6fc36cee26c0f98e8a4e699?placeholderIfAbsent=true&apiKey=9e9af893f9334aa39b88140068087eea" alt="" className={styles.wishlistIcon} />
        </button>
      </div>
    </article>
  );
};

export default ProductCard;