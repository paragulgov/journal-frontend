import { Box } from '@mui/material';
import React from 'react';

const LeftColumn: React.FC = () => {
  return (
    <Box component="aside" sx={{
      width: 200,
      position: 'sticky',
      top: 60,
      height: 'calc(100vh - 60px)',
      flexShrink: 0,
    }}
    >
      Sidebar
    </Box>
  );
};

export default LeftColumn;