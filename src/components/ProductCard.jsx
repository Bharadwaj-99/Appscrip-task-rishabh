import React from 'react';
import styles from './ProductCard.module.css';
import img3 from '../assests/img3.png'

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
          <img src={img3} alt="heart" className={styles.wishlistIcon} />
        </button>
      </div>
    </article>
  );
};

export default ProductCard;