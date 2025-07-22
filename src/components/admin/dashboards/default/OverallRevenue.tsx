// Chakra imports
import {
  Flex,
  Box,
  Icon,
  Select,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import LineChart from 'components/charts/LineChart';

// Custom components
import Card from 'components/card/Card';
import {
  lineChartDataOverallRevenue,
  lineChartOptionsOverallRevenue,
} from 'variables/charts';

// Assets
import { RiArrowUpSFill } from 'react-icons/ri';

export default function OverallRevenue(props: { [x: string]: any }) {
  const { ...rest } = props;
  //eslint-disable-next-line

  const newOptions = {
    ...lineChartOptionsOverallRevenue,
    // colors: ['var(--chakra-colors-brand-500)', '#39B8FF'],
  };

  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  return (
    <Card
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      w="100%"
      mb={{ base: '20px', lg: '0px' }}
      {...rest}
    >
      <Flex justify="space-between" px="20px" pt="5px" w="100%">
        <Flex align="center" w="100%">
          <Flex flexDirection="column" me="20px">
            <Text
              color={textColor}
              fontSize="lg"
              fontWeight="700"
              mb="10px"
              mx="auto"
            >
              Message Throughput
            </Text>
          </Flex>
        </Flex>
        <Select
          fontSize="sm"
          variant="subtle"
          defaultValue="monthly"
          width="unset"
          fontWeight="700"
        >
          <option value="daily">Daily</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </Select>
      </Flex>
      <Box minH="260px" mt="auto" w="100%">
        <LineChart
          chartData={lineChartDataOverallRevenue}
          chartOptions={newOptions}
        />
      </Box>
    </Card>
  );
}
