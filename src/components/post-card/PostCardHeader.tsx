import { Box } from '@mui/material';
import UserAvatarName from '../UserAvatarName';
import React from 'react';
import PostCardMenu from './PostCardMenu';
import { IUserModel } from '../../modules/user/types/UserTypes';
import ArticleDate from '../ArticleDate';

interface IPostCardHeaderProps {
  id: number;
  user: IUserModel;
  date: string;
}

const PostCardHeader: React.FC<IPostCardHeaderProps> = ({ id, user, date }) => {

  return (
    <Box display="flex" alignItems="center" mb={2}>
      <UserAvatarName name={user.username} />

      <ArticleDate id={id} date={date} />

      <Box flexGrow={1} />

      <PostCardMenu />
    </Box>
  );
};

export default PostCardHeader;