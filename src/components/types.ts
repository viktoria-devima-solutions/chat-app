import type { Timestamp } from 'firebase/firestore';

export interface Message {
  text: string;
  uid: string;
  avatar: string;
  createdAt: Timestamp;
  id: string;
}

export type ChatMessageProps = {
  message: Message;
  key: string;
};
