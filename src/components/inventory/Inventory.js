import React, { useEffect, useState } from 'react';
import styles from './Inventory.module.scss';
import data from '../../../public/api/cars.json';
import CardView from '../cardview/CardView';

const Inventory = () => {

    const [cars, setCars] = useState();
    // console.log(data)
    
    useEffect(() =>{
        setCars(data);
    },[]);

    // console.log("cars", cars);
  return (
    <div className={styles.box}>
        {cars?.map((car, index)=>(
            <CardView
                key={index}
                index={index}
                id={car?.id}
                modelName={car?.modelName}
                bodyType={car?.bodyType}
                modelType={car?.modelType}
                imageUrl={car?.imageUrl}
            />
        ))}
    </div>
  )
}

export default Inventory;