import { Box } from '@mui/material';

import ChatHeader from '@/src/components/ChatHeader/ChatHeader';
import ChatRoom from '@/src/components/ChatRoom/ChatRoom';
import SendForm from '@/src/components/SendForm/SendForm';

import { styles } from './styles';

const ChatPage = () => {
  return (
    <Box sx={styles.container}>
      <ChatHeader />
      <ChatRoom />
      <SendForm />
    </Box>
  );
};
export default ChatPage;
