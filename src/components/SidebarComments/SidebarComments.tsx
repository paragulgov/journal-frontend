import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import SidebarCommentsItem from './SidebarCommentsItem';
import { sidebarComments } from '../../data/mockSidebarComments';

const SidebarComments: React.FC = () => {
  return (
    <Box component="aside" sx={{
      width: 300,
      position: 'sticky',
      top: 60,
      height: 'calc(100vh - 60px)',
      flexShrink: 0,
    }}
    >
      <Box sx={{ m: 2 }}>
        <Typography component="h5" variant="caption" mb={4} fontSize={18}>Комментарии</Typography>

        <Stack spacing={3}>
          {sidebarComments.slice(0, 4).map(({ id, comment, user, post }) => {
            return (
              <SidebarCommentsItem key={id} user={user} comment={comment} post={post} />
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
};

export default SidebarComments;