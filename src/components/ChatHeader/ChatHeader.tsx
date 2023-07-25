import { Box, Button, Typography } from '@mui/material';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '@/src/firebase';
import { signOut } from '@/src/utils/auth-firebase.util';

import { styles } from './styles';

const ChatHeader = () => {
  const [user] = useAuthState(auth);

  return (
    <Box sx={styles.container}>
      <Box sx={styles.flexRow}>
        <Typography variant="h4" component="h4">
          {user?.displayName}
        </Typography>
        <Button onClick={signOut} type="button">
          Sign Out
        </Button>
      </Box>
      <hr style={styles.hr} />
    </Box>
  );
};
export default ChatHeader;
