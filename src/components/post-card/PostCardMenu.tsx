import { IconButton, Menu, MenuItem } from '@mui/material';
import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

interface PostCardMenuProps {
}

const PostCardMenu: React.FC<PostCardMenuProps> = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
        <MenuItem onClick={handleClose}>Пожаловаться</MenuItem>
        <MenuItem onClick={handleClose}>Удалить</MenuItem>
      </Menu>
    </>
  );
};

export default PostCardMenu;