import type { NextPage } from 'next';
import SEO from '../../src/components/SEO';
import Layout from '../../src/components/Layout';
import AdminPanelScreen from '../../src/screens/admin/AdminPanelScreen';

const Admin: NextPage = () => {
  return (
    <Layout>
      <SEO title="Админ панель" />
      <AdminPanelScreen />
    </Layout>
  );
};

export default Admin;
