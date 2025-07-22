import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  FormLabel,
  IconButton,
  Input,
  Select,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { HLabelSeparator } from 'components/separator/Separator';
import { useEffect, useState } from 'react';

export const AdministrationRules = () => {
  const bgSeparator = useColorModeValue('secondaryGray.400', '#323B5D');

  const ruleConditions = [
    'Exists',
    'Is not empty',
    'Matches regular expression',
    'Does not match regular expression',
    'Has unique value within range',
    'Has identical value within range',
  ];

  const formFields: { [x: string]: any } = {};

  const [formInputs, setFormInputs] = useState(formFields);
  const [conditions, setConditions] = useState([]);

  const addCondition = (index: number, value: string) => {
    // add a new condition after the index
    const newConditions = [...conditions];
    newConditions.splice(index + 1, 0, { value });
    console.log('🚀 ~ addCondition ~ newConditions:', newConditions);
    setConditions(newConditions);
  };

  const handleConditionChange = (index: number, value: string) => {
    const newConditions = [...conditions];
    newConditions[index] = { value };
    setConditions(newConditions);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Rules form saved: ', { formInputs, conditions });
  };

  const handleCancel = (event) => {
    event.preventDefault();
    console.log('Rules form cancelled: ', formInputs);
  };

  useEffect(() => {
    setConditions([{ value: '' }]);
  }, []);

  const iconButtonColorHook = useColorModeValue('black', 'white');

  return (
    <div>
      <Stack spacing={5}>
        <HLabelSeparator
          label="Validation Rules/New"
          labelSize="1.2rem"
          mb="30px"
          bg={bgSeparator}
          mt="0px"
        />

        {/* TODO: multiple (rules+condition) combiinations */}

        <Flex direction="row" w="100%" justifyContent="space-between">
          <Flex
            direction="row"
            w="45%"
            justifyContent="space-between"
            paddingRight="1rem"
            alignItems="center"
          >
            <FormLabel mb="0px" fontWeight="bold" whiteSpace="nowrap">
              Rule Name:
            </FormLabel>
            <Input
              w="40%"
              name="ruleName"
              textColor={useColorModeValue('black', 'white')}
              fontWeight="bold"
              variant="outline"
              placeholder="Rule Name"
              onChange={handleChange}
            />
          </Flex>
        </Flex>

        {conditions.map((condition, index) => (
          <Flex
            key={index}
            direction="row"
            w="45%"
            justifyContent="space-between"
            paddingRight="1rem"
            alignItems="center"
          >
            <FormLabel mb="0px" fontWeight="bold" whiteSpace="nowrap">
              {index === 0 ? 'Connector Type' : ''}
            </FormLabel>
            <Flex direction="row" w="40%" justifyContent="space-between">
              <Select
                value={conditions[index].value || ''}
                placeholder="Select Condition"
                name="condition"
                marginRight="1rem"
                onChange={(e) => {
                  const value = e.target.value;
                  handleConditionChange(index, value);
                }}
              >
                {ruleConditions.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </Select>
              <IconButton
                aria-label="Add Condition"
                textColor={iconButtonColorHook}
                borderColor={iconButtonColorHook}
                onClick={() => addCondition(index, '')}
                variant="outline"
                borderRadius="0px"
                marginRight="1rem"
                icon={<AddIcon />}
              />
              {Object.keys(conditions).length > 1 && (
                <IconButton
                  aria-label="Remove Condition"
                  textColor={iconButtonColorHook}
                  borderColor={iconButtonColorHook}
                  onClick={() => {
                    const newConditions = [...conditions];
                    newConditions.splice(index, 1);
                    setConditions(newConditions);
                  }}
                  variant="outline"
                  borderRadius="0px"
                  icon={<MinusIcon />}
                />
              )}
            </Flex>
          </Flex>
        ))}

        <HLabelSeparator mb="30px" bg={bgSeparator} mt="0px" />

        <Flex direction="row" w="40%" justifyContent="center">
          <Button
            textColor={useColorModeValue('white', 'black')}
            backgroundColor={useColorModeValue('black', 'white')}
            borderRadius="0px"
            onClick={handleSubmit}
            marginRight="1rem"
          >
            Save
          </Button>
          <Button
            textColor={useColorModeValue('black', 'white')}
            borderColor={useColorModeValue('black', 'white')}
            variant="outline"
            borderRadius="0px"
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </Flex>
      </Stack>
    </div>
  );
};
