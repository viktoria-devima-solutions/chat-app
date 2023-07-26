import AuthGate from '@/src/components/AuthGate/AuthGate';

import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthGate>
      <Component {...pageProps} />
    </AuthGate>
  );
}
