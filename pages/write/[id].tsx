import type { NextPage } from 'next';
import SEO from '../../src/components/SEO';
import Layout from '../../src/components/Layout';
import WriteEditScreen from '../../src/screens/write/WriteEditScreen';

const WriteEdit: NextPage = () => {
  return (
    <Layout>
      <SEO title="Редактирование статьи" />
      <WriteEditScreen />
    </Layout>
  );
};

export default WriteEdit;
