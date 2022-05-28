import React from 'react';
import Link from 'next/link';
import { HoverTypography } from '../styles/commonStyles';
import FormattedDate from './FormattedDate';

interface IArticleDateProps {
  id: number;
  date: string;
}

const ArticleDate: React.FC<IArticleDateProps> = ({ id, date }) => {
  return (
    <Link href={`/article/${id}`}>
      <a style={{ marginLeft: 24 }}>
        <HoverTypography sx={{ color: 'text.secondary' }}>
          <FormattedDate date={date} />
        </HoverTypography>
      </a>
    </Link>
  );
};

export default ArticleDate;