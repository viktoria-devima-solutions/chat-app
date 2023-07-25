import { Box } from '@mui/material';
import { collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth, db } from '@/src/firebase';

import MessageField from '../MessageField/MessageField';

import { styles } from './styles';

import type { Message } from '../types';

const ChatRoom = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [user] = useAuthState(auth);
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
    return () => unsubscribe;
  }, []);

  return (
    <Box sx={styles.container}>
      {messages?.map((message: Message) => {
        return (
          <Box
            key={message.id}
            sx={
              message.uid === user?.uid
                ? styles.messageSenderContainer
                : styles.messageReceiverContainer
            }
          >
            <MessageField message={message} />
          </Box>
        );
      })}
    </Box>
  );
};
export default ChatRoom;
