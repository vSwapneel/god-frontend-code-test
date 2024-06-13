import React from 'react';
import { render } from '@testing-library/react';
import HomePage from '../_app';

test('renders the correct content', () => {
  render(<HomePage/>);
});