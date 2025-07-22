'use client';
// Chakra imports
import { Box, Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react';
import BarChart from 'components/charts/BarChart';
import Menu from 'components/menu/MainMenu';

// Custom components
import Card from 'components/card/Card';
import {
  barChartDataDailyTraffic,
  barChartOptionsDailyTraffic,
} from 'variables/charts';

// Assets
import { RiArrowUpSFill } from 'react-icons/ri';

export default function DailyTraffic(props: { [x: string]: any }) {
  const { ...rest } = props;
  //eslint-disable-next-line

  const newOptions = {
    ...barChartOptionsDailyTraffic,
    fill: {
      ...barChartOptionsDailyTraffic.fill,
      gradient: {
        type: 'vertical',
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        colorStops: [
          [
            {
              offset: 0,
              color: 'var(--chakra-colors-brand-500)',
              opacity: 1,
            },
            {
              offset: 100,
              color: 'white',
              opacity: 0.28,
            },
          ],
        ],
      },
    },
  };

  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  return (
    <Card alignItems="center" flexDirection="column" w="100%" {...rest}>
      <Flex justify="space-between" align="start" px="10px" pt="5px" w="100%">
        <Flex flexDirection="column" align="start" me="20px">
          <Flex w="100%">
            <Text
              color={textColor}
              fontSize="lg"
              fontWeight="700"
              mb="10px"
              mx="auto"
            >
              Site Traffic
            </Text>
          </Flex>
        </Flex>
        <Flex align="center">
          <Menu menuItems={['Site A', 'Site B', 'Site C', 'Site D']} />
        </Flex>
      </Flex>
      <Box h="240px" mt="auto">
        <BarChart
          chartData={barChartDataDailyTraffic}
          chartOptions={newOptions}
        />
      </Box>
    </Card>
  );
}
