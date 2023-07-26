import { Box } from '@mui/material';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '@/src/firebase';

import MessageField from '../MessageField/MessageField';

import { styles } from './styles';
import useChatRoom from './useChatRoom';

import type { Message } from '../types';

const ChatRoom = () => {
  const { messages } = useChatRoom();
  const [user] = useAuthState(auth);

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
