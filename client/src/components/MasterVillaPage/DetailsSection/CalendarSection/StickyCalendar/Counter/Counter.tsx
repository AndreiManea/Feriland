import { MinusIcon, AddIcon } from '@chakra-ui/icons';
import { Button, HStack, Input, useNumberInput, Text } from '@chakra-ui/react';
import { styles } from './counter.styled';

interface CounterProps {
  label: string;
  value: string | number | undefined;
  setValue: (value: number) => void;
  maxValue: number;
  minValue: number;
}

const Counter: React.FC<CounterProps> = ({
  label,
  value,
  setValue,
  maxValue,
  minValue,
}) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      value,
      min: minValue,
      max: maxValue,
      onChange: (_, valueAsNumber) => setValue(valueAsNumber),
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps({ isReadOnly: true });

  return (
    <HStack sx={styles.hStackContainer}>
      <Text sx={styles.labelText}>{label}</Text>
      <HStack sx={styles.hStackInner}>
        <Button {...dec} sx={styles.button}>
          <MinusIcon />
        </Button>
        <Input {...input} sx={styles.input} />
        <Button {...inc} sx={styles.button}>
          <AddIcon />
        </Button>
      </HStack>
    </HStack>
  );
};

export default Counter;
