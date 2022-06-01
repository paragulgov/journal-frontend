import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import Link from 'next/link';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import VisibilityIcon from '@mui/icons-material/Visibility';

interface IPostCardActionsProps {
  commentsCount: number;
  views: number;
}

const PostCardActions: React.FC<IPostCardActionsProps> = ({ commentsCount, views }) => {
  return (
    <Box>
      <Stack direction="row" spacing={2} alignItems="center">
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

        <Box flexGrow={1} />

        <Box display="flex" alignItems="center">
          <VisibilityIcon sx={{ mr: 1 }} />
          <Typography>
            {views}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default PostCardActions;