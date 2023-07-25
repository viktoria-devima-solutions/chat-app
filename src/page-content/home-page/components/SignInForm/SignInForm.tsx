import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';

import { signInUser } from '@/src/utils/auth-firebase.util';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Box>
      <form
        onSubmit={(event) => signInUser(event, email, password)}
        style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '15px' }}
      >
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
      </form>
    </Box>
  );
};
export default SignInForm;
