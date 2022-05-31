import React, { useState } from 'react';
import { Container, Tab, Tabs } from '@mui/material';
import UserHeader from './components/UserHeader';
import TabPanel from '../../components/UI/TabPanel';
import UserArticles from './components/UserArticles';
import UserComments from './components/UserComments';

const UserScreen = () => {
  const [tabValue, setTabValue] = useState(0);

  // Handlers
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Renders
  return (
    <Container maxWidth="md">
      <UserHeader />
      <Tabs value={tabValue} onChange={handleChange}>
        <Tab label="Статьи" />
        <Tab label="Комментарии" />
        <Tab label="Черновики" />
      </Tabs>

      <TabPanel index={0} value={tabValue}>
        <UserArticles />
      </TabPanel>
      <TabPanel index={1} value={tabValue}>
        <UserComments />
      </TabPanel>
    </Container>
  );
};

export default UserScreen;
