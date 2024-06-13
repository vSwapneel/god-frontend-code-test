import React, {useState} from 'react';
import styles from'./CardView.module.scss';

const CardView = (props) => {

    const [car, setCar] = useState(props);
  return (
    <div className={styles.card}>
      <div className={styles.cardcontent}>
        <p className={styles.cardtitle}>{car.bodyType.toUpperCase()}</p>
        <div className={styles.carddetails}>
          <h2 className={styles.carddescription}>{car.modelName}</h2>
          <p>{car.modelType}</p>
        </div>
      </div>
      <img src={car.imageUrl} alt={car.modelName} className={styles.cardimage} />
      <div className={styles.cardbottom}>
        {/* <p>Redirection Section</p> */}
        <div className={styles.cardbottom_1}><h5>LEARN</h5> <img className={styles.setcolor} src ='/images/chevron-small.svg'/></div>
        <div className={styles.cardbottom_1}><h5>SHOP</h5> <img className={styles.setcolor} src ='/images/chevron-small.svg'/></div>
      </div>
    </div>

  )
}

export default CardView;
