import React from 'react';
import { CircularProgress, Box } from '@mui/material';

interface ILoaderProps {
  fullHeight?: boolean;
}

const Loader: React.FC<ILoaderProps> = ({ fullHeight = false }) => {
  const renderApp = () => {
    return <CircularProgress />;
  };

  return (
    <Box sx={fullHeight ? { display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' } : {}}>
      {renderApp()}
    </Box>
  );
};

export default Loader;