import React, { useEffect, useState } from 'react';
import { Card, Stack, Typography } from '@mui/material';
import { instance } from '../../../axios/instance';
import { ICommentModel } from '../../../modules/article/types/ArticleTypes';
import FormattedDate from '../../../components/FormattedDate';

const UserComments = () => {
  const [comments, setComments] = useState<ICommentModel[]>([]);

  // Effects
  useEffect(() => {
    instance.get<ICommentModel[]>('comments/user')
      .then(res => {
        setComments(res.data);
      });
  }, []);

  // Renders
  return (
    <Stack spacing={6}>
      {comments.map(comment => {
        return (
          <Card key={comment.id} sx={{ p: 2 }}>
            <Typography variant="h5" color="text.secondary">{comment?.article?.title}</Typography>
            <Typography>{comment.text}</Typography>
            <Typography variant="caption">
              <FormattedDate date={comment.createdAt} />
            </Typography>
          </Card>
        );
      })}
    </Stack>
  );
};

export default UserComments;
