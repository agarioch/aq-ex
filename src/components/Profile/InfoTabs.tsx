import React, { useState } from 'react';
import styled from '@emotion/styled';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import { Company } from '../../types/Company';
import About from './About';
import ContactList from './ContactList';

type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
};

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 1 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const InfoTabs = ({ member }: { member: Company }) => {
  const [value, setValue] = useState(0);
  // Mock storing favourite
  const [isFavourite, setIsFavourite] = useState(false);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <DetailsWrapper>
      <Header>
        <Typography variant="h1">{member.name}</Typography>
        <IconButton onClick={() => setIsFavourite(!isFavourite)}>
          <Icon
            baseClassName="fa"
            className={'fa-heart'}
            color={isFavourite ? 'error' : undefined}
          />
        </IconButton>
      </Header>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label={`${member.name} information`}
      >
        <Tab label="About" {...a11yProps(0)} />
        <Tab label="Contact" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <TabContentWrapper>
          <About description={member.description} />
        </TabContentWrapper>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TabContentWrapper>
          <ContactList contacts={member.contacts} />
        </TabContentWrapper>
      </TabPanel>
    </DetailsWrapper>
  );
};

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TabContentWrapper = styled.div`
  max-height: 220px;
  overflow-y: auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default InfoTabs;
