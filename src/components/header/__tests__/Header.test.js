import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Header from '../Header';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

test('renders the correct content', () => {
  useRouter.mockReturnValue({
    push: jest.fn()
  });
  const {container}= render(<Header/>);

  const element = container.getElementsByClassName('logo');

  expect(element.length).toBe(1);
  
  fireEvent.click(element[0]);
});
