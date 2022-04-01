import { Box } from '@mui/material';
import React from 'react';
import Header from './Header';
import Navbar from './Navbar/Navbar';
import CommentsSidebar from './CommentsSidebar';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Box sx={{ flex: '1 0 auto', display: 'flex' }}>
        <Navbar />
        <main>{children}</main>
        <CommentsSidebar />
      </Box>
    </>
  );
};

export default Layout;