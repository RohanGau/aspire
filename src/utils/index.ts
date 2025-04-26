import { Account, Card, Credit, Home, Payments } from '../assets/icons';
import { SidebarItem } from '../interface/types';

export const LOCAL_STORAGE_CARD_KEY = 'cards';

export const sidebarItems: SidebarItem[] = [
  {
    id: 1,
    label: 'Home',
    icon: Home,
    path: '/home',
  },
  {
    id: 2,
    label: 'Cards',
    icon: Card,
    path: '/cards',
  },
  {
    id: 3,
    label: 'Payments',
    icon: Payments,
    path: '/payments',
  },
  {
    id: 4,
    label: 'Credit',
    icon: Credit,
    path: '/credit',
  },
  {
    id: 5,
    label: 'Settings',
    icon: Account,
    path: '/settings',
  },
];

export const generateRandomCardNumber = () => {
  return Array(4)
    .fill('')
    .map(() => Math.floor(1000 + Math.random() * 9000).toString())
    .join(' ');
};

export const generateRandomExpiryDate = () => {
  const month = Math.floor(Math.random() * 12) + 1;
  const year = Math.floor(Math.random() * 5) + 25; // 2025-2029
  return `${month.toString().padStart(2, '0')}/${year}`;
};

export const generateRandomCVV = () => {
  return Math.floor(100 + Math.random() * 900).toString(); // 100-999
};
