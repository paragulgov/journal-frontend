import { Box } from '@mui/material';
import UserAvatarName from '../UserAvatarName';
import Link from 'next/link';
import React from 'react';
import { HoverTypography } from '../../styles/commonStyles';
import PostCardMenu from './PostCardMenu';

interface PostCardHeaderProps {
  user: string;
  date: string;
}

const PostCardHeader: React.FC<PostCardHeaderProps> = ({ user, date }) => {

  return (
    <Box display="flex" alignItems="center" mb={2}>
      <UserAvatarName name={user} />

      <Link href="/">
        <a>
          <HoverTypography sx={{ color: 'text.secondary', ml: 3 }}>
            {date}
          </HoverTypography>
        </a>
      </Link>

      <Box flexGrow={1} />

      <PostCardMenu />
    </Box>
  );
};

export default PostCardHeader;