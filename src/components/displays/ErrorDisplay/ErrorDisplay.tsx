import { Box, Typography } from '@mui/material';

import { styles } from './styles';

import type { IErrorDisplayProps } from './types';

const ErrorDisplay = ({ error }: IErrorDisplayProps) => {
  return (
    <Box sx={styles.container}>
      <Typography>{error.message}</Typography>
    </Box>
  );
};
export default ErrorDisplay;
