import { Box } from '@mui/material';
import { Inter } from 'next/font/google';

import ChatPage from '@/src/page-content/chat-page/ChatPage';

const inter = Inter({ subsets: ['latin'] });

export default function Chat() {
  return (
    <Box className="full-height">
      <main className={`${inter.className} full-height`}>
        Here
        <ChatPage />
      </main>
    </Box>
  );
}
