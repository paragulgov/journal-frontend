import { Box } from '@mui/material';
import React from 'react';
import Header from './Header';
import Navbar from './navbar/Navbar';
import SidebarComments from './sidebar-comments/SidebarComments';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Box sx={{ flex: '1 0 auto', display: 'flex' }}>
        <Navbar />
        <main>{children}</main>
        <SidebarComments />
      </Box>
    </>
  );
};

export default Layout;