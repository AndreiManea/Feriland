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
    <HStack alignItems="center" justifyContent="space-between" w="full">
      <Text flexShrink={0} m="0" flex={1} color="#222" fontSize="lg">
        {label}
      </Text>
      <HStack
        flexShrink={1}
        flexGrow={1}
        flex={1}
        w="full"
        justifyContent="space-evenly"
      >
        <Button
          {...dec}
          size="sm"
          borderRadius="100%"
          background="none"
          border="1px solid #547c39"
        >
          <MinusIcon color="#547c39" />
        </Button>
        <Input {...input} border="none" width="42px" />
        <Button
          {...inc}
          size="sm"
          borderRadius="100%"
          background="none"
          border="1px solid #547c39"
        >
          <AddIcon color="#547c39" />
        </Button>
      </HStack>
    </HStack>
  );
};

export default Counter;
