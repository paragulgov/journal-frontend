import React from 'react';
import { Box, Stack } from '@mui/material';
import CommentCard from './CommentCard';

const CommentsItem = () => {
  return (
    <Box>
      <CommentCard />
      <Box ml={5} mt={3}>
        <Stack spacing={3}>
          {[...new Array(2)].map((_, index) => {
            return (
              <CommentCard key={index} />
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
};

export default CommentsItem;