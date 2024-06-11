import React, { useEffect, useState } from 'react';
import styles from './Inventory.module.scss';
import data from '../../../public/api/cars.json';
import CardView from '../cardview/CardView';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Filter from '../filter/Filter';

const Inventory = () => {

    const [cars, setCars] = useState([]);
    const [filteredCars, setFilteredCars] = useState([]);
    
    // Ideally set at an API call
    useEffect(() =>{
        setCars([...data]);
    },[]);

    useEffect(()=>{
        setFilteredCars([...cars]);
    },[cars]);

    const breakpointItems = (width) => { if(width > 3000 && width <= 5000){ return 4; } else if(width > 1024 && width <= 3000){ return 4; } else if(width > 464 && width <= 1024){ return 3; } else { return 1; } }
    const responsive ={
        superLargeDesktop :{
            breakpoint: { max: 5000, min: 3000 },
            items: 5,
            slidesToSlide: 3
        },
        desktop:{
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 3
        },
        tablet:{
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 3
        },
        mobile:{
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    }

  return (
    <div>
        <Filter 
            allCars={cars}
            setFilter={setFilteredCars}
        />
        {filteredCars.length > 0 ? 
            <Carousel responsive ={responsive} arrows={true} renderButtonGroupOutside={true}>
                {filteredCars?.map((car, index)=>(
                    <div className={styles.box} key={car.id}>
                        <CardView
                            id={car?.id}
                            modelName={car?.modelName}
                            bodyType={car?.bodyType}
                            modelType={car?.modelType}
                            imageUrl={car?.imageUrl}
                        />
                    </div>
                ))}
            </Carousel>
        :
            <div className={styles.displayMessage}>
                No cars Found for this selection, Change the filters to view more.
            </div>

        }
    </div>
  )
}

export default Inventory;