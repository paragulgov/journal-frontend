import { Box, Typography } from '@mui/material';
import UserAvatarName from '../UserAvatarName';
import React from 'react';
import PostCardMenu from './PostCardMenu';
import { IUserModel } from '../../modules/user/types/UserTypes';
import ArticleDate from '../ArticleDate';
import { ArticleStatus } from '../../types/types';

interface IPostCardHeaderProps {
  id: number;
  user: IUserModel;
  date: string;
  status?: ArticleStatus;
  rejected?: false;
  rejectedReason?: string;
}

const PostCardHeader: React.FC<IPostCardHeaderProps> = ({ id, user, date, status, rejectedReason, rejected }) => {

  return (
    <Box display="flex" alignItems="center" mb={2}>
      <UserAvatarName name={user.username} />

      <ArticleDate id={id} date={date} />

      {status && (
        <>
          <Box ml={3}>
            <Typography variant="overline">
              {!rejected && status === 'pending' && 'На модерации'}
              {rejected && `Отклонено по причине: ${rejectedReason}`}
            </Typography>
          </Box>
        </>
      )}

      <Box flexGrow={1} />


      <PostCardMenu userId={user.id} articleId={id} />
    </Box>
  );
};

export default PostCardHeader;