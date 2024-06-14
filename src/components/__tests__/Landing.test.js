import React from 'react';
import { render } from '@testing-library/react';
import {Landing} from '../Landing';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

test('renders the correct content', () => {
  useRouter.mockReturnValue({
    asPath: '/',
    push: jest.fn()
  });
  render(<Landing/>);
});
