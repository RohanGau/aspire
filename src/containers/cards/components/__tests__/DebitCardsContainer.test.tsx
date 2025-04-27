import { render, screen, fireEvent } from '@testing-library/react';
import DebitCardsContainer, { DebitCardsProps } from '../DebitCardsContainer';
import * as redux from 'react-redux';
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock child components
jest.mock('../CardCarousel', () => (props: any) => (
  <div data-testid="card-carousel">
    Cards: {props.cards.length}, ActiveIndex: {props.activeIndex}
    <button onClick={() => props.setActiveIndex(1)}>Next Card</button>
  </div>
));
jest.mock('../ActionsPanel', () => (props: any) => (
  <div data-testid="actions-panel">
    <button onClick={props.onCancelCardClick}>Cancel Card</button>
  </div>
));
jest.mock('../RecentTransactions', () => () => <div data-testid="recent-transactions" />);

// Mock redux hooks
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('DebitCardsContainer', () => {
  const mockDispatch = jest.fn();
  const cards = [
    { id: 'a1', name: 'Card A', number: '1111', expiry: '01/23', cvv: '123' },
    { id: 'b2', name: 'Card B', number: '2222', expiry: '02/24', cvv: '456' },
  ];

  beforeEach(() => {
    (redux.useSelector as jest.Mock).mockReturnValue(cards);
    (redux.useDispatch as jest.Mock).mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  function renderComponent(isFetching = false) {
    render(<DebitCardsContainer isFetching={isFetching} />);
  }

  it('renders its child components', () => {
    renderComponent();
    expect(screen.getByTestId('card-carousel')).toBeInTheDocument();
    expect(screen.getByTestId('actions-panel')).toBeInTheDocument();
    expect(screen.getByTestId('recent-transactions')).toBeInTheDocument();
  });
});
