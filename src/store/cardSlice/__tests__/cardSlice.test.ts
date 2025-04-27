import reducer, { clearCards, deleteCard, fetchCards, addCard } from '../cardSlice';
import { AnyAction } from '@reduxjs/toolkit';
import { CardState, Card } from '../../../interface/types';
import { LOCAL_STORAGE_CARD_KEY } from '../../../utils';
import { fetchCardApi, addCardApi } from '../../../api/cardApi';

// Mock localStorage
beforeEach(() => {
  Storage.prototype.getItem = jest.fn();
  Storage.prototype.setItem = jest.fn();
  Storage.prototype.removeItem = jest.fn();
  jest.clearAllMocks();
});

// Mock APIs
jest.mock('../../../api/cardApi', () => ({
  fetchCardApi: jest.fn(),
  addCardApi: jest.fn(),
}));

const mockCard: Card = {
  id: '123',
  name: 'Test Card',
  number: '1111 2222 3333 4444',
  expiry: '12/25',
  cvv: '123',
};

const initialState: CardState = {
  cards: [],
  loading: false,
  error: null,
};

describe('cardSlice reducer', () => {
  it('should handle initial state', () => {
    expect(reducer(undefined, {} as AnyAction)).toEqual({
      cards: [],
      loading: false,
      error: null,
    });
  });

  it('should handle clearCards', () => {
    const stateWithCards: CardState = { ...initialState, cards: [mockCard] };

    const newState = reducer(stateWithCards, clearCards());

    expect(newState.cards).toEqual([]);
    expect(localStorage.removeItem).toHaveBeenCalledWith(LOCAL_STORAGE_CARD_KEY);
  });

  it('should handle deleteCard', () => {
    const stateWithCards: CardState = { ...initialState, cards: [mockCard] };

    const newState = reducer(stateWithCards, deleteCard('123'));

    expect(newState.cards).toEqual([]);
    expect(localStorage.setItem).toHaveBeenCalledWith(LOCAL_STORAGE_CARD_KEY, JSON.stringify([]));
  });
});

describe('cardSlice async actions', () => {
  it('should handle fetchCards.pending', () => {
    const action = { type: fetchCards.pending.type };
    const state = reducer(initialState, action);

    expect(state.loading).toBe(true);
    expect(state.error).toBeNull();
  });

  it('should handle fetchCards.fulfilled', () => {
    const action = { type: fetchCards.fulfilled.type, payload: [mockCard] };
    const state = reducer(initialState, action);

    expect(state.loading).toBe(false);
    expect(state.cards).toEqual([mockCard]);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      LOCAL_STORAGE_CARD_KEY,
      JSON.stringify([mockCard])
    );
  });

  it('should handle fetchCards.rejected', () => {
    const action = { type: fetchCards.rejected.type, error: { message: 'Network error' } };
    const state = reducer(initialState, action);

    expect(state.loading).toBe(false);
    expect(state.error).toBe('Network error');
  });

  it('should handle addCard.fulfilled', () => {
    const action = { type: addCard.fulfilled.type, payload: mockCard };
    const state = reducer(initialState, action);

    expect(state.cards).toEqual([mockCard]);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      LOCAL_STORAGE_CARD_KEY,
      JSON.stringify([mockCard])
    );
  });
});
