import React from 'react';
import styles from './Header.module.css';
import img1 from '../assests/img1.png'
import logo1 from '../assests/logo1.png'
import img2 from '../assests/img2.png'
import img3 from '../assests/img3.png'

import img4 from '../assests/img4.png'

import img5 from '../assests/img5.png'
import image from '../assests/image.png'




const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.topStrip}>
        <div className={styles.stripItem}>
          <img src={img1} alt="logo" className={styles.stripIcon} />
          <span>Lorem ipsum dolor</span>
        </div>
        <div className={styles.stripItem}>
          <img src={img1} alt="logo" className={styles.stripIcon} />
          <span>Lorem ipsum dolor</span>
        </div>
        <div className={styles.stripItem}>
          <img src={img1} alt="logo" className={styles.stripIcon} />
          <span>Lorem ipsum dolor</span>
        </div>
      </div>
      <div className={styles.mainHeader}>
        <img src={logo1} alt="Logo" className={styles.logo} />
        <h1 className={styles.brandName}>LOGO</h1>
        <div className={styles.headerIcons}>
          <img src={img2} alt="Search" className={styles.icon} />
          <img src={img3} alt="User" className={styles.icon} />
          <img src={img4} alt="Wishlist" className={styles.icon} />
          <img src={img5} alt="Cart" className={styles.icon} />
          <div className={styles.language}>
            <span>ENG</span>
            <img src={image} alt="dropdown" className={styles.dropdownIcon} />
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