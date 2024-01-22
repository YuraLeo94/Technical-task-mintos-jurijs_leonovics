import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Chip from './chip';
import { ChipType } from './chip.type';

describe('Chip component', () => {
  const currency = {
    isSelected: false,
    value: 'USD',
  };

  const selectCurrencyMock = jest.fn();
  const removeSelectedCurrencyMock = jest.fn();

  const defaultProps = {
    currency,
    selectCurrency: selectCurrencyMock,
    removeSelectedCurrency: removeSelectedCurrencyMock,
  };

  it('renders without crashing', () => {
    render(<Chip {...defaultProps} />);
    const chipElement = screen.getByText(currency.value);
    expect(chipElement).toBeInTheDocument();
  });

  it('calls selectCurrency function on chip click', () => {
    render(<Chip {...defaultProps} />);
    const chipElement = screen.getByText(currency.value);

    fireEvent.click(chipElement);
    expect(selectCurrencyMock).toHaveBeenCalledWith({ ...currency, isSelected: true });
  });

  it('renders cancel elements when ChipType is Secondary', () => {
    const { container } = render(
      <Chip {...defaultProps} type={ChipType.Secondary} />
    );

    const cancelContainer = container.querySelector('.chip-container__cancel');
    expect(cancelContainer).toBeInTheDocument();

    fireEvent.click(cancelContainer);
    expect(removeSelectedCurrencyMock).toHaveBeenCalledWith({ ...currency, isSelected: false });
  });

  it('does not render cancel elements when ChipType is not Secondary', () => {
    const { container } = render(
      <Chip {...defaultProps} />
    );

    const cancelContainer = container.querySelector('.chip-container__cancel');
    expect(cancelContainer).toBeNull();
  });

  it('does not call selectCurrency function on chip click if not selectable', () => {
    const selectCurrencyMock = jest.fn();
    defaultProps.selectCurrency = selectCurrencyMock;
    const { container } = render(<Chip {...defaultProps} isSelectable={false} />);
    const chipElement = container.querySelector('.chip-container')

    fireEvent.click(chipElement);
    expect(selectCurrencyMock).not.toHaveBeenCalled();
  });
});
