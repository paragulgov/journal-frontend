import type { NextPage } from 'next';
import SEO from '../../src/components/SEO';
import Layout from '../../src/components/Layout';
import ArticleScreen from '../../src/screens/article/ArticleScreen';

const Article: NextPage = () => {
  return (
    <Layout>
      <SEO title="Статья" />
      <ArticleScreen />
    </Layout>
  );
};

export default Article;
