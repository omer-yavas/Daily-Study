import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('style check', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /Change/i });
  expect(button).toBeEnabled();
  expect(button).toHaveStyle({ backgroundColor: 'MediumVioletRed' });

  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(button).toBeDisabled();
  expect(button).toHaveStyle({ backgroundColor: 'gray' });

  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(button).toBeEnabled();
  expect(button).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
});
