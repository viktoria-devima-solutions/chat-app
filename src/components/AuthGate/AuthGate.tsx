import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';

import { unprotectedRoutes } from '@/src/constants/unprotected-routes.constant';
import { auth } from '@/src/firebase';

import ErrorDisplay from '../displays/ErrorDisplay/ErrorDisplay';
import LoadingDisplay from '../displays/LoadingDisplay/LoadingDisplay';

import type { IAuthGateProps } from './types';

const AuthGate = ({ children }: IAuthGateProps) => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  const pathIsProtected = unprotectedRoutes.indexOf(router.pathname) === -1;

  if (error) {
    return <ErrorDisplay error={error} />;
  }
  if (loading) {
    return <LoadingDisplay />;
  }
  if (!user && pathIsProtected) {
    router.push('/');
  }

  return <>{children}</>;
};
export default AuthGate;
