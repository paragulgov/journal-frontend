import type { NextPage } from 'next';
import SEO from '../../src/components/SEO';
import Layout from '../../src/components/Layout';
import WriteScreen from '../../src/screens/write/WriteScreen';

const WriteEdit: NextPage = () => {
  return (
    <Layout>
      <SEO title="Редактирование статьи" />
      <WriteScreen />
    </Layout>
  );
};

export default WriteEdit;
