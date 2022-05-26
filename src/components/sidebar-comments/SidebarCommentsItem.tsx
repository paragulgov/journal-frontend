import React from 'react';
import { Box } from '@mui/material';
import UserAvatarName from '../UserAvatarName';
import Link from 'next/link';
import { HoverTypography } from '../../styles/commonStyles';

interface ICommentsItemProps {
  user: string;
  post: string;
  comment: string;
}

const SidebarCommentsItem: React.FC<ICommentsItemProps> = ({ user, comment, post }) => {
  return (
    <Box>
      <Box mb={1}>
        <UserAvatarName name={user} />
      </Box>
      <Link href="/">
        <a>
          <HoverTypography sx={{ color: 'text.secondary', mb: 1 }}>
            {comment}
          </HoverTypography>
        </a>
      </Link>
      <Link href="/">
        <a>
          <HoverTypography fontWeight={700} fontSize={12}>
            {post}
          </HoverTypography>
        </a>
      </Link>
    </Box>
  );
};

export default SidebarCommentsItem;