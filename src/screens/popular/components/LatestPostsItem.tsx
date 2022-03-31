import React from 'react';
import { Box, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import Link from 'next/link';

interface LatestPostItemProps {
  id: number;
  text: string;
  commentsCount: number;
}

const LatestPostItem: React.FC<LatestPostItemProps> = ({ id, text, commentsCount }) => {
  return (
    <Link href={`/`}>
      <a>
        <ListItemButton>
          <ListItemText>
            {text}
          </ListItemText>
          <ListItemIcon sx={{ display: 'flex', alignItems: 'center' }}>
            <ChatBubbleOutlineIcon fontSize="small" sx={{ mr: 1 }} />
            <Box component="span" sx={{ fontSize: 12 }}>{commentsCount}</Box>
          </ListItemIcon>
        </ListItemButton>
      </a>
    </Link>
  );
};

export default LatestPostItem;
