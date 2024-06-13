import React from 'react';
import styles from './Body.module.scss';
import Inventory from '../inventory/Inventory';

const Body=()=> {
  return (
    <div className= {styles.maincontent}>
        <Inventory />
    </div>
  )
}

export default Body;
