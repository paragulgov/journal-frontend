import React from 'react';
import { Box, Avatar, Typography } from '@mui/material';
import Link from 'next/link';
import { muiStringToColor } from '../helpers/muiStringToColor';

interface UserAvatarNameProps {
  name: string;
}

const UserAvatarName: React.FC<UserAvatarNameProps> = ({ name }) => {
  return (
    <Link href="">
      <a>
        <Box
          display="flex"
          alignItems="center"
          sx={(theme) => ({
            '&:hover': {
              color: 'secondary.main',
            },
            transition: theme.transitions.create(['color'], {
              duration: theme.transitions.duration.standard,
            }),
          })}
        >
          <Box mr={1}>
            <Avatar
              sx={{
                bgcolor: muiStringToColor(name),
              }}
            >
              {name.slice(0, 1)}
            </Avatar>
          </Box>
          <Typography>{name}</Typography>
        </Box>
      </a>
    </Link>
  );
};

export default UserAvatarName;