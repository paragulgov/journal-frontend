import React from 'react';
import { IconButton, Menu } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

interface IActionMenuProps {
}

const ActionMenu: React.FC<IActionMenuProps> = ({children}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  // Handlers
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Renders
  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreHorizIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {children}
      </Menu>
    </>
  );
};

export default ActionMenu;