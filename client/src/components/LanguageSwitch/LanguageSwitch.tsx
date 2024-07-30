import { HStack, Switch, Text } from '@chakra-ui/react';
import { useState } from 'react';

const LanguageSwitch = () => {
  const [isEnglish, setIsEnglish] = useState(true);

  return (
    <HStack gap="1rem" alignItems="center">
      <Text
        fontSize="1rem"
        m="0"
        letterSpacing="0"
        color={isEnglish ? 'rgb(84, 124, 57)' : 'rgba(0, 0, 0, 0.3)'}
        fontWeight={isEnglish ? 'bold' : 'normal'}
        transition="ease-in-out 0.3s"
      >
        EN
      </Text>
      <Switch onChange={() => setIsEnglish(!isEnglish)} size="lg" />
      <Text
        fontSize="1rem"
        m="0"
        letterSpacing="0"
        color={isEnglish ? 'rgba(0, 0, 0, 0.3)' : 'black'}
        fontWeight={isEnglish ? 'normal' : 'bold'}
        transition="ease-in-out 0.3s"
      >
        RO
      </Text>
    </HStack>
  );
};

export default LanguageSwitch;
