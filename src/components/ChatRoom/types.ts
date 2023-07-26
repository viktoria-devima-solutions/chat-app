import type { Timestamp } from 'firebase/firestore';

export interface IFetchedMessages {
  uid: string;
  name: string;
  avatar: string;
  createdAt: Timestamp;
  text: string;
  uis: string;
  id: string;
}
