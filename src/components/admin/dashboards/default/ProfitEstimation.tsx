'use client';
// Chakra imports
import { Flex, Box, Text, useColorModeValue } from '@chakra-ui/react';
import CircularProgress from 'components/charts/CircularProgress';
import { VSeparator } from 'components/separator/Separator';

// Custom components
import Card from 'components/card/Card';

export default function ProfitEstimation(props: { [x: string]: any }) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const cardColor = useColorModeValue('white', 'navy.700');
  return (
    <Card
      p="20px"
      alignItems="center"
      flexDirection="column"
      w="100%"
      {...rest}
    >
      <Text
        color={textColor}
        fontSize="lg"
        fontWeight="700"
        mb="10px"
        mx="auto"
      >
        System Uptime
      </Text>
      <Flex
        justifyContent="center"
        alignItems="center"
        w="100%"
        px="10px"
        mb="8px"
      />
      <Box w="200px" mb="10px" mt="10px">
        <CircularProgress title="" percentage={99.99} />
      </Box>
    </Card>
  );
}
