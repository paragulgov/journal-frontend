import React from 'react';
import { Box, Stack } from '@mui/material';
import NavbarLinkItem from './NavbarLinkItem';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListIcon from '@mui/icons-material/List';
import CheckIcon from '@mui/icons-material/Check';

const Navbar: React.FC = () => {
  return (
    <Box component="aside"
         sx={{
           width: 200,
           position: 'sticky',
           top: 60,
           height: 'calc(100vh - 60px)',
           flexShrink: 0,
         }}
    >
      <Box component="nav" sx={{ m: 2 }}>
        <Stack spacing={1}>
          <NavbarLinkItem active icon={<LocalFireDepartmentIcon fontSize="large" />}>Популярное</NavbarLinkItem>
          <NavbarLinkItem icon={<AccessTimeIcon />}>Свежее</NavbarLinkItem>
          <NavbarLinkItem icon={<CheckIcon />}>Моя лента</NavbarLinkItem>
          <NavbarLinkItem icon={<BookmarkBorderIcon />}>Закладки</NavbarLinkItem>
          <NavbarLinkItem icon={<TrendingUpIcon />}>Рейтинг</NavbarLinkItem>
          <NavbarLinkItem icon={<ListIcon />}>Подписки</NavbarLinkItem>
        </Stack>
      </Box>
    </Box>
  );
};

export default Navbar;