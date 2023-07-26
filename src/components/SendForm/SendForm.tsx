import SendIcon from '@mui/icons-material/Send';
import { Box, TextField } from '@mui/material';
import { useState } from 'react';

import { sendMessage } from '@/src/utils/auth-firebase.util';

import IconButton from '../buttons/IconButton/IconButton';

import styles from './styles';

const SendForm = () => {
  const [message, setMessage] = useState('');

  return (
    <Box sx={styles.container}>
      <form
        onSubmit={(event) => {
          sendMessage(event, message);
          setMessage('');
        }}
        style={styles.form}
      >
        <TextField
          size="small"
          placeholder="Write message..."
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <IconButton text={'Send'} endIcon={<SendIcon />} type={'submit'} />
      </form>
    </Box>
  );
};
export default SendForm;
