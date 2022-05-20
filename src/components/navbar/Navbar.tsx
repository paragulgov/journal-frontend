import React from 'react';
import Image from 'next/image'
import NavbarLinkItem from './NavbarLinkItem';
import { Box, Stack } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListIcon from '@mui/icons-material/List';
import CheckIcon from '@mui/icons-material/Check';
import internet from "../../../public/assets/categories/icons/internet.webp";

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
          <NavbarLinkItem icon={<CheckIcon />}>Моя лента</NavbarLinkItem>
          <NavbarLinkItem icon={<BookmarkBorderIcon />}>Закладки</NavbarLinkItem>
          <NavbarLinkItem icon={<TrendingUpIcon />}>Рейтинг</NavbarLinkItem>
          <NavbarLinkItem icon={<ListIcon />}>Подписки</NavbarLinkItem>
        </Stack>

        <Stack spacing={1}>
          <NavbarLinkItem active icon={<Image src={internet} width={24} height={24} alt="Интернет" />}>Интернет</NavbarLinkItem>
          <NavbarLinkItem icon={<Image src={internet} width={24} height={24} alt="Технологии" />}>Технологии</NavbarLinkItem>
          <NavbarLinkItem icon={<Image src={internet} width={24} height={24} alt="Новости" />}>Новости</NavbarLinkItem>
          <NavbarLinkItem icon={<Image src={internet} width={24} height={24} alt="Разборы" />}>Разборы</NavbarLinkItem>
          <NavbarLinkItem icon={<Image src={internet} width={24} height={24} alt="Telegram" />}>Telegram</NavbarLinkItem>
          <NavbarLinkItem icon={<Image src={internet} width={24} height={24} alt="Промо" />}>Промо</NavbarLinkItem>
        </Stack>
      </Box>
    </Box>
  );
};

export default Navbar;