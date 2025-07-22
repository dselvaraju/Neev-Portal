'use client';

import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import { AdministrationDestination } from './destination';
import { AdministrationRules } from './rules';
import { AdministrationScripts } from './scripts';
import { AdministrationSource } from './source';

export default function Page() {
  return (
    <Flex direction="column" pt={{ sm: '150px', lg: '100px' }}>
      <Tabs variant="soft-rounded" colorScheme="brandTabs">
        <TabList
          mx={{ base: '10px', lg: '30px' }}
          overflowX={{ sm: 'scroll', lg: 'unset' }}
        >
          <Flex justify={{ base: 'start', md: 'center' }} w="100%">
            {/* TODO: increate the tab and text font size */}
            <Tab>Source</Tab>
            <Tab>Destination</Tab>
            <Tab>Rules</Tab>
            <Tab>Scripts</Tab>
          </Flex>
        </TabList>
        <TabPanels>
          <TabPanel>
            <AdministrationSource />
          </TabPanel>
          <TabPanel>
            <AdministrationDestination />
          </TabPanel>
          <TabPanel>
            <AdministrationRules />
          </TabPanel>
          <TabPanel>
            <AdministrationScripts />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}
