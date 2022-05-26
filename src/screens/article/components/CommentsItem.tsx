import React from 'react';
import { Box } from '@mui/material';
import CommentCard from './CommentCard';
import { ICommentModel } from '../../../modules/article/types/ArticleTypes';

interface ICommentsItemProps {
  comment: ICommentModel;
}

const CommentsItem: React.FC<ICommentsItemProps> = ({ comment }) => {
  return (
    <Box>
      <CommentCard user={comment.user} text={comment.text} createdAt={comment.createdAt} />

      {/*TODO: Replies*/}
      {/*<Box ml={5} mt={3}>*/}
      {/*  <Stack spacing={3}>*/}
      {/*    {[...new Array(2)].map((_, index) => {*/}
      {/*      return (*/}
      {/*        <CommentCard key={index} />*/}
      {/*      );*/}
      {/*    })}*/}
      {/*  </Stack>*/}
      {/*</Box>*/}
    </Box>
  );
};

export default CommentsItem;