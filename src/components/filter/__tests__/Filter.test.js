import React from 'react';
import { render, fireEvent} from '@testing-library/react';
import Filter from '../Filter';
import selectEvent from "react-select-event";

const cars = [
    {
      id: "xc90-recharge",
      modelName: "XC90 Recharge", 
      bodyType: "suv",
      modelType: "plug-in hybrid",
      imageUrl: "/images/xc90_recharge.jpg"
    },
    {
      id: "xc60-recharge",
      modelName: "XC60 Recharge", 
      bodyType: "suv",
      modelType: "plug-in hybrid",
      imageUrl: "/images/xc60_recharge.jpg"
    }];

const mockFunction = jest.fn();

test('renders two React Select components', async () => {
  
    const {container} = render(<Filter 
        allCars = {cars}
        setFilter = {mockFunction}
    />);

    const selectBoxes = container.getElementsByClassName('selectBox');
    const options = container.getElementsByClassName('option');
    
   
    expect(selectBoxes.length).toBe(2);

    fireEvent.change(selectBoxes[0], { label: "SUV", value: 'suv' });
    await selectEvent.select(selectBoxes[0], "SUV");

    fireEvent.change(selectBoxes[1], {label: "Plug-in Hybrid", value: "plug-in hybrid"});
    await selectEvent.select(selectBoxes[1], "Plug-in Hybrid");

    fireEvent.change(selectBoxes[0], {label: 'All', value:'all'});
    await selectEvent.select(selectBoxes[0], "All Body Types");

    fireEvent.change(selectBoxes[1], {label: "Pure Electric", value: "pure electric"});
    await selectEvent.select(selectBoxes[1], "Pure Electric");

}); 
