import { Box, CircularProgress } from '@mui/material';

import { styles } from './styles';

const LoadingDisplay = () => {
  return (
    <Box sx={styles.container}>
      <CircularProgress />
    </Box>
  );
};
export default LoadingDisplay;
