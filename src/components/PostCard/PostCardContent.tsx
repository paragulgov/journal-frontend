import { Box, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PostCardContent = () => {
  return (
    <Box mb={1}>
      <Link href="/">
        <a>
          <Typography component="h3" variant="h4" sx={{mb: 1}}>Заголовок статьи</Typography>
          <Typography variant="subtitle1" mb={1}>
            Вступительный текст статьи. Сервисы Ситимобил и Яндекс.Такси являются сервисами такси
            как бы странно это не звучало
          </Typography>
          <Image src="https://via.placeholder.com/1280x720" width={800} height={300} alt="Изображение"/>
        </a>
      </Link>
    </Box>
  );
};

export default PostCardContent;