import GoogleIcon from '@mui/icons-material/Google';
import { Box, Typography } from '@mui/material';

import IconButton from '@/src/components/buttons/IconButton/IconButton';
import { googleSignIn } from '@/src/utils/auth-firebase.util';

import SignInForm from './components/SignInForm/SignInForm';
import { styles } from './styles';
const HomePage = () => {
  return (
    <Box sx={styles.container}>
      <Typography>Welcome</Typography>
      <SignInForm />
      <IconButton text={'Sign in with Google'} startIcon={<GoogleIcon />} onClick={googleSignIn} />
    </Box>
  );
};
export default HomePage;
