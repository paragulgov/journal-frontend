import { Box, Button, IconButton, Stack } from '@mui/material';
import React from 'react';
import Link from 'next/link';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';

interface IPostCardActionsProps {
  commentsCount: number
}

const PostCardActions: React.FC<IPostCardActionsProps> = ({commentsCount}) => {
  return (
    <Box>
      <Stack direction="row" spacing={1}>
        <Button color="inherit" startIcon={<CommentIcon />}>
          <Link href="/">
            <a>
              {commentsCount}
            </a>
          </Link>
        </Button>

        <IconButton>
          <ShareIcon />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default PostCardActions;