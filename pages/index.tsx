import type { NextPage } from 'next';
import Layout from '../src/components/Layout';
import SEO from '../src/components/SEO';
import PopularScreen from '../src/screens/popular/PopularScreen';

const Home: NextPage = () => {
  return (
    <Layout>
      <SEO title="Главная" />
      <PopularScreen />
    </Layout>
  );
};

export default Home;
