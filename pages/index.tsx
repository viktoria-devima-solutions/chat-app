import { Box } from '@mui/material';
import { Inter } from 'next/font/google';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '@/src/firebase';
import ChatPage from '@/src/page-content/chat-page/ChatPage';
import HomePage from '@/src/page-content/home-page/HomePage';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [user] = useAuthState(auth);
  return (
    <Box sx={{ height: '100%' }}>
      <main className={`${inter.className}`} style={{ height: '100%' }}>
        {!user ? <HomePage /> : <ChatPage />}
      </main>
    </Box>
  );
}
