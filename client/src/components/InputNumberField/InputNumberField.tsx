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
import { useEffect, useState } from 'react';

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
  const [numberValue, setNumberValue] = useState(defaultValue);

  const handlePlus = () => {
    if (numberValue !== maxValue) {
      setNumberValue(numberValue + 1);
    }
  };
  const handleMinus = () => {
    if (numberValue !== minValue) {
      setNumberValue(numberValue - 1);
    }
  };

  useEffect(() => {
    dispatch(
      setSelectedPersons({ ...selectedPersons, [customerType]: numberValue })
    );
  }, [numberValue]);

  return (
    <VStack alignItems="flex-start" gap={0} width="100%">
      <Heading
        fontSize={{ base: '1.1rem', md: '1.75rem', lg: '1.5rem' }}
        color="rgb(234, 229, 223)"
      >
        {label}
      </Heading>

      <NumberInput
        defaultValue={numberValue}
        value={numberValue}
        max={maxValue}
        min={minValue}
        keepWithinRange={true}
        width="100%"
        background="rgba(0,0,0,.25)"
        size="lg"
        isReadOnly
      >
        <NumberInputField
          color="rgb(234, 229, 223)"
          _focusVisible={{
            borderColor: 'rgb(234, 229, 223)',
            boxShadow: '0 0 0 1px rgb(234, 229, 223)',
          }}
          fontSize={{ base: '2rem', md: '2.5rem', lg: '2.5rem' }}
          height={{ base: '6rem', lg: '4.5rem' }}
          textAlign="center"
          pl={{ base: 0 }}
          pr={{ base: '3rem' }}
        />
        <NumberInputStepper
          width={{ base: '3rem', lg: '4rem' }}
          height={{ base: '6rem', lg: '4.5rem' }}
        >
          <NumberIncrementStepper
            fontSize={{ base: '1.25rem', md: '1.5rem', lg: '1.5rem' }}
            color="rgb(234, 229, 223)"
            onClick={handlePlus}
          />
          <NumberDecrementStepper
            fontSize={{ base: '1.25rem', md: '1.5rem', lg: '1.5rem' }}
            color="rgb(234, 229, 223)"
            onClick={handleMinus}
          />
        </NumberInputStepper>
      </NumberInput>
    </VStack>
  );
};

export default InputNumberField;
