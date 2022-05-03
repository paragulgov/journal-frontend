import { Button, ButtonProps } from '@mui/material';
import React from 'react';

interface ITextButtonProps extends Omit<ButtonProps, 'variant'> {
}

const TextButton: React.FC<ITextButtonProps> = ({ children, ...rest }) => {
  return (
    <Button
      variant="text"
      disableRipple
      sx={{
        padding: 0,
        '&:hover': {
          color: 'secondary.main',
        },
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default TextButton;