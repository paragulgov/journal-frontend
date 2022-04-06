import { Box } from '@mui/material';
import UserAvatarName from '../UserAvatarName';
import Link from 'next/link';
import React from 'react';
import { HoverTypography } from '../../styles/commonStyles';

const PostCardHeader = () => {
  return (
    <Box display="flex" alignItems="center" mb={2}>
      <UserAvatarName name="Лентач" />

      <Link href="/">
        <a>
          <HoverTypography sx={{ color: 'text.secondary', ml: 3 }}>
            3 часа
          </HoverTypography>
        </a>
      </Link>
    </Box>
  );
};

export default PostCardHeader;