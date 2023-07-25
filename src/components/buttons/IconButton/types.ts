import type { ReactNode } from 'react';

export interface IIconButtonProps {
  text: string;
  onClick?: () => void;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  type?: 'submit' | 'button' | 'reset';
}
