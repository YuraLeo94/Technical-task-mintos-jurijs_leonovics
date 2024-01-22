import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CurrenciesSelection from './currenciesSelection';

const currenciesData = [
  { key: 'usd', value: 'USD' },
  { key: 'eur', value: 'EUR' },
];

describe('CurrenciesSelection', () => {
  it('renders with default props', () => {
    render(<CurrenciesSelection currenciesData={currenciesData} />);
    expect(screen.getByText(currenciesData[0].value)).toBeInTheDocument();
    expect(screen.getByText(currenciesData[1].value)).toBeInTheDocument();
  });

  it('allows selecting and removing currencies', () => {
    const { container } = render(<CurrenciesSelection currenciesData={currenciesData} />);

    fireEvent.click(container.querySelector('.chip-container'));
    
    const twoElementsWithText = screen.getAllByText(currenciesData[0].value);
    expect(twoElementsWithText).toHaveLength(2);

    fireEvent.click(container.querySelector('.chip-container__cancel'));
    
    const elementsWithText = screen.getAllByText(currenciesData[0].value);
    expect(elementsWithText).toHaveLength(1);
  });
});
