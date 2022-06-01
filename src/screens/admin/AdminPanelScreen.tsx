import React, { useState } from 'react';
import { Container, Tab, Tabs } from '@mui/material';
import TabPanel from '../../components/UI/TabPanel';
import ArticlesAccept from './components/ArticlesAccept';

const AdminPanelScreen = () => {
  const [tabValue, setTabValue] = useState(0);

  // Handlers
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Renders
  return (
    <Container maxWidth="md">
      <Tabs value={tabValue} onChange={handleChange}>
        <Tab label="Статьи на одобрение" />
        <Tab label="Лошпедство" />
        <Tab label="Лохи и лошары" />
      </Tabs>

      <TabPanel index={0} value={tabValue}>
        <ArticlesAccept />
      </TabPanel>
      <TabPanel index={1} value={tabValue}>
        Молчать мне тут!
      </TabPanel>
      <TabPanel index={2} value={tabValue}>
        Сюда его
      </TabPanel>
    </Container>
  );
};

export default AdminPanelScreen;
