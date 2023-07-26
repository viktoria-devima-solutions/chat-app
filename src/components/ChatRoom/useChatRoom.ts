import { collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import { db } from '@/src/firebase';

import type { Message } from '../types';

const useChatRoom = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('createdAt', 'desc'), limit(50));

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      const sortedMessages = fetchedMessages.sort((a, b) => a.createdAt - b.createdAt);
      setMessages(sortedMessages);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return { messages };
};
export default useChatRoom;
