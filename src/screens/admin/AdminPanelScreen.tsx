import React, { useState } from 'react';
import { Container, Tab, Tabs } from '@mui/material';
import TabPanel from '../../components/UI/TabPanel';
import ArticlesAccept from './components/ArticlesAccept';
import Categories from './components/Categories';
import { observer } from 'mobx-react-lite';
import { useRootStore } from '../../hooks/useRootStore';
import Moderators from './components/Moderators';

const AdminPanelScreen = observer(() => {
  const { userStore } = useRootStore();

  const [tabValue, setTabValue] = useState(0);

  const admin = userStore?.userInfo?.role === 'admin';
  const moderator = userStore?.userInfo?.role === 'moderator';

  // Handlers
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Renders
  return (
    <Container maxWidth="md">
      <Tabs value={tabValue} onChange={handleChange}>
        <Tab label="Статьи на одобрение" />
        <Tab label="Категории" />
        {admin && <Tab label="Модераторы" />}
      </Tabs>

      <TabPanel index={0} value={tabValue}>
        <ArticlesAccept />
      </TabPanel>
      <TabPanel index={1} value={tabValue}>
        <Categories />
      </TabPanel>
      {admin && (
        <TabPanel index={2} value={tabValue}>
          <Moderators />
        </TabPanel>
      )}
    </Container>
  );
});

export default AdminPanelScreen;
