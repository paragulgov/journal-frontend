import React from 'react';
import { Box, Typography } from '@mui/material';
import UserAvatarName from '../UserAvatarName';
import Link from 'next/link';

interface CommentsItemProps {
  user: string;
  post: string;
  comment: string;
}

const SidebarCommentsItem: React.FC<CommentsItemProps> = ({ user, comment, post }) => {
  return (
    <Box>
      <Box mb={1}>
        <UserAvatarName name={user} />
      </Box>
      <Link href="/">
        <a>
          <Typography
            sx={[
              { color: 'text.secondary', mb: 1 },
              (theme) => ({
                '&:hover': {
                  color: 'secondary.main',
                },
                transition: theme.transitions.create(['color'], {
                  duration: theme.transitions.duration.standard,
                }),
              }),
            ]}
          >
            {comment}
          </Typography>
        </a>
      </Link>
      <Link href="/">
        <a>
          <Typography
            fontWeight={700}
            fontSize={12}
            sx={(theme) => ({
              '&:hover': {
                color: 'secondary.main',
              },
              transition: theme.transitions.create(['color'], {
                duration: theme.transitions.duration.standard,
              }),
            })}
          >
            {post}
          </Typography>
        </a>
      </Link>
    </Box>
  );
};

export default SidebarCommentsItem;