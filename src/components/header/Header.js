import React from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src="/images/logo.jpg" alt="Logo" className={styles.logoImage} width={100}
   height={10}/>
        </div>
      </div>
    </header>
  );
}

export default Header;
