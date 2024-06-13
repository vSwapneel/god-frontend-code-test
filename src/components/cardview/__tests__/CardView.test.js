import React from 'react';
import { render } from '@testing-library/react';
import CardView from '../CardView';

const car = {
    id: "xc90-recharge",
    modelName: "XC90 Recharge", 
    bodyType: "suv",
    modelType: "plug-in hybrid",
    imageUrl: "/images/xc90_recharge.jpg"
  }

test('renders the correct content', () => {
  render(<CardView
            id={car?.id}
            modelName={car?.modelName}
            bodyType={car?.bodyType}
            modelType={car?.modelType}
            imageUrl={car?.imageUrl}
        />);
});
