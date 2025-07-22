'use client';
// Chakra imports
import { Flex, Box, Text, useColorModeValue } from '@chakra-ui/react';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import Card from 'components/card/Card';

export default function SystemUptime(props: { [x: string]: any }) {
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
        <CircularProgress
          value={72}
          size="200px"
          color="var(--chakra-colors-brand-500)"
        >
          <CircularProgressLabel>72%</CircularProgressLabel>
        </CircularProgress>
      </Box>
    </Card>
  );
}
