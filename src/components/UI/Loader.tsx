import React from 'react';
import { CircularProgress, Box } from '@mui/material';

interface ILoaderProps {
  fullHeight?: boolean;
}

const Loader: React.FC<ILoaderProps> = ({ fullHeight = false }) => {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: fullHeight ? '100vh' : '100%',
    }}>
      <CircularProgress thickness={5} />
    </Box>
  );
};

export default Loader;