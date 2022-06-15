import React from 'react';
import { Avatar, Box, IconButton, Menu, Typography } from '@mui/material';
// import Image from 'next/image';
import DescriptionIcon from '@mui/icons-material/Description';
// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import HeaderMenuLink from './HeaderMenuLink';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { observer } from 'mobx-react-lite';
import { useRootStore } from '../../hooks/useRootStore';

const HeaderAuth: React.FC = observer(() => {
  const { userStore, authStore } = useRootStore();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const adminPanel = userStore?.userInfo?.role === 'admin' || userStore?.userInfo?.role === 'moderator';

  // Handlers
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    authStore.logout();
  };

  // Renders
  return (
    <Box display="flex" alignItems="center">
      <IconButton onClick={handleClick} disableRipple>
        {/*<Image*/}
        {/*  style={{ borderRadius: 8 }}*/}
        {/*  src="/assets/categories/icons/internet.webp"*/}
        {/*  width={40}*/}
        {/*  height={40}*/}
        {/*  alt="Аватарка"*/}
        {/*/>*/}
        <Avatar>{userStore?.userInfo?.username[0]}</Avatar>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Typography sx={{ color: 'text.secondary', px: 1.5, my: 1 }}>Профиль</Typography>

        <HeaderMenuLink
          href="/user" text="Мой профиль"
          icon={
            // <Image
            //   style={{ borderRadius: 6 }}
            //   src="/assets/categories/icons/internet.webp"
            //   width={20}
            //   height={20} alt="Аватарка"
            // />
            <Avatar sx={{ width: 24, height: 24, fontSize: 12 }}>{userStore?.userInfo?.username[0]}</Avatar>
          }
        />
        {adminPanel && <HeaderMenuLink href="/admin" text="Админ панель" icon={<DescriptionIcon fontSize="small" />} />}
        {/*<HeaderMenuLink href="/" text="Закладки" icon={<BookmarkBorderIcon fontSize="small" />} />*/}
        <HeaderMenuLink onClick={handleLogout} href="/" text="Выйти" icon={<ExitToAppIcon fontSize="small" />} />

      </Menu>
    </Box>
  );
});

export default HeaderAuth;