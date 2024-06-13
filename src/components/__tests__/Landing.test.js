import React from 'react';
import { render } from '@testing-library/react';
import {Landing} from '../Landing';

test('renders the correct content', () => {
  render(<Landing/>);
});
