import React from 'react';
import { Stack } from '@mui/material';
import UserAvatarName from '../../../components/UserAvatarName';
import ArticleDate from '../../../components/ArticleDate';

interface IArticleFooterProps {
  id: number;
  name: string;
  date: string;
}

const ArticleFooter: React.FC<IArticleFooterProps> = ({ id, name, date }) => {
  return (
    <Stack direction="row" alignItems="center" padding={5}>
      <UserAvatarName name={name} />
      <ArticleDate id={id} date={date} />
    </Stack>
  );
};

export default ArticleFooter;
