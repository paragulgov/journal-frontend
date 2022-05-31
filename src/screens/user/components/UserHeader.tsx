import React from 'react';
import { Box, Avatar, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useRootStore } from '../../../hooks/useRootStore';

const UserHeader = observer(() => {
  const { userStore } = useRootStore();

  // Renders
  return (
    <Box mb={2}>
      <Avatar variant="rounded" sx={{ width: 112, height: 112, fontSize: 48, mb: 3 }}>{userStore.userInfo?.username[0]}</Avatar>
      <Typography variant="h4">{userStore.userInfo?.username}</Typography>
    </Box>
  );
});

export default UserHeader;
