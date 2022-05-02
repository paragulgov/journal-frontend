import React from 'react';
import { Box, Container } from '@mui/material';
import HeaderLeft from './HeaderLeft';
import HeaderAuth from './HeaderAuth';

const Header: React.FC = () => {
  return (
    <Box component="header" sx={{
      height: 60,
      backgroundColor: 'primary.dark',
    }}>
      <Container maxWidth={false} sx={{
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <HeaderLeft />

        <HeaderAuth />
      </Container>
    </Box>
  );
};

export default Header;