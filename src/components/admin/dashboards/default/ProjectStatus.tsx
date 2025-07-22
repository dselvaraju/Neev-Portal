'use client';
// Chakra imports
import { Flex, Box, Icon, Text, useColorModeValue } from '@chakra-ui/react';
import LineChart from 'components/charts/LineChart';

// Custom components
import Card from 'components/card/Card';
import Menu from 'components/menu/MainMenu';
import IconBox from 'components/icons/IconBox';

import {
  lineChartDataProjectStatus,
  lineChartOptionsProjectStatus,
} from 'variables/charts';

// Assets
import { MdOutlineShoppingBasket } from 'react-icons/md';

export default function ProjectStatus(props: { [x: string]: any }) {
  const { ...rest } = props;

  const newOptions = {
    ...lineChartOptionsProjectStatus,
    colors: ['var(--chakra-colors-brand-500)', '#39B8FF'],
  };

  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const iconColor = useColorModeValue('brand.500', 'white');
  const iconBoxBg = useColorModeValue('secondaryGray.300', 'navy.700');
  return (
    <Card
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      w="100%"
      {...rest}
    >
      <Flex
        justify="space-between"
        px="10px"
        pt="5px"
        mb="20px"
        align="center"
        w="100%"
      >
        <Text
          color={textColor}
          fontSize="lg"
          fontWeight="700"
          lineHeight="100%"
        >
          Message Queue
        </Text>
        <Menu />
      </Flex>
      <Box minH="250px" mt="auto">
        <LineChart
          chartData={lineChartDataProjectStatus}
          chartOptions={newOptions}
        />
      </Box>
    </Card>
  );
}
