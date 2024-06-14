import React from 'react';
import { render } from '@testing-library/react';
import HomePage from '../_app';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

test('renders the correct content Home page', () => {
  useRouter.mockReturnValue({
    asPath: '/',
    push: jest.fn(),
  });
  render(<HomePage/>);
});

test('renders the correct content Learn More Page', () => {
  useRouter.mockReturnValue({
    asPath: '/learn/xc60-recharge',
    push: jest.fn(),
  });
  render(<HomePage/>);
});

test('renders the correct content Shop More Page', () => {
  useRouter.mockReturnValue({
    asPath: '/shop/xc60-recharge',
    push: jest.fn(),
  });
  render(<HomePage/>);
});

