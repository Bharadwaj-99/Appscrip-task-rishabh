import React from 'react';
import styles from './Footer.module.css';
import usa from '../assests/usa.png'
import usastar from '../assests/usastar.png'
import insta from '../assests/insta.png'
import amex from '../assests/amex.png'
import apple from '../assests/apple.png'
import gpay from '../assests/gpay.png'
import linkedin from '../assests/linkedin.png'
import paypal from '../assests/paypal.png'
import pay from '../assests/pay.png'
import mastercard from '../assests/mastercard.png'

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
            <img src={usa} alt="usa" className={styles.currencyFlag} />
            <img src={usastar} alt="star" className={styles.currencyDropdown} />
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
              <img src={insta} alt="instagram" className={styles.socialIcon} />
            </a>
            <a href="#linkedin" aria-label="Follow us on LinkedIn">
              <img src={linkedin} alt="linkedin" className={styles.socialIcon} />
            </a>
          </div>
          <h3 className={styles.paymentTitle}>mettā muse Accepts</h3>
          <div className={styles.paymentMethods}>
            <img src={gpay}alt="gpay" className={styles.paymentIcon} />
            <img src={mastercard} alt="Mastercard" className={styles.paymentIcon} />
            <img src={paypal} alt="paypal" className={styles.paymentIcon} />
            <img src={amex} alt="amex" className={styles.paymentIcon} />
            <img src={apple} alt="apple" className={styles.paymentIcon} />
            <img src={pay} alt="UnionPay" className={styles.paymentIcon} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;