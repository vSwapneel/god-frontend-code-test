import React from 'react';
import styles from './LearnPage.module.scss';


const LearnPage = ({ carId }) => (
  <div className={styles.learnpage}>
    <h1>Learn More about {carId}</h1>
  </div>
);

export default LearnPage;