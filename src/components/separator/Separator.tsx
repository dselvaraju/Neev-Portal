'use client';
import { Flex, HStack } from '@chakra-ui/react';

const HSeparator = (props: { variant?: string; [x: string]: any }) => {
  const { variant, ...rest } = props;
  return <Flex h="1px" w="100%" bg="rgba(135, 140, 189, 0.3)" {...rest} />;
};

const HLabelSeparator = (props: {
  variant?: string;
  label?: string;
  labelSize?: string;
  mt?: string;
  [x: string]: any;
}) => {
  const { variant, label, labelSize, mt, ...rest } = props;
  return (
    <HStack
      style={{
        width: '100%',
        ...(mt && { marginTop: mt }),
      }}
    >
      <span
        style={{
          fontSize: labelSize ?? '1rem',
          fontWeight: 'bold',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </span>
      <Flex h="2px" w="100%" bg="rgba(135, 140, 189, 0.3)" {...rest} />
    </HStack>
  );
};

const VSeparator = (props: { variant?: string; [x: string]: any }) => {
  const { variant, ...rest } = props;
  return <Flex w="1px" bg="rgba(135, 140, 189, 0.3)" {...rest} />;
};

export { HSeparator, HLabelSeparator, VSeparator };
