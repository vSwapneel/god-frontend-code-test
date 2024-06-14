import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import CardView from '../CardView';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

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

test('Simulate learn and shop actions', () => {
  useRouter.mockReturnValue({
    push: jest.fn()
  });
  const { container } = render(<CardView
    id={car?.id}
    modelName={car?.modelName}
    bodyType={car?.bodyType}
    modelType={car?.modelType}
    imageUrl={car?.imageUrl}
  />);  

  const elements = container.getElementsByClassName('cardbottom_1');

  expect(elements.length).toBe(2);
  
  fireEvent.click(elements[0]);

  fireEvent.click(elements[1]);
});
