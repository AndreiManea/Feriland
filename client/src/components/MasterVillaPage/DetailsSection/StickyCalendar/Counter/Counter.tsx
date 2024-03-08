import { MinusIcon, AddIcon } from '@chakra-ui/icons';
import { Button, HStack, Input, useNumberInput, Text } from '@chakra-ui/react';

const Counter = ({
  label,
  value,
  setValue,
}: {
  label: string;
  value: string | number | undefined;
  setValue: (value: number) => void;
}) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      value,
      min: 0,
      onChange: (valueAsString, valueAsNumber) => setValue(valueAsNumber),
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps({ isReadOnly: true });

  return (
    <HStack alignItems="center" justifyContent="space-between" w="full" p={0}>
      <Text flexShrink={0} m="0" flex={1} color="#222" fontSize="1rem">
        {label}
      </Text>
      <HStack
        flexShrink={1}
        flexGrow={1}
        flex={1}
        w="full"
        justifyContent="center"
        p={0}
      >
        <Button
          {...dec}
          size="sm"
          borderRadius="100%"
          background="none"
          opacity="0.43d3"
          color="#547c39"
          border="1px solid #547c39"
          height="32px"
          width="32px"
          _hover={{ background: 'transparent', opacity: 1 }}
        >
          <MinusIcon />
        </Button>
        <Input {...input} border="none" width="42px" />
        <Button
          {...inc}
          size="sm"
          borderRadius="100%"
          background="none"
          opacity="0.43d3"
          color="#547c39"
          border="1px solid #547c39"
          height="32px"
          width="32px"
          _hover={{ background: 'transparent', opacity: 1 }}
        >
          <AddIcon />
        </Button>
      </HStack>
    </HStack>
  );
};

export default Counter;
