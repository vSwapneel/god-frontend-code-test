import React from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  const handleLogoClick = () =>{
    if(router.asPath != '/home'){
      router.push('/home');
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo} onClick={handleLogoClick}>
          <Image src="/images/logo.jpg" alt="Logo" className={styles.logoImage} width={100}
   height={10}/>
        </div>
      </div>
    </header>
  );
}

export default Header;
