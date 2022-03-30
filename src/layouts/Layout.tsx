import { Box } from '@mui/material';
import React from 'react';
import Header from '../components/Header';
import LeftColumn from '../components/LeftColumn';
import RightColumn from '../components/RightColumn';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Box sx={{ flex: '1 0 auto', display: 'flex' }}>
        <LeftColumn />
        <main>{children}</main>
        <RightColumn />
      </Box>
    </>
  );
};

export default Layout;