import type { NextPage } from 'next';
import SEO from '../../src/components/SEO';
import Layout from '../../src/components/Layout';
import WriteNewScreen from '../../src/screens/write/WriteNewScreen';

const WriteNew: NextPage = () => {
  return (
    <Layout>
      <SEO title="Новая статья" />
      <WriteNewScreen />
    </Layout>
  );
};

export default WriteNew;
