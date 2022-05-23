import type { NextPage } from 'next';
import SEO from '../../src/components/SEO';
import Layout from '../../src/components/Layout';
import WriteScreen from '../../src/screens/write/WriteScreen';

const WriteNew: NextPage = () => {
  return (
    <Layout>
      <SEO title="Новая статья" />
      <WriteScreen />
    </Layout>
  );
};

export default WriteNew;
