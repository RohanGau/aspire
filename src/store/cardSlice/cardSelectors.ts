import { RootState } from '..';

export const selectCards = (state: RootState) => state.card.cards;
export const selectCardsFetchLoading = (state: RootState) => state.card.loading;
export const selectCardsError = (state: RootState) => state.card.error;
