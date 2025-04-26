import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardState, Card } from '../../interface/types';
import { addCardApi, fetchCardApi } from '../../api/cardApi';
import { LOCAL_STORAGE_CARD_KEY } from '../../utils';

const savedCards = localStorage.getItem(LOCAL_STORAGE_CARD_KEY);
const initialState: CardState = {
  cards: savedCards ? JSON.parse(savedCards) : [],
  loading: false,
  error: null,
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    clearCards: (state) => {
      state.cards = [];
      localStorage.removeItem(LOCAL_STORAGE_CARD_KEY);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCards.fulfilled, (state, action: PayloadAction<Card[]>) => {
        state.cards = action.payload;
        state.loading = false;
        localStorage.setItem(LOCAL_STORAGE_CARD_KEY, JSON.stringify(state.cards));
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'failed to fetch cards';
      })
      .addCase(addCard.fulfilled, (state, action: PayloadAction<Card>) => {
        state.cards.push(action.payload);
        localStorage.setItem(LOCAL_STORAGE_CARD_KEY, JSON.stringify(state.cards));
      });
  },
});

export const { clearCards } = cardSlice.actions;

export const fetchCards = createAsyncThunk('cards/fetchCards', async () => {
  const cards = await fetchCardApi();
  return cards;
});

export const addCard = createAsyncThunk('cards/addcard', async (card: Omit<Card, 'id'>) => {
  const newCard = await addCardApi(card);
  return newCard;
});

export default cardSlice.reducer;
