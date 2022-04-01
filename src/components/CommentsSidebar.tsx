import React from 'react';
import { Box } from '@mui/material';

const CommentsSidebar: React.FC = () => {
  return (
    <Box component="aside" sx={{
      width: 200,
      position: 'sticky',
      top: 60,
      height: 'calc(100vh - 60px)',
      flexShrink: 0,
    }}
    >
      Comments
    </Box>
  )
}

export default CommentsSidebar;