// Chakra imports
import { Box, Flex, Text, Select, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
import PieChart from 'components/charts/PieChart';
import { pieChartData, pieChartOptions } from 'variables/charts';
import { VSeparator } from 'components/separator/Separator';

export default function Conversion(props: { [x: string]: any }) {
  const { ...rest } = props;

  const newOptions = {
    ...pieChartOptions,
    colors: ['var(--chakra-colors-brand-500)', '#6AD2FF', '#EFF4FB'],
    fill: { colors: ['var(--chakra-colors-brand-500)', '#6AD2FF', '#EFF4FB'] },
  };

  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const cardColor = useColorModeValue('white', 'navy.700');
  const cardShadow = useColorModeValue(
    '0px 18px 40px rgba(112, 144, 176, 0.12)',
    'unset',
  );
  return (
    <Card
      p="20px"
      alignItems="center"
      flexDirection="column"
      w="100%"
      {...rest}
    >
      <Flex
        px={{ base: '0px', '2xl': '10px' }}
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        mb="8px"
      >
        <Text color={textColor} fontSize="md" fontWeight="600" mt="4px">
          Message Type
        </Text>
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

      <PieChart
        h="100%"
        w="100%"
        chartData={pieChartData}
        chartOptions={newOptions}
      />
      <Card
        bg={cardColor}
        flexDirection="row"
        boxShadow={cardShadow}
        w="100%"
        p="15px"
        px="20px"
        mt="15px"
        mx="auto"
      >
        <Flex direction="column" py="5px">
          <Flex align="center">
            <Box h="8px" w="8px" bg="brand.500" borderRadius="50%" me="4px" />
            <Text
              fontSize="xs"
              color="secondaryGray.600"
              fontWeight="700"
              mb="5px"
            >
              HL7
            </Text>
          </Flex>
          <Text fontSize="lg" color={textColor} fontWeight="700">
            63%
          </Text>
        </Flex>
        <VSeparator mx={{ base: '60px', xl: '60px', '2xl': '60px' }} />
        <Flex direction="column" py="5px" me="10px">
          <Flex align="center">
            <Box h="8px" w="8px" bg="#6AD2FF" borderRadius="50%" me="4px" />
            <Text
              fontSize="xs"
              color="secondaryGray.600"
              fontWeight="700"
              mb="5px"
            >
              DICOM
            </Text>
          </Flex>
          <Text fontSize="lg" color={textColor} fontWeight="700">
            17%
          </Text>
        </Flex>
        <VSeparator mx={{ base: '60px', xl: '60px', '2xl': '60px' }} />
        <Flex direction="column" py="5px" me="10px">
          <Flex align="center">
            <Box h="8px" w="8px" bg="#6AD2FF" borderRadius="50%" me="4px" />
            <Text
              fontSize="xs"
              color="secondaryGray.600"
              fontWeight="700"
              mb="5px"
            >
              JSON
            </Text>
          </Flex>
          <Text fontSize="lg" color={textColor} fontWeight="700">
            10%
          </Text>
        </Flex>
      </Card>
    </Card>
  );
}
