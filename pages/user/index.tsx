import type { NextPage } from 'next';
import SEO from '../../src/components/SEO';
import Layout from '../../src/components/Layout';
import UserScreen from '../../src/screens/user/UserScreen';

const User: NextPage = () => {
  return (
    <Layout>
      <SEO title="Профиль" />
      <UserScreen />
    </Layout>
  );
};

export default User;
