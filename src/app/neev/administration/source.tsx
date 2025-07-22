import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { HLabelSeparator } from 'components/separator/Separator';
import { Fragment, use, useState } from 'react';

export const AdministrationSource = () => {
  const bgSeparator = useColorModeValue('secondaryGray.400', '#323B5D');

  const formFields: { [x: string]: any } = {};
  const [formInputs, setFormInputs] = useState(formFields);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormInputs((values) => ({ ...values, [name]: value }));
  };

  const handleRadioChange = (name, value) => {
    setFormInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('form saved: ', formInputs);
  };

  const blackWhite = useColorModeValue('black', 'white');
  const whiteBlack = useColorModeValue('white', 'black');

  return (
    <div>
      <Stack spacing={5}>
        <Flex
          direction="row"
          w="45%"
          justifyContent="space-between"
          paddingRight="1rem"
          alignItems="center"
        >
          <FormLabel mb="0px" fontWeight="bold" whiteSpace="nowrap">
            Connector Type
          </FormLabel>
          <Select
            value={formInputs.connectorType || ''}
            placeholder="Select a type"
            w="40%"
            name="connectorType"
            onChange={handleChange}
          >
            {['DICOM Listener', 'HL7 Listener'].map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Select>
        </Flex>
        <Flex direction="row" w="100%" justifyContent="space-between">
          <Flex
            direction="row"
            w="45%"
            justifyContent="space-between"
            paddingRight="1rem"
            alignItems="center"
          >
            <FormLabel mb="0px" fontWeight="bold" whiteSpace="nowrap">
              Interface Name:
            </FormLabel>
            <Input
              w="40%"
              name="interfaceName"
              textColor={blackWhite}
              fontWeight="bold"
              variant="outline"
              placeholder="Interface Name"
              onChange={handleChange}
            />
          </Flex>
        </Flex>
        <HLabelSeparator
          label="Listener Settings"
          labelSize="1.2rem"
          mb="30px"
          bg={bgSeparator}
          mt="50px"
        />
        <Flex direction="row" w="100%" justifyContent="space-between">
          <Flex
            direction="row"
            w="45%"
            justifyContent="space-between"
            paddingRight="1rem"
            alignItems="center"
          >
            <FormLabel mb="0px" fontWeight="bold" whiteSpace="nowrap">
              AE Title:
            </FormLabel>
            <Input
              w="40%"
              name="aeTitle"
              textColor={blackWhite}
              fontWeight="bold"
              variant="outline"
              placeholder="AE Title"
              onChange={handleChange}
            />
          </Flex>
        </Flex>
        <Flex direction="row" w="100%" justifyContent="space-between">
          <Flex
            direction="row"
            w="45%"
            justifyContent="space-between"
            paddingRight="1rem"
            alignItems="center"
          >
            <FormLabel mb="0px" fontWeight="bold" whiteSpace="nowrap">
              Local Address:
            </FormLabel>
            <RadioGroup
              w="40%"
              name="localAddress"
              onChange={(value) => handleRadioChange('localAddress', value)}
            >
              <Stack direction="row">
                <Radio value="allInterfaces">All Interfaces</Radio>
                <Radio value="specificInterfaces">Specific Interfaces</Radio>
              </Stack>
            </RadioGroup>
          </Flex>
        </Flex>
        <Flex direction="row" w="100%" justifyContent="space-between">
          <Flex
            direction="row"
            w="45%"
            justifyContent="space-between"
            paddingRight="1rem"
            alignItems="center"
          >
            <FormLabel mb="0px" fontWeight="bold" whiteSpace="nowrap">
              Local Port:
            </FormLabel>
            <Flex
              direction="row"
              w="40%"
              justifyContent="space-between"
              paddingRight="1rem"
              alignItems="center"
            >
              <Input
                w="60%"
                marginRight="1rem"
                textColor={blackWhite}
                fontWeight="bold"
                name="localPort"
                variant="outline"
                placeholder="Local Port"
                onChange={handleChange}
              />
              <Button
                textColor={whiteBlack}
                backgroundColor={blackWhite}
                borderRadius="0px"
                variant="solid"
              >
                Ports In Use
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Flex mt="50px"></Flex> {/* Spacer */}
        {
          // DICOM Listener Settings
          formInputs.connectorType === 'DICOM Listener' && (
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      fontWeight="bold"
                      fontSize="1.2rem"
                    >
                      DICOM Listener Settings
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Stack spacing={5}>
                    <Flex
                      direction="row"
                      w="100%"
                      justifyContent="space-between"
                    >
                      <Flex
                        direction="row"
                        w="45%"
                        justifyContent="space-between"
                        paddingRight="1rem"
                        alignItems="center"
                      >
                        <FormLabel
                          mb="0px"
                          fontWeight="bold"
                          whiteSpace="nowrap"
                        >
                          Max Async Operations:
                        </FormLabel>
                        <Input
                          w="40%"
                          name="maxAsyncOperations"
                          textColor={blackWhite}
                          fontWeight="bold"
                          variant="outline"
                          placeholder="Max Async Operations"
                          onChange={handleChange}
                        />
                      </Flex>
                    </Flex>

                    <Flex
                      direction="row"
                      w="100%"
                      justifyContent="space-between"
                    >
                      <Flex
                        direction="row"
                        w="45%"
                        justifyContent="space-between"
                        paddingRight="1rem"
                        alignItems="center"
                      >
                        <FormLabel
                          mb="0px"
                          fontWeight="bold"
                          whiteSpace="nowrap"
                        >
                          Pack PDV:
                        </FormLabel>
                        <RadioGroup
                          w="40%"
                          name="packPDV"
                          onChange={(value) =>
                            handleRadioChange('packPDV', value)
                          }
                        >
                          <Stack direction="row">
                            <Radio value="yes">Yes</Radio>
                            <Radio value="no">No</Radio>
                          </Stack>
                        </RadioGroup>
                      </Flex>
                    </Flex>

                    <Flex
                      direction="row"
                      w="100%"
                      justifyContent="space-between"
                    >
                      <Flex
                        direction="row"
                        w="45%"
                        justifyContent="space-between"
                        paddingRight="1rem"
                        alignItems="center"
                      >
                        <FormLabel
                          mb="0px"
                          fontWeight="bold"
                          whiteSpace="nowrap"
                        >
                          DIMSE-RSP Interval Period (s):
                        </FormLabel>
                        <Input
                          w="40%"
                          name="dimseRspIntervalPeriod"
                          textColor={blackWhite}
                          fontWeight="bold"
                          variant="outline"
                          placeholder="DIMSE-RSP Interval Period (s)"
                          onChange={handleChange}
                        />
                      </Flex>
                      <Flex
                        direction="row"
                        w="45%"
                        justifyContent="space-between"
                        paddingRight="1rem"
                        alignItems="center"
                      >
                        <FormLabel
                          mb="0px"
                          fontWeight="bold"
                          whiteSpace="nowrap"
                        >
                          P-DATA-TF PDUs Max Length Sent (kb):
                        </FormLabel>
                        <Input
                          w="60%"
                          name="pDataTfPdusMaxLengthSent"
                          textColor={blackWhite}
                          fontWeight="bold"
                          variant="outline"
                          placeholder="P-DATA-TF PDUs Max Length Sent (kb)"
                          onChange={handleChange}
                        />
                      </Flex>
                    </Flex>

                    <Flex
                      direction="row"
                      w="100%"
                      justifyContent="space-between"
                    >
                      <Flex
                        direction="row"
                        w="45%"
                        justifyContent="space-between"
                        paddingRight="1rem"
                        alignItems="center"
                      >
                        <FormLabel
                          mb="0px"
                          fontWeight="bold"
                          whiteSpace="nowrap"
                        >
                          A-RELEASE-RP Timeout (s):
                        </FormLabel>
                        <Input
                          w="40%"
                          name="aReleaseRpTimeout"
                          textColor={blackWhite}
                          fontWeight="bold"
                          variant="outline"
                          placeholder="A-RELEASE-RP Timeout (s)"
                          onChange={handleChange}
                        />
                      </Flex>
                      <Flex
                        direction="row"
                        w="45%"
                        justifyContent="space-between"
                        paddingRight="1rem"
                        alignItems="center"
                      >
                        <FormLabel
                          mb="0px"
                          fontWeight="bold"
                          whiteSpace="nowrap"
                        >
                          P-DATA-TF PDUs Max Length Received (kb):
                        </FormLabel>
                        <Input
                          w="60%"
                          name="pDataTfPdusMaxLengthReceived"
                          textColor={blackWhite}
                          fontWeight="bold"
                          variant="outline"
                          placeholder="P-DATA-TF PDUs Max Length Received (kb)"
                          onChange={handleChange}
                        />
                      </Flex>
                    </Flex>

                    <Flex
                      direction="row"
                      w="100%"
                      justifyContent="space-between"
                    >
                      <Flex
                        direction="row"
                        w="45%"
                        justifyContent="space-between"
                        paddingRight="1rem"
                        alignItems="center"
                      >
                        <FormLabel
                          mb="0px"
                          fontWeight="bold"
                          whiteSpace="nowrap"
                        >
                          Socket Close Delay After A-ABORT (ms):
                        </FormLabel>
                        <Input
                          w="40%"
                          name="socketCloseDelayAfterAAbort"
                          textColor={blackWhite}
                          fontWeight="bold"
                          variant="outline"
                          placeholder="Socket Close Delay After A-ABORT (ms)"
                          onChange={handleChange}
                        />
                      </Flex>
                      <Flex
                        direction="row"
                        w="45%"
                        justifyContent="space-between"
                        paddingRight="1rem"
                        alignItems="center"
                      >
                        <FormLabel
                          mb="0px"
                          fontWeight="bold"
                          whiteSpace="nowrap"
                        >
                          Send Socket Buffer Size (kb):
                        </FormLabel>
                        <Input
                          w="60%"
                          name="sendSocketBufferSize"
                          textColor={blackWhite}
                          fontWeight="bold"
                          variant="outline"
                          placeholder="Send Socket Buffer Size (kb)"
                          onChange={handleChange}
                        />
                      </Flex>
                    </Flex>

                    <Flex
                      direction="row"
                      w="100%"
                      justifyContent="space-between"
                    >
                      <Flex
                        direction="row"
                        w="45%"
                        justifyContent="space-between"
                        paddingRight="1rem"
                        alignItems="center"
                      >
                        <FormLabel
                          mb="0px"
                          fontWeight="bold"
                          whiteSpace="nowrap"
                        >
                          ASSOCIATE-RQ Timeout (ms):
                        </FormLabel>

                        <Input
                          w="40%"
                          name="associateRqTimeout"
                          textColor={blackWhite}
                          fontWeight="bold"
                          variant="outline"
                          placeholder="ASSOCIATE-RQ Timeout (ms)"
                          onChange={handleChange}
                        />
                      </Flex>
                      <Flex
                        direction="row"
                        w="45%"
                        justifyContent="space-between"
                        paddingRight="1rem"
                        alignItems="center"
                      >
                        <FormLabel
                          mb="0px"
                          fontWeight="bold"
                          whiteSpace="nowrap"
                        >
                          Receive Socket Buffer Size (kb):
                        </FormLabel>
                        <Input
                          w="60%"
                          name="receiveSocketBufferSize"
                          textColor={blackWhite}
                          fontWeight="bold"
                          variant="outline"
                          placeholder="Receive Socket Buffer Size (kb)"
                          onChange={handleChange}
                        />
                      </Flex>
                    </Flex>
                  </Stack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          )
        }
        {
          // HL7 Listener Settings
          formInputs.connectorType === 'HL7 Listener' && (
            <Fragment>
              <HLabelSeparator
                label="Source Settings"
                labelSize="1.2rem"
                mb="30px"
                bg={bgSeparator}
                mt="50px"
              />

              <Flex direction="row" w="100%" justifyContent="space-between">
                <Flex
                  direction="row"
                  w="45%"
                  justifyContent="space-between"
                  paddingRight="1rem"
                  alignItems="center"
                >
                  <FormLabel mb="0px" fontWeight="bold" whiteSpace="nowrap">
                    Max Processing Threads:
                  </FormLabel>
                  <Input
                    w="40%"
                    name="maxProcessingThreads"
                    textColor={blackWhite}
                    fontWeight="bold"
                    variant="outline"
                    placeholder="Max Processing Threads"
                    onChange={handleChange}
                  />
                </Flex>
              </Flex>

              <HLabelSeparator
                label="HL7 Listener Settings"
                labelSize="1.2rem"
                mb="30px"
                bg={bgSeparator}
                mt="50px"
              />

              <Flex direction="row" w="100%" justifyContent="space-between">
                <Flex
                  direction="row"
                  w="45%"
                  justifyContent="space-between"
                  paddingRight="1rem"
                  alignItems="center"
                >
                  <FormLabel mb="0px" fontWeight="bold" whiteSpace="nowrap">
                    Max Connections:
                  </FormLabel>
                  <Input
                    w="40%"
                    name="maxConnections"
                    textColor={blackWhite}
                    fontWeight="bold"
                    variant="outline"
                    placeholder="Max Connections"
                    onChange={handleChange}
                  />
                </Flex>
              </Flex>

              <Flex direction="row" w="100%" justifyContent="space-between">
                <Flex
                  direction="row"
                  w="45%"
                  justifyContent="space-between"
                  paddingRight="1rem"
                  alignItems="center"
                >
                  <FormLabel mb="0px" fontWeight="bold" whiteSpace="nowrap">
                    Recieve Timeout (ms):
                  </FormLabel>
                  <Input
                    w="40%"
                    name="recieveTimeout"
                    textColor={blackWhite}
                    fontWeight="bold"
                    variant="outline"
                    placeholder="Recieve Timeout (ms)"
                    onChange={handleChange}
                  />
                </Flex>
              </Flex>

              <Flex direction="row" w="100%" justifyContent="space-between">
                <Flex
                  direction="row"
                  w="45%"
                  justifyContent="space-between"
                  paddingRight="1rem"
                  alignItems="center"
                >
                  <FormLabel mb="0px" fontWeight="bold" whiteSpace="nowrap">
                    Buffer Size (bytes):
                  </FormLabel>
                  <Input
                    w="40%"
                    name="bufferSize"
                    textColor={blackWhite}
                    fontWeight="bold"
                    variant="outline"
                    placeholder="Buffer Size (bytes)"
                    onChange={handleChange}
                  />
                </Flex>
              </Flex>

              <Flex direction="row" w="100%" justifyContent="space-between">
                <Flex
                  direction="row"
                  w="45%"
                  justifyContent="space-between"
                  paddingRight="1rem"
                  alignItems="center"
                >
                  <FormLabel mb="0px" fontWeight="bold" whiteSpace="nowrap">
                    Keep Connection Open:
                  </FormLabel>
                  <RadioGroup
                    w="40%"
                    name="keepConnectionOpen"
                    onChange={(value) =>
                      handleRadioChange('keepConnectionOpen', value)
                    }
                  >
                    <Stack direction="row">
                      <Radio value="yes">Yes</Radio>
                      <Radio value="no">No</Radio>
                    </Stack>
                  </RadioGroup>
                </Flex>
              </Flex>
            </Fragment>
          )
        }
        <Stack w="100px">
          <Button
            mt="50px"
            textColor={whiteBlack}
            backgroundColor={blackWhite}
            borderRadius="0px"
            onClick={handleSubmit}
          >
            Save
          </Button>
        </Stack>
      </Stack>
    </div>
  );
};
