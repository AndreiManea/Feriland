import { Heading, Textarea, VStack } from '@chakra-ui/react';
import React from 'react';

interface InputTextAreaFieldProps {
  handleChange: (textAreaContent: string) => void;
  value: string;
}

const InputTextAreaField: React.FC<InputTextAreaFieldProps> = ({
  handleChange,
  value,
}) => {
  const onTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleChange(e.target.value);
  };

  return (
    <VStack alignItems="flex-start" gap={0} width="100%" mb="1rem">
      <Heading
        fontSize={{ base: '1.1rem', md: '1.4rem' }}
        color="rgb(234, 229, 223)"
        letterSpacing="1px"
      >
        Additional Info
      </Heading>
      <Textarea
        name="additionalInfo"
        value={value || ''}
        placeholder="Enter any additional information here"
        onChange={onTextAreaChange}
        width="100%"
        height="5rem"
        borderRadius="5px"
        color="white"
        fontSize={{ base: '1rem', md: '1.1rem' }}
        pt="0.75rem"
        background="rgba(0,0,0,.25)"
        _focusVisible={{
          borderColor: 'rgb(50, 28, 2)',
          boxShadow: '0 0 0 1px rgb(234, 229, 223)',
        }}
        _placeholder={{
          color: 'rgba(234, 229, 223, 0.6)',
          fontSize: { base: '1rem', md: '1.1rem' },
        }}
      />
      ;
    </VStack>
  );
};

export default InputTextAreaField;
