import {
  VStack,
  Heading,
  Input,
  FormErrorMessage,
  FormControl,
  InputProps,
} from '@chakra-ui/react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface InputTextFieldProps extends InputProps {
  label: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
}

const InputTextField = ({
  label,
  register,
  error,
  ...inputProps
}: InputTextFieldProps) => {
  return (
    <FormControl isInvalid={!!error}>
      <VStack alignItems="flex-start" gap={0} width="100%">
        <Heading
          fontSize={{ base: '1rem', lg: '1.2rem' }}
          color="rgb(234, 229, 223)"
          letterSpacing="1px"
        >
          {label}
        </Heading>
        <Input
          fontSize={{ base: '0.9rem', lg: '1rem' }}
          width="100%"
          background="rgba(0,0,0,.25)"
          placeholder={label}
          _focusVisible={{
            borderColor: 'rgb(50, 28, 2)',
            boxShadow: '0 0 0 1px rgb(234, 229, 223)',
          }}
          _placeholder={{
            color: 'rgba(234, 229, 223, 0.6)',
          }}
          {...register}
          {...inputProps}
        />
        {error && (
          <FormErrorMessage fontSize={{ base: '0.7rem', lg: '0.875rem' }}>
            {error.message}
          </FormErrorMessage>
        )}
      </VStack>
    </FormControl>
  );
};

export default InputTextField;
