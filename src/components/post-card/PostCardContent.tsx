import { Box, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface PostCardContentProps {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

const PostCardContent: React.FC<PostCardContentProps> = ({ id, title, subtitle, image }) => {
  return (
    <Box mb={1}>
      <Link href={`/article/${id}`}>
        <a>
          <Typography component="h3" variant="h4" sx={{ mb: 1 }}>{title}</Typography>
          <Typography variant="subtitle1" mb={1}>
            {subtitle}
          </Typography>
          <Image src={image} width={800} height={300} alt="Изображение" />
        </a>
      </Link>
    </Box>
  );
};

export default PostCardContent;