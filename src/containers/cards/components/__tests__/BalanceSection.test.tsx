import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
// import BalanceSection from './BalanceSection';
import BalanceSection from '../BalanceSection';
import { Skeleton } from 'antd';

describe('BalanceSection', () => {
  const mockHandleAddCard = jest.fn();
  const defaultProps = {
    isLoading: false,
    balance: 12345.67,
    currency: 'S$',
    onhandleAddCard: mockHandleAddCard,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading skeleton when isLoading is true', () => {
    render(<BalanceSection {...defaultProps} isLoading={true} />);

    // Check for Ant Design Skeleton component
    const skeleton = document.querySelector('.ant-skeleton-button');
    expect(skeleton).toBeInTheDocument();
    expect(skeleton).toHaveClass('ant-skeleton-button');
  });

  it('displays balance and currency correctly when not loading', () => {
    render(<BalanceSection {...defaultProps} />);

    expect(screen.getByText('Available Balance')).toBeInTheDocument();
    expect(screen.getByText('S$')).toBeInTheDocument();
    expect(screen.getByText('12,345.67')).toBeInTheDocument();
  });

  it('calls onhandleAddCard when "New Card" button is clicked', () => {
    render(<BalanceSection {...defaultProps} />);

    const button = screen.getByRole('button', { name: /new card/i });
    fireEvent.click(button);

    expect(mockHandleAddCard).toHaveBeenCalledTimes(1);
  });

  it('matches snapshot when loading', () => {
    const { asFragment } = render(<BalanceSection {...defaultProps} isLoading={true} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('matches snapshot when not loading', () => {
    const { asFragment } = render(<BalanceSection {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
