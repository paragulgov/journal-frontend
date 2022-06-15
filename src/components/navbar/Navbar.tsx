import React from 'react';
import NavbarLinkItem from './NavbarLinkItem';
import { Box, Stack } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

const Navbar: React.FC = () => {
  return (
    <Box component="aside"
         sx={{
           width: 200,
           position: 'sticky',
           top: 0,
           height: 'calc(100vh - 60px)',
           flexShrink: 0,
           marginTop: -2
         }}
    >
      <Box component="nav" sx={{ m: 2 }}>
        <Stack spacing={1} mb={4}>
          <NavbarLinkItem active icon={<LocalFireDepartmentIcon />}>Популярное</NavbarLinkItem>
          <NavbarLinkItem icon={<AccessTimeIcon />}>Свежее</NavbarLinkItem>
          {/*<NavbarLinkItem icon={<CheckIcon />}>Моя лента</NavbarLinkItem>*/}
          {/*<NavbarLinkItem icon={<BookmarkBorderIcon />}>Закладки</NavbarLinkItem>*/}
          {/*<NavbarLinkItem icon={<TrendingUpIcon />}>Рейтинг</NavbarLinkItem>*/}
          {/*<NavbarLinkItem icon={<ListIcon />}>Подписки</NavbarLinkItem>*/}
        </Stack>

        <Stack spacing={1}>
          <NavbarLinkItem>Интернет</NavbarLinkItem>
          <NavbarLinkItem>Технологии</NavbarLinkItem>
          <NavbarLinkItem>Новости</NavbarLinkItem>
          <NavbarLinkItem>Разборы</NavbarLinkItem>
          <NavbarLinkItem>Telegram</NavbarLinkItem>
          <NavbarLinkItem>Промо</NavbarLinkItem>
        </Stack>
      </Box>
    </Box>
  );
};

export default Navbar;