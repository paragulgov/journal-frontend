import React from 'react';
import { ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import Link from 'next/link';

interface HeaderMenuLinkProps {
  href: string;
  text: string;
  icon: React.ReactNode;
}

const HeaderMenuLink: React.FC<HeaderMenuLinkProps> = ({ href, text, icon }) => {
  return (
    <MenuItem>
      <Link href={href}>
        <a style={{ display: 'flex', alignItems: 'center' }}>
          <ListItemIcon sx={{ minWidth: '28px !important' }}>
            {icon}
          </ListItemIcon>
          <ListItemText>{text}</ListItemText>
        </a>
      </Link>
    </MenuItem>

  );
};

export default HeaderMenuLink;