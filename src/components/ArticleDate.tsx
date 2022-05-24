import React from 'react';
import Link from 'next/link';
import { HoverTypography } from '../styles/commonStyles';

interface IArticleDateProps {
  id: number;
  date: string;
}

const ArticleDate: React.FC<IArticleDateProps> = ({ id, date }) => {
  return (
    <Link href={`/article/${id}`}>
      <a>
        <HoverTypography sx={{ color: 'text.secondary', ml: 3 }}>
          {date}
        </HoverTypography>
      </a>
    </Link>
  );
};

export default ArticleDate;