import { render, screen } from '@testing-library/react';
import SummaryForm from '../../SummaryForm.js';
import userEvent from '@testing-library/user-event';

test('initial', async () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  });
  const button = screen.getByRole('button', { name: 'Confirm order' });
  expect(checkbox).not.toBeChecked();

  await userEvent.click(checkbox);
  expect(button).toBeEnabled();

  await userEvent.click(checkbox);
  expect(button).toBeDisabled();
});
