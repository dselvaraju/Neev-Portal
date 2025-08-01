'use client';
/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   ____  ____   ___  
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| |  _ \|  _ \ / _ \ 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || |  | |_) | |_) | | | |
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |  |  __/|  _ <| |_| |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___| |_|   |_| \_\\___/ 
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI Dashboard PRO - v1.0.0
=========================================================

* Product Page: https://www.horizon-ui.com/pro/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {
  Box,
  Flex,
  Grid,
  Icon,
  SimpleGrid,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';

import { FaChild, FaFan } from 'react-icons/fa';
import { ButtonLeft, ButtonRight } from 'components/icons/Icons';
// Assets
import {
  MdChevronLeft,
  MdChevronRight,
  MdLibraryMusic,
  MdLiveTv,
  MdLock,
  MdOutlineWbSunny,
  MdPhoneInTalk,
} from 'react-icons/md';
import EagleView from 'components/admin/dashboards/car-interface/EagleView';
import MapCard from 'components/admin/dashboards/car-interface/MapCard';
import Phone from 'components/admin/dashboards/car-interface/Phone';

export default function CarInterface() {
  // Chakra Color Mode
  const textColorSecondary = useColorModeValue('secondaryGray.700', 'white');
  const brandBg = useColorModeValue('white', 'navy.800');
  return (
    <Grid
      pt={{ base: '130px', md: '80px', xl: '80px' }}
      gridTemplateColumns={{
        base: 'repeat(2, 1fr)',
        '2xl': '1fr 1.13fr 1.45fr',
      }}
      gridTemplateRows={{
        base: 'repeat(2, 1fr)',
        '2xl': '1fr',
      }}
      gap={{ base: '20px', xl: '20px' }}
      display={{ base: 'block', lg: 'grid' }}
    >
      <EagleView gridArea="1 / 1 / 2 / 2" />
      <Box gridArea="1 / 2 / 2 / 3">
        <Phone />
        <SimpleGrid mt="20px" columns={3} gap="20px" mb="20px">
          <Card p={{ base: '28px', md: '50px' }}>
            <Icon color={textColorSecondary} as={FaChild} w="40px" h="40px" />
          </Card>
          <Card p={{ base: '28px', md: '50px' }}>
            <Icon
              color={textColorSecondary}
              alignSelf="center"
              as={MdLock}
              w="40px"
              h="40px"
            />
          </Card>
          <Card p={{ base: '28px', md: '50px' }}>
            <Icon
              color={textColorSecondary}
              alignSelf="center"
              as={MdLibraryMusic}
              w="40px"
              h="40px"
            />
          </Card>
          <Card p={{ base: '28px', md: '50px' }}>
            <Icon
              color={textColorSecondary}
              alignSelf="center"
              as={FaFan}
              w="40px"
              h="40px"
            />
          </Card>
          <Card p={{ base: '28px', md: '50px' }}>
            <Icon
              color={textColorSecondary}
              alignSelf="center"
              as={MdLiveTv}
              w="40px"
              h="40px"
            />
          </Card>
          <Card p={{ base: '28px', md: '50px' }}>
            <Icon
              color={textColorSecondary}
              alignSelf="center"
              as={MdPhoneInTalk}
              w="40px"
              h="40px"
            />
          </Card>
        </SimpleGrid>

        <SimpleGrid mt="20px" columns={2} gap="20px" mb="20px">
          <Card p={{ base: '28px', md: '50px' }}>
            <Box m="auto">
              <Icon
                transform="rotate(90deg)"
                color={textColorSecondary}
                as={MdChevronLeft}
                w="24px"
                h="24px"
                ms={{ base: '32px' }}
              />
              <Flex position="relative">
                <Text
                  position="absolute"
                  right="50%"
                  top="50%"
                  transform="translate(-50%,-50%)"
                  color={textColorSecondary}
                  fontSize="md"
                  fontWeight="700"
                  lineHeight="100%"
                >
                  L
                </Text>
                <Icon
                  color={textColorSecondary}
                  as={MdChevronLeft}
                  w="24px"
                  h="24px"
                />
                <ButtonLeft color={textColorSecondary} w="44px" h="29px" />
                <Icon
                  color={textColorSecondary}
                  as={MdChevronRight}
                  w="24px"
                  h="24px"
                />
              </Flex>
              <Icon
                transform="rotate(90deg)"
                color={textColorSecondary}
                as={MdChevronRight}
                w="24px"
                h="24px"
                mt={{ base: '6px' }}
                ms={{ base: '32px' }}
              />
            </Box>
          </Card>
          <Card p={{ base: '28px', md: '50px' }}>
            <Box m="auto">
              <Icon
                transform="rotate(90deg)"
                color={textColorSecondary}
                as={MdChevronLeft}
                w="24px"
                h="24px"
                ms={{ base: '32px' }}
              />
              <Flex position="relative">
                <Text
                  position="absolute"
                  right="50%"
                  top="50%"
                  transform="translate(-50%,-50%)"
                  color={textColorSecondary}
                  fontSize="md"
                  fontWeight="700"
                  lineHeight="100%"
                >
                  R
                </Text>
                <Icon
                  color={textColorSecondary}
                  as={MdChevronLeft}
                  w="24px"
                  h="24px"
                />
                <ButtonRight color={textColorSecondary} w="44px" h="29px" />
                <Icon
                  color={textColorSecondary}
                  as={MdChevronRight}
                  w="24px"
                  h="24px"
                />
              </Flex>
              <Icon
                transform="rotate(90deg)"
                color={textColorSecondary}
                as={MdChevronRight}
                w="24px"
                h="24px"
                mt={{ base: '6px' }}
                ms={{ base: '32px' }}
              />
            </Box>
          </Card>
        </SimpleGrid>
        <Card flexDirection="row" p="50px" mb={{ base: '20px', lg: '0px' }}>
          <Icon
            h="30px"
            w="30px"
            me="20px"
            as={MdOutlineWbSunny}
            color={textColorSecondary}
          />
          <Slider defaultValue={10} zIndex="0">
            <SliderTrack h="4px" borderRadius="78px">
              <SliderFilledTrack bg={textColorSecondary} />
            </SliderTrack>
            <SliderThumb
              boxShadow="0px 3px 27px -20px rgba(112, 144, 176, 0.51)"
              w="18px"
              h="18px"
              border="4px solid"
              borderColor={textColorSecondary}
              bg={brandBg}
            />
          </Slider>
        </Card>
      </Box>
      <MapCard gridArea={{ base: '2 / 1 / 3 / 3', '2xl': '1 / 3 / 2 / 4' }} />
    </Grid>
  );
}
