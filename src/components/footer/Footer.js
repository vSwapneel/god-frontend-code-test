import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.name}><a target="none" href="https://www.linkedin.com/in/swapneel-vaidya/">Swapneel Suhas Vaidya</a></p>
        <p className={styles.mail}><a target="none" href="mailto:vswapneel27@gmail.com">vswapneel27@gmail.com</a></p>
      </div>
    </footer>
  );
}

export default Footer;
