import React from 'react';
import Link from 'next/link';
import { Button } from '@mui/material';

interface INavbarItemProps {
  active?: boolean;
  icon?: React.ReactNode;
}

const NavbarLinkItem: React.FC<INavbarItemProps> = (props) => {
  const { children, active = false, icon } = props;

  return (
    <Link href="/">
      <a>
        <Button
          size="large"
          variant={active ? 'contained' : 'text'}
          startIcon={icon}
          fullWidth
          sx={{ justifyContent: 'flex-start', pl: 1.5, pr: 1.5 }}
        >
          {children}
        </Button>
      </a>
    </Link>
  );
};

export default NavbarLinkItem;