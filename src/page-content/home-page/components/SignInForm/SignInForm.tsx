import { Box, Button, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { signInUser } from '@/src/utils/auth-firebase.util';

import { styles } from './styles';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  return (
    <Box>
      <form
        onSubmit={(event) => {
          signInUser(event, email, password)?.then(() => {
            router.push('/chat');
          });
        }}
      >
        <Box sx={styles.form}>
          <TextField
            required
            size="small"
            placeholder="Email..."
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required
            size="small"
            type="password"
            placeholder="Password..."
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" type="submit">
            Sign In
          </Button>
        </Box>
      </form>
    </Box>
  );
};
export default SignInForm;
