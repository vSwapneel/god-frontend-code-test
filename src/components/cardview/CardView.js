import React, {useState} from 'react';
import styles from'./CardView.module.scss';
import Card from 'vcc-ui';

const CardView = (props) => {

    const [car, setCar] = useState(props);
    console.log('Car', car);
  return (
    <div className={styles.card}>
      <img src={car.imageUrl} alt={car.modelName} className={styles.cardimage} />
      <div className={styles.cardcontent}>
        <h2 className={styles.cardtitle}>{car.bodyType}</h2>
        <p className={styles.carddescription}>{car.modelName} {car.modelType}</p>
      </div>
    </div>

  )
}

export default CardView;