import React from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { observer } from 'mobx-react-lite';
import { useRootStore } from '../../hooks/useRootStore';
import Link from 'next/link';

interface PostCardMenuProps {
  userId: number;
  articleId: number;
}

const PostCardMenu: React.FC<PostCardMenuProps> = observer(({ userId, articleId }) => {
  const { userStore } = useRootStore();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const isMyArticle = userStore.userInfo?.id === userId;

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
        {isMyArticle &&
          (
            <MenuItem onClick={handleClose}>
              <Link href={'/write/' + articleId}>
                <a>Изменить</a>
              </Link>
            </MenuItem>
          )}
        {isMyArticle && <MenuItem onClick={handleClose}>Удалить</MenuItem>}
        {!isMyArticle && <MenuItem onClick={handleClose}>Пожаловаться</MenuItem>}
      </Menu>
    </>
  );
});

export default PostCardMenu;