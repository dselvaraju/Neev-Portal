// Chakra imports
import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
import illustration from '/public/img/neev/Neev-05.png';

// Custom components
import { HSeparator } from 'components/separator/Separator';

export function SidebarBrand(props: { mini: boolean; hovered: boolean }) {
  return (
    <Flex alignItems="center" flexDirection="column">
      <div
        className="brand"
        style={{
          backgroundImage: `url(${illustration.src})`,
          width: '100%',
          height: props.mini ? '50px' : '100px',
          backgroundSize: '110%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '50%',
        }}
      />
      <HSeparator mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;
