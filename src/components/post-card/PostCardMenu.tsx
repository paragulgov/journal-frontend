import React from 'react';
import { MenuItem } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useRootStore } from '../../hooks/useRootStore';
import Link from 'next/link';
import ActionMenu from '../UI/ActionMenu';

interface PostCardMenuProps {
  userId: number;
  articleId: number;
}

const PostCardMenu: React.FC<PostCardMenuProps> = observer(({ userId, articleId }) => {
  const { userStore } = useRootStore();

  const isMyArticle = userStore.userInfo?.id === userId;

  // Renders
  return (
      <ActionMenu>
        {isMyArticle &&
          (
            <Link href={'/write/' + articleId}>
              <a>
                <MenuItem>
                  Изменить
                </MenuItem>
              </a>
            </Link>
          )}
        {isMyArticle && <MenuItem>Удалить</MenuItem>}
        {!isMyArticle && <MenuItem>Пожаловаться</MenuItem>}
      </ActionMenu>
  );
});

export default PostCardMenu;