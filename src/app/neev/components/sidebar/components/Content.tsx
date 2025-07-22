// chakra imports
import {
  Avatar,
  Box,
  Flex,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
//   Custom components
import Brand from './Brand';
import Links from 'components/sidebar/components/Links';
import SidebarCard from 'components/sidebar/components/SidebarCard';
import avatar4 from '/public/img/avatars/avatar4.png';
import { IRoute } from 'types/navigation';

// FUNCTIONS

function SidebarContent(props: {
  routes: IRoute[];
  hovered?: boolean;
  mini?: boolean;
}) {
  const { routes, mini, hovered } = props;
  const textColor = useColorModeValue('navy.700', 'white');
  // SIDEBAR
  return (
    <Flex direction="column" height="100%" pt="25px" borderRadius="30px">
      <Brand mini={mini} hovered={hovered} />
      <Stack direction="column" mb="auto" mt="4px" fontSize="20px">
        <Box
          ps={
            mini === false
              ? '10px'
              : mini === true && hovered === true
              ? '10px'
              : '8px'
          }
        >
          <Links mini={mini} hovered={hovered} routes={routes} />
        </Box>
      </Stack>
    </Flex>
  );
}

export default SidebarContent;
