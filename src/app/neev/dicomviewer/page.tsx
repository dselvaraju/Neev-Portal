'use client';

import { Flex } from '@chakra-ui/react';

export default function Page() {
  return (
    <Flex
      direction="column"
      pt={{ sm: '125px', lg: '75px' }}
      h={{ sm: 'calc(100vh - 125px)', lg: 'calc(100vh - 75px)' }}
    >
      <iframe
        height="100%"
        width="100%"
        src="https://localhost:3001"
        title="Localhost"
      />
    </Flex>
  );
}
