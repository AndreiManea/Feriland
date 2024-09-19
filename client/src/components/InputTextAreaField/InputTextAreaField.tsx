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
      <Heading fontSize="1.2rem" color="rgb(234, 229, 223)" letterSpacing="1px">
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
        background="rgba(0,0,0,.25)"
        _focusVisible={{
          borderColor: 'rgb(50, 28, 2)',
          boxShadow: '0 0 0 1px rgb(234, 229, 223)',
        }}
        _placeholder={{
          color: 'rgba(234, 229, 223, 0.6)',
        }}
      />
      ;
    </VStack>
  );
};

export default InputTextAreaField;