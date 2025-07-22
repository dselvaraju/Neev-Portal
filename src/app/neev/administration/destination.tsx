import {
  Button,
  Checkbox,
  Flex,
  FormLabel,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { HLabelSeparator } from 'components/separator/Separator';
import { Fragment, useState } from 'react';

export const AdministrationDestination = () => {
  const bgSeparator = useColorModeValue('secondaryGray.400', '#323B5D');

  const formFields: { [x: string]: any } = {};
  const [formInputs, setFormInputs] = useState(formFields);

  const handleChange = (event) => {
    const name = event.target.name;
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;

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
            {['DICOM Sender', 'HL7 Sender'].map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Select>
        </Flex>

        {
          // If connectorType is DICOM Sender
          formInputs.connectorType === 'DICOM Sender' && (
            <Fragment>
              <HLabelSeparator
                label="DICOM Sender Settings"
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
                    Remote Host:
                  </FormLabel>
                  <Input
                    w="40%"
                    name="remoteHost"
                    textColor={blackWhite}
                    fontWeight="bold"
                    variant="outline"
                    placeholder="Remote Host"
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
                  <FormLabel mb="0px" fontWeight="bold" whiteSpace="nowrap">
                    Local Host:
                  </FormLabel>
                  <Input
                    w="60%"
                    name="localHost"
                    textColor={blackWhite}
                    fontWeight="bold"
                    variant="outline"
                    placeholder="Local Host"
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
                    Remote Port:
                  </FormLabel>
                  <Input
                    w="40%"
                    name="remotePort"
                    textColor={blackWhite}
                    fontWeight="bold"
                    variant="outline"
                    placeholder="Remote Port"
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
                  <FormLabel mb="0px" fontWeight="bold" whiteSpace="nowrap">
                    Local Port:
                  </FormLabel>
                  <Flex
                    direction="row"
                    w="60%"
                    justifyContent="space-between"
                    paddingRight="1rem"
                    alignItems="center"
                  >
                    <Input
                      w="60%"
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

              <Flex direction="row" w="100%" justifyContent="space-between">
                <Flex
                  direction="row"
                  w="45%"
                  justifyContent="space-between"
                  paddingRight="1rem"
                  alignItems="center"
                >
                  <FormLabel mb="0px" fontWeight="bold" whiteSpace="nowrap">
                    Remote Application Entry:
                  </FormLabel>
                  <Input
                    w="40%"
                    name="remoteApplicationEntry"
                    textColor={blackWhite}
                    fontWeight="bold"
                    variant="outline"
                    placeholder="Remote Application Entry"
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
                  <FormLabel mb="0px" fontWeight="bold" whiteSpace="nowrap">
                    Local Application Entry:
                  </FormLabel>
                  <Flex
                    direction="row"
                    w="60%"
                    justifyContent="space-between"
                    paddingRight="1rem"
                    alignItems="center"
                  >
                    <Input
                      w="60%"
                      textColor={blackWhite}
                      fontWeight="bold"
                      name="localApplicationEntry"
                      placeholder="Local Application Entry"
                      onChange={handleChange}
                    />
                  </Flex>
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

              <Flex direction="row" w="100%" justifyContent="space-between">
                <Flex
                  direction="row"
                  w="45%"
                  justifyContent="space-between"
                  paddingRight="1rem"
                  alignItems="center"
                >
                  <FormLabel mb="0px" fontWeight="bold" whiteSpace="nowrap">
                    Priority:
                  </FormLabel>
                  <RadioGroup
                    w="40%"
                    name="priority"
                    onChange={(value) => handleRadioChange('priority', value)}
                  >
                    <Stack direction="row">
                      <Radio value="high">High</Radio>
                      <Radio value="medium">Medium</Radio>
                      <Radio value="low">Low</Radio>
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
                    Pack PDV:
                  </FormLabel>
                  <RadioGroup
                    w="40%"
                    name="packPDV"
                    onChange={(value) => handleRadioChange('packPDV', value)}
                  >
                    <Stack direction="row">
                      <Radio value="yes">Yes</Radio>
                      <Radio value="no">No</Radio>
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
                  <FormLabel mb="0px" fontWeight="bold" whiteSpace="nowrap">
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

              <Flex direction="row" w="100%" justifyContent="space-between">
                <Flex
                  direction="row"
                  w="45%"
                  justifyContent="space-between"
                  paddingRight="1rem"
                  alignItems="center"
                >
                  <FormLabel mb="0px" fontWeight="bold" whiteSpace="nowrap">
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
                  <FormLabel mb="0px" fontWeight="bold" whiteSpace="nowrap">
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

              <Flex direction="row" w="100%" justifyContent="space-between">
                <Flex
                  direction="row"
                  w="45%"
                  justifyContent="space-between"
                  paddingRight="1rem"
                  alignItems="center"
                >
                  <FormLabel mb="0px" fontWeight="bold" whiteSpace="nowrap">
                    DIMSE-RSP Timeout (s):
                  </FormLabel>
                  <Input
                    w="40%"
                    name="dimseRspTimeout"
                    textColor={blackWhite}
                    fontWeight="bold"
                    variant="outline"
                    placeholder="DIMSE-RSP Timeout (s)"
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
                    Send Socket Buffer Size (kb):
                  </FormLabel>
                  <Input
                    w="40%"
                    name="sendSocketBufferSize"
                    textColor={blackWhite}
                    fontWeight="bold"
                    variant="outline"
                    placeholder="Send Socket Buffer Size (kb)"
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
                    Shutdown Delay (ms):
                  </FormLabel>
                  <Input
                    w="40%"
                    name="shutdownDelay"
                    textColor={blackWhite}
                    fontWeight="bold"
                    variant="outline"
                    placeholder="Shutdown Delay (ms):"
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
                  <FormLabel mb="0px" fontWeight="bold" whiteSpace="nowrap">
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
            </Fragment>
          )
        }

        {
          // If connectorType is HL7 Sender
          formInputs.connectorType === 'HL7 Sender' && (
            <Fragment>
              <HLabelSeparator
                label="HL7 Sender Settings"
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
                    Remote Address:
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
                      name="remoteAddress"
                      variant="outline"
                      placeholder="Remote Address"
                      onChange={handleChange}
                    />
                    <Button
                      w="200px"
                      textColor={whiteBlack}
                      backgroundColor={blackWhite}
                      borderRadius="0px"
                      variant="solid"
                    >
                      Test Connection
                    </Button>
                  </Flex>
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
                    Remote Port:
                  </FormLabel>
                  <Input
                    w="40%"
                    name="remotePort"
                    textColor={blackWhite}
                    fontWeight="bold"
                    variant="outline"
                    placeholder="Remote Port"
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
                    Response Timeout (ms):
                  </FormLabel>
                  <Input
                    w="40%"
                    name="responseTimeout"
                    textColor={blackWhite}
                    fontWeight="bold"
                    variant="outline"
                    placeholder="Response Timeout (ms)"
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
                  <FormLabel
                    mb="0px"
                    fontWeight="bold"
                    whiteSpace="nowrap"
                  ></FormLabel>
                  <Checkbox
                    w="40%"
                    name="ignoreResponse"
                    isChecked={formInputs.ignoreResponse ?? false}
                    onChange={handleChange}
                  >
                    Ignore Response
                  </Checkbox>
                </Flex>
              </Flex>
            </Fragment>
          )
        }

        <Stack w="100px">
          <Button
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
