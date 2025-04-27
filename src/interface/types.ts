// import { SessionChatMessage } from 'teleparty-websocket-lib';

export interface User {
  nickname: string;
  icon?: string;
}

export interface ChatRoomState {
  roomId: string | null;
  isConnected: boolean;
  user: User | null;
}

export interface ChatMessage {
  // Add any additional properties you might need
}

export interface SocketConnectionState {
  isConnected: boolean;
  hasError: boolean;
  errorMessage?: string;
}

export interface AppState {
  roomId: string | null;
  nickname: string;
  userId: null | string;
  hasJoined: boolean;
  userIcon?: string;
  isConnected: boolean;
  messages: [];
  usersTyping: string[];
  currentSessionId: string | null;
}

export interface Card {
  id: string;
  name: string;
  number: string;
  expiry: string;
  cvv: string;
}

export interface CardState {
  cards: Card[];
  loading: boolean;
  error: string | null;
}

export interface SidebarItem {
  id: number;
  label: string;
  icon: string;
  path: string;
}

export interface AddCardParamsProps {
  name: string;
  number: string;
  expiry: string;
  cvv: string;
}
