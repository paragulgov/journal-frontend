import { Box, Button, IconButton, Stack } from '@mui/material';
import React from 'react';
import Link from 'next/link';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import ShareIcon from '@mui/icons-material/Share';

const PostCardActions = () => {
  return (
    <Box>
      <Stack direction="row">
        <Button color="inherit" startIcon={<CommentIcon />}>
          <Link href="/">
            <a>
              254
            </a>
          </Link>
        </Button>

        {true ? (
          <IconButton>
            <FavoriteBorderIcon />
          </IconButton>
        ) : (
          <IconButton>
            <FavoriteIcon />
          </IconButton>
        )}

        {true ? (
          <IconButton>
            <BookmarkAddIcon />
          </IconButton>
        ) : (
          <IconButton>
            <BookmarkRemoveIcon />
          </IconButton>
        )}

        <IconButton>
          <ShareIcon />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default PostCardActions;