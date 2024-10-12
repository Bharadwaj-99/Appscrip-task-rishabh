import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topStrip}>
        <div className={styles.stripItem}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6af99ef5f425f31d6a370da4d5aff9b93f9ebd7a85a3f461215382212d09cb40?placeholderIfAbsent=true&apiKey=9e9af893f9334aa39b88140068087eea" alt="" className={styles.stripIcon} />
          <span>Lorem ipsum dolor</span>
        </div>
        <div className={styles.stripItem}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6af99ef5f425f31d6a370da4d5aff9b93f9ebd7a85a3f461215382212d09cb40?placeholderIfAbsent=true&apiKey=9e9af893f9334aa39b88140068087eea" alt="" className={styles.stripIcon} />
          <span>Lorem ipsum dolor</span>
        </div>
        <div className={styles.stripItem}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6af99ef5f425f31d6a370da4d5aff9b93f9ebd7a85a3f461215382212d09cb40?placeholderIfAbsent=true&apiKey=9e9af893f9334aa39b88140068087eea" alt="" className={styles.stripIcon} />
          <span>Lorem ipsum dolor</span>
        </div>
      </div>
      <div className={styles.mainHeader}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f0dd93302348c3b3f46ce1118f00f7f3a21f7111b0592e8c6d6ef1f73ea3bef?placeholderIfAbsent=true&apiKey=9e9af893f9334aa39b88140068087eea" alt="Logo" className={styles.logo} />
        <h1 className={styles.brandName}>LOGO</h1>
        <div className={styles.headerIcons}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/dcb0b404f75718928201d0f2e6239f278fc888d5601f5f5c8fd9bb9fb82f49c2?placeholderIfAbsent=true&apiKey=9e9af893f9334aa39b88140068087eea" alt="Search" className={styles.icon} />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0c668573c2b8b722a3162e3b3e49d3eddef12fe61cc571adb92e7a0083bf2c7?placeholderIfAbsent=true&apiKey=9e9af893f9334aa39b88140068087eea" alt="User" className={styles.icon} />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f275c0fd3da548395ba02be2df3f5534df6935d5d427477c330dd9a25ba4fd27?placeholderIfAbsent=true&apiKey=9e9af893f9334aa39b88140068087eea" alt="Wishlist" className={styles.icon} />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1014cf542ee3c97bbe808712f6c7631c7eb43ccf619aec14497ad390320e2835?placeholderIfAbsent=true&apiKey=9e9af893f9334aa39b88140068087eea" alt="Cart" className={styles.icon} />
          <div className={styles.language}>
            <span>ENG</span>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5170181ed90c2877fe2d5a60c2aa71a775964c2bb5e7cbefac0d38add3c70eef?placeholderIfAbsent=true&apiKey=9e9af893f9334aa39b88140068087eea" alt="" className={styles.dropdownIcon} />
          </div>
        </div>
      </div>
      <nav className={styles.navigation}>
        <a href="#shop" className={styles.navItem}>SHOP</a>
        <a href="#skills" className={styles.navItem}>SKILLS</a>
        <a href="#stories" className={styles.navItem}>STORIES</a>
        <a href="#about" className={styles.navItem}>ABOUT</a>
        <a href="#contact" className={styles.navItem}>CONTACT US</a>
      </nav>
    </header>
  );
};

export default Header;