import React from 'react';
import styles from './ShopPage.module.scss';

const ShopPage = ({ carId }) => (
  <div className={styles.shoppage}>
    <h1>Shop for {carId}</h1>
  </div>
);

export default ShopPage;