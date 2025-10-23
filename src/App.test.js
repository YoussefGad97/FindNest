import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home heading', () => {
  render(<App />);
  const heading = screen.getByText(/discover the best finds on amazon/i);
  expect(heading).toBeInTheDocument();
});
