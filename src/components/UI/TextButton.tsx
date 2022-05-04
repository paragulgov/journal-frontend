import { Button, ButtonProps } from '@mui/material';
import React from 'react';

interface ITextButtonProps extends Omit<ButtonProps, 'variant'> {
}

const TextButton: React.FC<ITextButtonProps> = ({ children, sx, ...rest }) => {
  return (
    <Button
      variant="text"
      disableRipple
      sx={{
        padding: 0,
        '&:hover': {
          color: 'secondary.main',
        },
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default TextButton;