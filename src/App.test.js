import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders bye there p element', () => {
  const { getByText } = render(<App />);
  const newText = getByText(/Bye there/i);
  expect(newText).toBeInTheDocument();
});
