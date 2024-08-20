import { ReactNode } from 'react';
import { Box, Text } from '@chakra-ui/react';

interface TextProps {
  children: ReactNode;
  divider?: boolean;
}

export const SubText: React.FC<TextProps> = ({ children, divider }) => {
  return (
    <>
      <Text as="p" textAlign="left" mb="0" fontSize="1.1rem" fontWeight="400">
        {children}
      </Text>
      {divider ? (
        <Box
          width="0.3rem"
          height="0.3rem"
          backgroundColor="black"
          borderRadius="0.8rem"
        />
      ) : null}
    </>
  );
};
