import {
  VStack,
  Heading,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { setSelectedPersons } from '../../redux/slices/bookingsSlice';
import { useAppSelector } from '../../redux/hooks';

const InputNumberField = ({
  label,
  defaultValue,
  minValue,
  maxValue,
  customerType,
}: {
  label: string;
  defaultValue: number;
  maxValue: number;
  minValue: number;
  customerType: 'adults' | 'children';
}) => {
  const { selectedPersons } = useAppSelector(state => state.bookings);
  const dispatch = useDispatch();

  const onInputChange = (value: string) => {
    dispatch(
      setSelectedPersons({ ...selectedPersons, [customerType]: Number(value) })
    );
  };

  return (
    <VStack alignItems="flex-start" gap={0} width="100%">
      <Heading fontSize="1.2rem" color="rgb(234, 229, 223)">
        {label}
      </Heading>

      <NumberInput
        onChange={valueString => onInputChange(valueString)}
        defaultValue={defaultValue}
        max={maxValue}
        min={minValue}
        keepWithinRange={true}
        width="100%"
        background="rgba(0,0,0,.25)"
      >
        <NumberInputField
          color="rgb(234, 229, 223)"
          _focusVisible={{
            borderColor: 'rgb(234, 229, 223)',
            boxShadow: '0 0 0 1px rgb(234, 229, 223)',
          }}
        />
        <NumberInputStepper>
          <NumberIncrementStepper color="rgb(234, 229, 223)" />
          <NumberDecrementStepper color="rgb(234, 229, 223)" />
        </NumberInputStepper>
      </NumberInput>
    </VStack>
  );
};

export default InputNumberField;
