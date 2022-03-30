import type { NextPage } from 'next';
import Layout from '../src/layouts/Layout';
import SEO from '../src/components/SEO';
import MainScreen from '../src/screens/main/MainScreen';

const Home: NextPage = () => {
  return (
    <Layout>
      <SEO title="Главная" />
      <MainScreen />
    </Layout>
  );
};

export default Home;
