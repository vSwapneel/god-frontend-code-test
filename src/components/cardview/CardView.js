import React, {useState} from 'react';
import styles from'./CardView.module.scss';
import { useRouter } from 'next/router';

const CardView = (props) => {

  const [car, setCar] = useState(props);
  
  const router = useRouter();

  const handleLearnMore = () => {
    router.push(`/learn/${car.id}`);
  };

  const handleShop = () => {
    router.push(`/shop/${car.id}`);
  };
  
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
        <div className={styles.cardbottom_1} onClick={handleLearnMore}><h5>LEARN</h5> <img className={styles.setcolor} src ='/images/chevron-small.svg'/></div>
        <div className={styles.cardbottom_1} onClick={handleShop}><h5>SHOP</h5> <img className={styles.setcolor} src ='/images/chevron-small.svg'/></div>
      </div>
    </div>

  )
}

export default CardView;
