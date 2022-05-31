import React from 'react';
import { Box } from '@mui/material';

interface ITabPanelProps {
  index: number;
  value: number;
}

const TabPanel: React.FC<ITabPanelProps> = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

export default TabPanel;