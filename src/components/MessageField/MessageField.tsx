import { Box, Typography } from '@mui/material';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '@/src/firebase';

import { styles } from './styles';

import type { IMessageFieldProps } from './types';

const MessageField = ({ message }: IMessageFieldProps) => {
  const [user] = useAuthState(auth);
  return (
    <Box
      sx={[
        styles.messageBox,
        message.uid === user?.uid ? styles.senderMessage : styles.receiverMessage,
      ]}
    >
      <Typography sx={{ textSizeAdjust: 'auto' }}>{message.text}</Typography>
    </Box>
  );
};
export default MessageField;
