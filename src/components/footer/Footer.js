import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; Adding my Linkedin here</p>
      </div>
    </footer>
  );
}

export default Footer;
