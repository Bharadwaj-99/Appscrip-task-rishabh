import React, { useState } from 'react';
import styles from './ProductList.module.css';
import Header from './Header';
import Footer from './Footer';
import ProductCard from './ProductCard';
import FilterSection from './FilterSection';

const ProductList = () => {
  const [showFilter, setShowFilter] = useState(true);

  const products = [
    {
      id: 1,
      name: 'PPXOC Milkyway dress in pressed flowers',
      isNew: true,
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fc0edd9176cea22510f83608143b1864e7028fc5dacd9e2c8d4212936839524b?placeholderIfAbsent=true&apiKey=9e9af893f9334aa39b88140068087eea'
    },
    {
      id: 2,
      name: 'PPXOC Milkyway dress in pressed flowers',
      isOutOfStock: true,
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a09d8f4f219347a2142e03be44c58af0123b901a7ed416311d58166d1bae3a80?placeholderIfAbsent=true&apiKey=9e9af893f9334aa39b88140068087eea'
    },
    {
      id: 3,
      name: 'Product Name',
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ddf63b88177f08123ecded76500105c35a45e6928ad1d8c91ff7407df23d95b8?placeholderIfAbsent=true&apiKey=9e9af893f9334aa39b88140068087eea'
    },
    {
      id: 4,
      name: 'Product Name',
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/486df115a4d3d9981381aaf232c0373cdb481a1824675f295e0c1e5eeb01c85e?placeholderIfAbsent=true&apiKey=9e9af893f9334aa39b88140068087eea'
    },
    {
      id: 5,
      name: 'Product Name',
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9827672100acf84435a5f07739ff5345f3a45ffe2c96557961ea4a468aa2b001?placeholderIfAbsent=true&apiKey=9e9af893f9334aa39b88140068087eea'
    },
    {
      id: 6,
      name: 'Product Name',
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d21f24edfb76048fd144e274d65d24b6eb72385c0e42a5f0b2aaa7fae6374119?placeholderIfAbsent=true&apiKey=9e9af893f9334aa39b88140068087eea'
    },
    {
      id: 7,
      name: 'Product Name',
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7e6f1ebcd3fb7e55f0ff0004ea53b85808aa0a0879230285983c8f0d443e0f6b?placeholderIfAbsent=true&apiKey=9e9af893f9334aa39b88140068087eea'
    },
    {
      id: 8,
      name: 'Product Name',
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/dda6490902b50128bc05777da707b866fe6eb92782554cebc80fe9adc2934a64?placeholderIfAbsent=true&apiKey=9e9af893f9334aa39b88140068087eea'
    },
    {
      id: 9,
      name: 'Product Name',
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1f88cfc51c2473ad7c02294a492a84c286ab1c7e40051961de408c5f79ccde2b?placeholderIfAbsent=true&apiKey=9e9af893f9334aa39b88140068087eea'
    },
    {
      id: 10,
      name: 'Product Name',
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/37da56c62ba04a2ab0f89a450a737bdf5443f714b74048a5b2dda9c9ebb42237?placeholderIfAbsent=true&apiKey=9e9af893f9334aa39b88140068087eea'
    },
    {
      id: 11,
      name: 'Product Name',
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f68f554216f6e2e760fb865d794c860919b7448520513e51484138712831f2ff?placeholderIfAbsent=true&apiKey=9e9af893f9334aa39b88140068087eea'
    },
    {
      id: 12,
      name: 'Product Name',
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bdbe221e2cb890d5f8f6436c8896dc0cba40f9d71c959811336cbbe603cb42d4?placeholderIfAbsent=true&apiKey=9e9af893f9334aa39b88140068087eea'
    },
    {
      id: 13,
      name: 'Product Name',
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ddf63b88177f08123ecded76500105c35a45e6928ad1d8c91ff7407df23d95b8?placeholderIfAbsent=true&apiKey=9e9af893f9334aa39b88140068087eea'
    },
    {
      id: 14,
      name: 'Product Name',
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a09d8f4f219347a2142e03be44c58af0123b901a7ed416311d58166d1bae3a80?placeholderIfAbsent=true&apiKey=9e9af893f9334aa39b88140068087eea'
    },
    {
      id: 15,
      name: 'Product Name',
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/486df115a4d3d9981381aaf232c0373cdb481a1824675f295e0c1e5eeb01c85e?placeholderIfAbsent=true&apiKey=9e9af893f9334aa39b88140068087eea'
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
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/594071ad9d39af559486e3edea0b23370b7d5419c4f5a420c7e7dfb0c4f0a7ff?placeholderIfAbsent=true&apiKey=9e9af893f9334aa39b88140068087eea" alt="" className={styles.filterIcon} />
                {showFilter ? 'HIDE FILTER' : 'SHOW FILTER'}
              </button>
            </div>
            <div className={styles.sortSection}>
              <span className={styles.sortLabel}>RECOMMENDED</span>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/32bf7102853f26de22012b3e5b490446d1d784ff29a1d71b9af000fb9a593b81?placeholderIfAbsent=true&apiKey=9e9af893f9334aa39b88140068087eea" alt="" className={styles.sortIcon} />
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