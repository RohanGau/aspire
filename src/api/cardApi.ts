import { Card } from '../interface/types';

const dummyCards: Card[] = [
  {
    id: '1',
    name: 'Personal Card',
    number: '1234 5678 1234 5678',
    expiry: '12/26',
    cvv: '123',
  },
  {
    id: '2',
    name: 'Work Card',
    number: '8765 4321 8765 4321',
    expiry: '11/27',
    cvv: '456',
  },
];

const simulateDelay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchCardApi = async (): Promise<Card[]> => {
  await simulateDelay(500);
  return dummyCards;
};

export const addCardApi = async (card: Omit<Card, 'id'>): Promise<Card> => {
  await simulateDelay(300);
  return {
    id: Date.now().toString(),
    ...card,
  };
};
