'use client';
// Chakra imports
import { Flex, Text, useColorModeValue, Badge } from '@chakra-ui/react';
import { NextAvatar } from 'components/image/Avatar';

export default function Transfer(props: {
  date: string;
  sum: string;
  avatar?: string;
  color?: string;
  name: string;
  [x: string]: any;
}) {
  const { date, sum, avatar, color, name, ...rest } = props;

  const textColor = useColorModeValue('secondaryGray.900', 'white');
  return (
    <Flex justifyContent="center" alignItems="center" w="100%" {...rest}>
      {avatar && <NextAvatar h="34px" w="34px" src={avatar} me="14px" />}
      <Flex direction="column" align="start" me="auto">
        <Text color={textColor} fontSize="md" me="6px" fontWeight="700">
          {name}
        </Text>
        <Text color="secondaryGray.600" fontSize="sm" fontWeight="500">
          {date}
        </Text>
      </Flex>
      <Badge
        ms="auto"
        colorScheme={sum[0] === '-' ? 'red' : 'green'}
        color={color ? color : sum[0] === '-' ? 'red.500' : 'green.500'}
        fontSize="sm"
      >
        {sum}
      </Badge>
    </Flex>
  );
}
