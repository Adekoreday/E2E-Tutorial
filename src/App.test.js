import React from 'react';
import { render,waitFor, screen } from '@testing-library/react';
import App from './App';

test('renders  react link', async () => {
  render(<App />);
});
