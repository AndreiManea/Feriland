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
    <VStack alignItems="flex-start" gap={0} width="100%">
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
        color="black" 
        backgroundColor="white"
      />
      ;
    </VStack>
  );
};

export default InputTextAreaField;
