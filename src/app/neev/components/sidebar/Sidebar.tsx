'use client';
import React, { PropsWithChildren } from 'react';

// chakra imports
import {
  Box,
  Flex,
  Drawer,
  DrawerBody,
  Icon,
  useColorModeValue,
  DrawerOverlay,
  useDisclosure,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import Content from './components/Content';
import {
  renderThumb,
  renderTrack,
  renderView,
  renderViewMini,
} from 'components/scrollbar/Scrollbar';
import { Scrollbars } from 'react-custom-scrollbars-2';

// Assets
import { IoMenuOutline } from 'react-icons/io5';
import { IRoute } from 'types/navigation';
import { useContext } from 'react';
import { ConfiguratorContext } from 'contexts/ConfiguratorContext';
import { isWindowAvailable } from 'utils/navigation';

export interface SidebarProps extends PropsWithChildren {
  routes: IRoute[];
}

function Sidebar(props: { routes: IRoute[]; [x: string]: any }) {
  const { routes } = props;
  const context = useContext(ConfiguratorContext);
  const { mini, hovered, setHovered } = context;

  // this is for the rest of the collapses
  let variantChange = '0.2s linear';
  let shadow = useColorModeValue(
    '14px 17px 40px 4px rgba(112, 144, 176, 0.08)',
    'unset',
  );
  // Chakra Color Mode
  let sidebarBg = useColorModeValue('white', 'navy.800');
  let sidebarRadius = '30px';
  let sidebarMargins = '0px';
  // SIDEBAR
  return (
    <Box
      display={{ base: 'none', xl: 'block' }}
      position="fixed"
      minH="100%"
      onMouseEnter={() => {
        setHovered(true);
        console.log(mini);
      }}
      onMouseLeave={() => {
        setHovered(false);
        console.log(mini);
      }}
    >
      <Box
        bg={sidebarBg}
        transition={variantChange}
        w={
          mini === false
            ? '285px'
            : mini === true && hovered === true
            ? '285px'
            : '120px'
        }
        ms={{
          sm: '16px',
        }}
        my={{
          sm: '16px',
        }}
        h="calc(100vh - 32px)"
        m={sidebarMargins}
        borderRadius={sidebarRadius}
        minH="100%"
        overflowX="hidden"
        boxShadow={shadow}
      >
        <Scrollbars
          autoHide
          renderTrackVertical={renderTrack}
          renderThumbVertical={renderThumb}
          renderView={
            mini === false
              ? renderView
              : mini === true && hovered === true
              ? renderView
              : renderViewMini
          }
        >
          <Content mini={mini} hovered={hovered} routes={routes} />
        </Scrollbars>
      </Box>
    </Box>
  );
}

// FUNCTIONS
export function SidebarResponsive(props: {
  routes: IRoute[];
  [x: string]: any;
}) {
  let sidebarBackgroundColor = useColorModeValue('white', 'navy.800');
  let menuColor = useColorModeValue('gray.400', 'white');
  // // SIDEBAR
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const { routes } = props;
  // let isWindows = navigator.platform.startsWith("Win");
  //  BRAND

  return (
    <Flex display={{ sm: 'flex', xl: 'none' }} alignItems="center">
      <Flex ref={btnRef} w="max-content" h="max-content" onClick={onOpen}>
        <Icon
          as={IoMenuOutline}
          color={menuColor}
          my="auto"
          w="20px"
          h="20px"
          me="10px"
          _hover={{ cursor: 'pointer' }}
        />
      </Flex>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement={
          isWindowAvailable() && document.documentElement.dir === 'rtl'
            ? 'right'
            : 'left'
        }
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          w="285px"
          maxW="285px"
          ms={{
            sm: '16px',
          }}
          my={{
            sm: '16px',
          }}
          borderRadius="16px"
          bg={sidebarBackgroundColor}
        >
          <DrawerCloseButton
            zIndex="3"
            onClick={onClose}
            _focus={{ boxShadow: 'none' }}
            _hover={{ boxShadow: 'none' }}
          />
          <DrawerBody maxW="285px" px="0rem" pb="0">
            <Scrollbars
              autoHide
              renderTrackVertical={renderTrack}
              renderThumbVertical={renderThumb}
              renderView={renderView}
            >
              <Content mini={false} routes={routes} />
            </Scrollbars>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
// PROPS

export default Sidebar;
