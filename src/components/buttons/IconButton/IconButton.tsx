import { Button } from '@mui/material';

import type { IIconButtonProps } from './types';
const IconButton = ({ text, onClick, startIcon, endIcon, type }: IIconButtonProps) => {
  return (
    <Button
      variant="contained"
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      type={type}
    >
      {text}
    </Button>
  );
};
export default IconButton;
