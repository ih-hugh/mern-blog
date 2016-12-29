import React from 'react';

// Import Style
import styles from './Footer.css';

export function Footer() {
  return (
    <div style={{ background: '#333c5a' }} className={styles.footer}>
      <p>&copy; 2016 &middot; MagicBlog &middot; Magic Leap Exam</p>
    </div>
  );
}

export default Footer;
