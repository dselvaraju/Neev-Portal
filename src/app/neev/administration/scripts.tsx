import {
  Button,
  Flex,
  FormLabel,
  Select,
  Stack,
  Textarea,
  useColorModeValue,
} from '@chakra-ui/react';
import axios from 'axios';
import { HLabelSeparator } from 'components/separator/Separator';
import { Fragment, useEffect, useState } from 'react';

export const AdministrationScripts = () => {
  const [channel, setChannel] = useState('');
  const [selectedScript, setSelectedScript] = useState('');
  const [interfaces, setInterfaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showScriptsContent, setShowScriptsContent] = useState(false);

  const handleChannelSelection = (event) => {
    const value = event.target.value;

    setShowScriptsContent(!!value);
    setChannel(value);
  };

  const handleScriptTypeSelection = (e) =>
    setSelectedScript(e?.target?.value ?? '');

  const buttonTextColor = useColorModeValue('white', 'black');
  const buttonBackgroundColor = useColorModeValue('black', 'white');

  useEffect(() => {
    let config = {
      method: 'get',
      url: `/${process.env.NEXT_PUBLIC_API_BASE_PATH}/interfaces`,
    };

    axios
      .request(config)
      .then((response) => {
        const { channels } = response?.data || {};

        setInterfaces(channels);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  loading && <div>Loading...</div>;

  return (
    <div>
      <Stack spacing={5}>
        <Flex
          direction="row"
          w="45%"
          justifyContent="start"
          paddingRight="1rem"
          alignItems="center"
        >
          <FormLabel w="150px" mb="0px" fontWeight="bold" whiteSpace="nowrap">
            Interface:
          </FormLabel>
          <Select
            value={channel || ''}
            placeholder="Select an Interface"
            w="40%"
            name="channelName"
            onChange={handleChannelSelection}
          >
            {interfaces?.map((interfaceItem) => (
              <option key={interfaceItem?.id} value={interfaceItem?.id}>
                {interfaceItem?.name}
              </option>
            ))}
          </Select>
        </Flex>

        {showScriptsContent && (
          <Fragment>
            <Flex
              direction="row"
              w="45%"
              justifyContent="start"
              paddingRight="1rem"
              alignItems="center"
            >
              <FormLabel
                w="150px"
                mb="0px"
                fontWeight="bold"
                whiteSpace="nowrap"
              >
                Script:
              </FormLabel>
              <Select
                value={selectedScript || ''}
                placeholder="Select a script type"
                w="40%"
                name="scriptType"
                onChange={handleScriptTypeSelection}
              >
                {['Deploy', 'Undeploy', 'Preprocessor', 'Postprocessor'].map(
                  (type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ),
                )}
              </Select>
            </Flex>
            <Flex
              direction="row"
              w="45%"
              justifyContent="start"
              paddingRight="1rem"
              alignItems="center"
            >
              <Textarea
                size="lg"
                h="650px"
                placeholder="// Custom script content..."
              />
            </Flex>
            <Stack w="100px">
              <Button
                textColor={buttonTextColor}
                backgroundColor={buttonBackgroundColor}
                borderRadius="0px"
              >
                Save
              </Button>
            </Stack>
          </Fragment>
        )}
      </Stack>
    </div>
  );
};
