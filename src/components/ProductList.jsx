import React, { useState } from 'react';
import styles from './ProductList.module.css';
import Header from './Header';
import Footer from './Footer';
import ProductCard from './ProductCard';
import FilterSection from './FilterSection';
import prod1 from '../assests/prod1.png'
import prod2 from '../assests/prod2.png'
import prod3 from '../assests/prod3.png'
import prod4 from '../assests/prod4.png'
import prod5 from '../assests/prod5.png'
import prod6 from '../assests/prod6.png'
import prod7 from '../assests/prod7.png'
import prod8 from '../assests/prod8.png'
import prod9 from '../assests/prod9.png'
import prod10 from '../assests/prod10.png'
import prod11 from '../assests/prod11.png'
import prod12 from '../assests/prod12.png'
import prod13 from '../assests/prod13.png'
import img from '../assests/image1'



const ProductList = () => {
  const [showFilter, setShowFilter] = useState(true);

  const products = [
    {
      id: 1,
      name: 'PPXOC Milkyway dress in pressed flowers',
      isNew: true,
      image: prod1
    },
    {
      id: 2,
      name: 'PPXOC Milkyway dress in pressed flowers',
      isOutOfStock: true,
      image: prod2},
    {
      id: 3,
      name: 'Product Name',
      image: prod3
    },
    {
      id: 4,
      name: 'Product Name',
      image:prod4
    },
    {
      id: 5,
      name: 'Product Name',
      image: prod5
    },
    {
      id: 6,
      name: 'Product Name',
      image: prod6
    },
    {
      id: 7,
      name: 'Product Name',
      image: prod7
    },
    {
      id: 8,
      name: 'Product Name',
      image: prod8
    },
    {
      id: 9,
      name: 'Product Name',
      image: prod1
    },
    {
      id: 10,
      name: 'Product Name',
      image: prod9
    },
    {
      id: 11,
      name: 'Product Name',
      image: prod10
    },
    {
      id: 12,
      name: 'Product Name',
      image: prod11
    },
    {
      id: 13,
      name: 'Product Name',
      image: prod12
    },
    {
      id: 14,
      name: 'Product Name',
      image:prod13
    },
    {
      id: 15,
      name: 'Product Name',
      image: prod6
    },
  ];

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className={styles.productListContainer}>
      <Header />
      <main className={styles.mainContent}>
        <h1 className={styles.pageTitle}>DISCOVER OUR PRODUCTS</h1>
        <p className={styles.pageDescription}>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
        <div className={styles.contentDivider} />
        <section className={styles.productSection}>
          <div className={styles.productHeader}>
            <div className={styles.productCount}>
              <span>3425 Items</span>
              <button className={styles.filterToggle} onClick={toggleFilter}>
                <img src={img} alt="" className={styles.filterIcon} />
                {showFilter ? 'HIDE FILTER' : 'SHOW FILTER'}
              </button>
            </div>
            <div className={styles.sortSection}>
              <span className={styles.sortLabel}>RECOMMENDED</span>
              <img src={img} alt="" className={styles.sortIcon} />
            </div>
          </div>
          <div className={styles.contentDivider} />
          <div className={styles.productContent}>
            {showFilter && <FilterSection />}
            <div className={styles.productGrid}>
              {products.map(product => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductList;