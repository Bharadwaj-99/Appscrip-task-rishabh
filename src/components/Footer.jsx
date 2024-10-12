import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.subscriptionSection}>
          <h2 className={styles.sectionTitle}>Be the first to know</h2>
          <p className={styles.sectionDescription}>Sign up for updates from mettā muse.</p>
          <form className={styles.subscribeForm}>
            <label htmlFor="emailInput" className={styles.visuallyHidden}>Enter your e-mail</label>
            <input type="email" id="emailInput" className={styles.emailInput} placeholder="Enter your e-mail..." aria-label="Enter your e-mail" />
            <button type="submit" className={styles.subscribeButton}>Subscribe</button>
          </form>
        </div>
        <div className={styles.contactSection}>
          <h2 className={styles.sectionTitle}>CONTACT US</h2>
          <p className={styles.contactInfo}>+44 221 133 5360</p>
          <p className={styles.contactInfo}>customercare@mettamuse.com</p>
          <h3 className={styles.currencyTitle}>Currency</h3>
          <div className={styles.currencySelector}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/48fb5ce7673ab4bb9291000daa93efc7bc691e86f1234ec7cf4a512d66dfbc4c?placeholderIfAbsent=true&apiKey=9e9af893f9334aa39b88140068087eea" alt="" className={styles.currencyFlag} />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0826f0179bf48701b79e7d666903256ed26bf87485435f6304d930dbbb5aaa9?placeholderIfAbsent=true&apiKey=9e9af893f9334aa39b88140068087eea" alt="" className={styles.currencyDropdown} />
            <span className={styles.currencyCode}>USD</span>
          </div>
          <p className={styles.currencyNote}>
            Transactions will be completed in Euros and a currency reference is available on hover.
          </p>
        </div>
      </div>
      <hr className={styles.footerDivider} />
      <div className={styles.footerLinks}>
        <div className={styles.brandSection}>
          <h2 className={styles.brandName}>mettā muse</h2>
          <nav className={styles.brandNav}>
            <a href="#about">About Us</a>
            <a href="#stories">Stories</a>
            <a href="#artisans">Artisans</a>
            <a href="#boutiques">Boutiques</a>
            <a href="#contact">Contact Us</a>
            <a href="#eu-docs">EU Compliances Docs</a>
          </nav>
        </div>
        <div className={styles.quickLinksSection}>
          <h2 className={styles.sectionTitle}>Quick Links</h2>
          <nav className={styles.quickLinksNav}>
            <a href="#orders">Orders & Shipping</a>
            <a href="#join">Join/Login as a Seller</a>
            <a href="#payment">Payment & Pricing</a>
            <a href="#returns">Return & Refunds</a>
            <a href="#faqs">FAQs</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms & Conditions</a>
          </nav>
          <p className={styles.copyright}>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
        <div className={styles.socialSection}>
          <h2 className={styles.sectionTitle}>Follow Us</h2>
          <div className={styles.socialIcons}>
            <a href="#instagram" aria-label="Follow us on Instagram">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5782aa152cf3fefa8faa3839b79eb1b00ad0a29aa94b856704564b295fcc9a3?placeholderIfAbsent=true&apiKey=9e9af893f9334aa39b88140068087eea" alt="" className={styles.socialIcon} />
            </a>
            <a href="#linkedin" aria-label="Follow us on LinkedIn">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9cb0f6633775abe68b51df79fcfd1b238d254b16880089c29f6bc692434c9f3a?placeholderIfAbsent=true&apiKey=9e9af893f9334aa39b88140068087eea" alt="" className={styles.socialIcon} />
            </a>
          </div>
          <h3 className={styles.paymentTitle}>mettā muse Accepts</h3>
          <div className={styles.paymentMethods}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/187244943b1ea6f050e97a182016e69061656fbf05cececb2c6e83e7f3fb52cf?placeholderIfAbsent=true&apiKey=9e9af893f9334aa39b88140068087eea" alt="Visa" className={styles.paymentIcon} />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2151c8f4ec91b031e85cf83270c747e71e5d9d5c422a6b54fe87253a45147a5?placeholderIfAbsent=true&apiKey=9e9af893f9334aa39b88140068087eea" alt="Mastercard" className={styles.paymentIcon} />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/77f14b68a05e99db81e7ddc00ea01e37968be6dcb78fb5e8edae74d9387a02d6?placeholderIfAbsent=true&apiKey=9e9af893f9334aa39b88140068087eea" alt="American Express" className={styles.paymentIcon} />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/427280cbfe917309b54249fed012356c0694a80ff5f7b7bd8b174f5aa96e40d3?placeholderIfAbsent=true&apiKey=9e9af893f9334aa39b88140068087eea" alt="Discover" className={styles.paymentIcon} />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9d59fa8e8b62945b558d57372cb58f11adf34f324827543132d55cb54a77255?placeholderIfAbsent=true&apiKey=9e9af893f9334aa39b88140068087eea" alt="JCB" className={styles.paymentIcon} />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c6cdf32fe60522cfe20804d7c2f6306f40340d2e5c87f8c4c7c227c0df24528?placeholderIfAbsent=true&apiKey=9e9af893f9334aa39b88140068087eea" alt="UnionPay" className={styles.paymentIcon} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;