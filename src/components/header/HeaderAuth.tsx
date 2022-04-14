import React from 'react';
import { Box, IconButton, Menu, Typography } from '@mui/material';
import Image from 'next/image';
import DescriptionIcon from '@mui/icons-material/Description';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import HeaderMenuLink from './HeaderMenuLink';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const HeaderAuth: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box display="flex" alignItems="center">
      <IconButton onClick={handleClick} disableRipple>
        <Image style={{ borderRadius: 8 }} src="/assets/categories/icons/internet.webp" width={40} height={40}
               alt="Аватарка" />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Typography sx={{ color: 'text.secondary', px: 1.5, my: 1 }}>Профиль</Typography>

        <HeaderMenuLink
          href="/" text="Мой профиль"
          icon={
            <Image
              style={{ borderRadius: 6 }}
              src="/assets/categories/icons/internet.webp"
              width={20}
              height={20} alt="Аватарка"
            />
          }
        />
        <HeaderMenuLink href="/" text="Черновики" icon={<DescriptionIcon fontSize="small" />} />
        <HeaderMenuLink href="/" text="Закладки" icon={<BookmarkBorderIcon fontSize="small" />} />
        <HeaderMenuLink href="/" text="Выйти" icon={<ExitToAppIcon fontSize="small" />} />

      </Menu>
    </Box>
  );
};

export default HeaderAuth;