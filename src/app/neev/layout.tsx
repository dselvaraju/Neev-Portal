'use client';
// Chakra imports
import { Box, Portal, useDisclosure } from '@chakra-ui/react';
// Layout components
import Sidebar from './components/sidebar/Sidebar';
import { useContext, useState } from 'react';
import { ConfiguratorContext } from 'contexts/ConfiguratorContext';
import routes from './routes';
import {
  getActiveRoute,
  isWindowAvailable,
  getActiveNavbar,
} from 'utils/navigation';
import Navbar from 'components/navbar/NavbarAdmin';

import './ui/styles.css';
import { usePathname } from 'next/navigation';

// Custom Chakra thems
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // states and functions
  if (isWindowAvailable()) document.documentElement.dir = 'ltr';
  const context = useContext(ConfiguratorContext);
  const { onOpen } = useDisclosure();
  const pathname = usePathname();
  const [fixed] = useState(false);
  const { mini, hovered, setHovered } = context;
  return (
    <Box>
      <Sidebar
        mini={mini}
        routes={routes}
        hovered={hovered}
        setHovered={setHovered}
      />
      <Box
        float="right"
        minHeight="100vh"
        height="100%"
        overflow="auto"
        position="relative"
        maxHeight="100%"
        w={
          mini === false
            ? { base: '100%', xl: 'calc( 100% - 290px )' }
            : mini === true && hovered === true
              ? { base: '100%', xl: 'calc( 100% - 290px )' }
              : { base: '100%', xl: 'calc( 100% - 120px )' }
        }
        maxWidth={
          mini === false
            ? { base: '100%', xl: 'calc( 100% - 290px )' }
            : mini === true && hovered === true
              ? { base: '100%', xl: 'calc( 100% - 290px )' }
              : { base: '100%', xl: 'calc( 100% - 120px )' }
        }
        transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
        transitionDuration=".2s, .2s, .35s"
        transitionProperty="top, bottom, width"
        transitionTimingFunction="linear, linear, ease"
      >
        <Portal>
          <Box>
            <Navbar
              onOpen={onOpen}
              logoText={'Neev'}
              brandText={getActiveRoute(routes, pathname)}
              secondary={getActiveNavbar(routes, pathname)}
              fixed={fixed}
            />
          </Box>
        </Portal>
        <Box
          className="neev-content"
          mx="auto"
          p={{ base: '20px', md: '30px' }}
          pe="20px"
          minH="100vh"
          pt="60px"
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
