import React, { useState, useEffect, useRef } from 'react';
import styles from './Filter.module.scss';
import Select from 'react-select';
import {BODY_TYPES, MODEL_TYPES} from "../constants";

const Filter = (props) => {

    const inputRef = useRef();

    const [bodyType, setBodyType] = useState({label: "All Body Types", value: "all"});
    const [modelType, setModelType] = useState({label: "All Models", value: "all"});
    const [cars, setCars]= useState([...props.allCars])

    
    useEffect(() => {
        setCars([...props.allCars]);
    }, [props.allCars]);

    const applyBodyFilter = (internalCall = false) =>{

        if(internalCall){
            let carsArray = bodyType.value === "all" ? [...props.allCars] : [...props.allCars.filter(car => car.bodyType.toLowerCase() === bodyType.value.toLowerCase())];
            return [...carsArray]
        }

        if(bodyType.value != "all"){
            let currentCars = [...applyModelFilter(true)];
            let carsArray = currentCars.filter(car => car.bodyType.toLowerCase() === bodyType.value.toLowerCase());
            setCars([...carsArray]);
        }
        else{
            setCars([...applyModelFilter(true)]);
        }
    }

    const applyModelFilter = (internalCall = false) =>{

        if(internalCall){
            let carsArray = modelType.value === "all" ? [...props.allCars] : [...props.allCars.filter(car => car.modelType.toLowerCase() === modelType.value.toLowerCase())]
            return [...carsArray]
        }

        if(modelType.value != "all"){
            let currentCars = [...applyBodyFilter(true)]
            let carsArray = currentCars.filter(car => car.modelType.toLowerCase() === modelType.value.toLowerCase());
            setCars([...carsArray]);
        }
        else{
            setCars([...applyBodyFilter(true)]);
        }
    }

    useEffect(()=>{
        applyBodyFilter();
    },[bodyType]);

    useEffect(()=>{
        applyModelFilter();
    },[modelType]);

    useEffect(()=>{ 
        props.setFilter([...cars]);
    },[cars]);



    const customStyles = {
        control: (provided) => ({
            ...provided,
            border: 'none',
            borderBottom: '1px solid #2a609d',
            borderRadius: 'none',
            boxShadow: 'none',
            '&:hover': {
                cursor: 'pointer'
            },
        }),
        singleValue: (provided) => ({
            ...provided,
            color: '#2A609D',
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            padding: '0',
        }),
        indicatorSeparator: () => ({
            display: 'none',
        }),
        menu: (provided) => ({
            ...provided,
            borderRadius: '0 0 4px 4px',
            boxShadow: 'none',
            border: '1px solid',
            width: '100%',
        }),
        menuList: (provided) => ({
            ...provided,
            maxHeight: '200px',
            overflowY: 'auto',
            scrollbarWidth: 'none',
            borderRadius: '0 0 4px 4px',
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? '#007bff' : '#fff',
            color: state.isFocused ? '#fff' : '#2A609D',
            '&:active': {
                backgroundColor: '#0056b3',
                color: '#fff',
            },
            '&:hover': {
                cursor: 'pointer',
            },
        }),
    };


    return (
        <div className={styles.filterContainer}>
            <Select
                className={styles.selectBox}
                styles={customStyles}
                value = {bodyType}
                options={BODY_TYPES}
                onChange={(e) => setBodyType(e)}
                isSearchable={false}
            />
            <Select 
                className={styles.selectBox}
                styles={customStyles}
                value = {modelType}
                options={MODEL_TYPES}
                onChange={(e) => setModelType(e)}
                isSearchable={false}
            />
        </div>
    )
}

export default Filter;
