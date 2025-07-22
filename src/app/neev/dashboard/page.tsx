'use client';
/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   ____  ____   ___  
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| |  _ \|  _ \ / _ \ 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || |  | |_) | |_) | | | |
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |  |  __/|  _ <| |_| |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___| |_|   |_| \_\\___/ 
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI Dashboard PRO - v1.0.0
=========================================================

* Product Page: https://www.horizon-ui.com/pro/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import { Flex, Grid, useColorModeValue } from '@chakra-ui/react';
// Custom components
import DailyTraffic from 'components/admin/dashboards/default/DailyTraffic';
import MostVisitedTable from 'components/admin/dashboards/default/MostVisitedTable';
import OverallRevenue from 'components/admin/dashboards/default/OverallRevenue';
import ProjectStatus from 'components/admin/dashboards/default/ProjectStatus';
import PieCard from 'components/rtl/dashboard/PieCard';
import YourTransfers from 'components/admin/dashboards/default/YourTransfers';
import tableDataMostVisited from 'variables/dashboards/default/tableDataMostVisited';
import React from 'react';
import SystemUptime from './systemUptime';

export default function Page() {
  // Chakra Color Mode
  const paleGray = useColorModeValue('secondaryGray.400', 'whiteAlpha.100');
  return (
    <Flex
      direction={{ base: 'column', xl: 'row' }}
      pt={{ base: '130px', md: '80px', xl: '80px' }}
    >
      <Flex direction="column" width="stretch">
        <Grid
          gap="20px"
          gridTemplateColumns={{
            md: 'repeat(2, 1fr)',
            '2xl': 'repeat(3, 1fr)',
          }}
          gridTemplateRows={{
            md: 'repeat(2, 1fr)',
            '2xl': '1fr',
          }}
          mb="20px"
        >
          <Flex gridArea={{ md: '1 / 1 / 2 / 2', '2xl': '1 / 1 / 2 / 2' }}>
            <DailyTraffic />
          </Flex>
          <Flex gridArea={{ md: '1 / 2 / 2 / 3', '2xl': '1 / 2 / 2 / 3' }}>
            <ProjectStatus />
          </Flex>
          <Flex gridArea={{ md: ' 2 / 1 / 3 / 3', '2xl': '1 / 3 / 2 / 4' }}>
            <SystemUptime />
          </Flex>
        </Grid>
        <Grid
          mb="20px"
          gridTemplateColumns={{ base: 'repeat(2, 1fr)', '2xl': '720fr 350fr' }}
          gap="20px"
          display={{ base: 'block', lg: 'grid' }}
        >
          <Flex gridArea={{ base: '1 / 1 / 2 / 3', '3xl': '1 / 1 / 2 / 3' }}>
            <OverallRevenue />
          </Flex>
          <Flex gridArea={{ md: ' 2 / 1 / 3 / 3', '2xl': '1 / 3 / 2 / 4' }}>
            <PieCard />
          </Flex>
        </Grid>
        <Grid
          templateColumns={{ base: 'repeat(2, 1fr)', '2xl': '350fr 720fr' }}
          gap="20px"
          display={{ base: 'block', lg: 'grid' }}
        >
          <Flex gridArea={{ base: '1 / 1 / 2 / 3', '2xl': '1 / 1 / 2 / 2' }}>
            <YourTransfers />
          </Flex>
          <Flex gridArea={{ base: '2 / 1 / 3 / 3', '2xl': '1 / 2 / 2 / 3' }}>
            <MostVisitedTable tableData={tableDataMostVisited} />
          </Flex>
        </Grid>
      </Flex>
    </Flex>
  );
}
