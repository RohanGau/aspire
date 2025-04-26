import { Account, Card, Credit, Home, Payments } from '../assets/icons';
import { SidebarItem } from '../interface/types';
import { DeactivateCard, FreezeCard, GPay, ReplaceCard, SetSpendLimit } from '../assets/icons';

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

export const actionsItems = [
  { icon: FreezeCard, label: 'Freeze card' },
  { icon: SetSpendLimit, label: 'Set spend limit' },
  { icon: GPay, label: 'Add to GPay' },
  { icon: ReplaceCard, label: 'Replace card' },
  { icon: DeactivateCard, label: 'Cancel card' },
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
