import { ReactElement, useEffect, useState } from 'react';
import { Box, Stack, Tab, Tabs, Typography } from '@mui/material';
import { CreditCard, Lock, Notifications } from '@mui/icons-material';
import Head from 'next/head';
import { Header } from '../components/Header';

import { HomeContainer } from '../components/containers/Home';
import { WalletContainer } from '../components/containers/Wallet';
import { ExchangeContainer } from '../components/containers/Exchange';
import { useStore, useSelector } from 'react-redux';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number | null;
}

function a11yProps(index: number): any {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const TabPanel = ({
  children,
  value,
  index,
  ...other
}: TabPanelProps): ReactElement => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default function Home(): ReactElement {
  const [value, setValue] = useState<number | null>(null);

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: number,
  ): void => {
    setValue(newValue);
  };

  // ** Prevent hydration error for react 18
  useEffect(() => {
    setValue(0);
  }, []);

  return (
    <Stack width="100%">
      <Head>
        <title>Home</title>
        <meta name="description" content="Página inicial" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Box width="100%" maxWidth="1440px" mt={1} alignSelf="center">
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Home" icon={<CreditCard />} {...a11yProps(0)} />
            <Tab label="Wallets" icon={<Lock />} {...a11yProps(1)} />
            <Tab label="Cambio" icon={<Notifications />} {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <HomeContainer />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <WalletContainer />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ExchangeContainer />
        </TabPanel>
      </Box>
    </Stack>
  );
}
