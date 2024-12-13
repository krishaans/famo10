import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import MarketPostForm from '../MarketPostForm';

test('renders form with correct fields', () => {
  render(
    <MarketPostForm
      type="sell"
      onSubmit={() => {}}
      onClose={() => {}}
    />
  );

  expect(screen.getByLabelText(/vegetable type/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/quantity/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/price/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/location/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/contact number/i)).toBeInTheDocument();
});