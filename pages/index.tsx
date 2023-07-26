import { Box } from '@mui/material';
import { Inter } from 'next/font/google';

import HomePage from '@/src/page-content/home-page/HomePage';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Box className="full-height">
      <main className={`${inter.className} full-height`}>
        <HomePage />
      </main>
    </Box>
  );
}
