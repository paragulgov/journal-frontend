import React, { useEffect } from 'react';
import { Container, Divider, Paper } from '@mui/material';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { observer } from 'mobx-react-lite';
import { useRootStore } from '../../hooks/useRootStore';
import Loader from '../../components/UI/Loader';
import ArticleFooter from './components/ArticleFooter';
import Comments from './components/Comments';

// @ts-ignore
const ArticleContent = dynamic(() => import('./components/ArticleContent').then(e => e.default), { ssr: false });

const ArticleScreen = observer(() => {
  const { articleStore } = useRootStore();

  const router = useRouter();
  const { id } = router.query;

  // Effects
  useEffect(() => {
    if (id) {
      articleStore.getOne(Number(id));
      articleStore.getComments(Number(id));
    }

    return () => {
      articleStore.resetStore();
    };
  }, [id]);

  useEffect(() => {
    if (articleStore.article) {
      articleStore.checkLikeDislike();
    }
  }, [articleStore.article]);

  // Renders
  if (articleStore.loading) {
    return <Loader />;
  }

  return (
    <Container maxWidth="md">
      <Paper sx={{ color: '#fff', padding: 5, borderRadius: 2, mb: 2 }}>
        <ArticleContent blocks={articleStore.article?.content || []} />
        <Divider />
        <ArticleFooter id={Number(id)} />
        <Divider />
        <Comments />
      </Paper>
    </Container>
  );
});

export default ArticleScreen;
