import { HStack, Switch, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface LanguageSwitchProps {
  darkNavbar: boolean;
}
const LanguageSwitch = ({ darkNavbar }: LanguageSwitchProps) => {
  const [isEnglish, setIsEnglish] = useState(true);
  // Dynamically apply the background color for the checked state
  const dynamicStyles = {
    backgroundColor: !darkNavbar ? 'black' : 'rgba(255, 255, 255, 0.3)',
  };

  return (
    <HStack gap="1rem" alignItems="center">
      <Text
        fontSize="1rem"
        m="0"
        letterSpacing="0"
        color={
          isEnglish
            ? 'rgb(84, 124, 57)'
            : !darkNavbar
              ? 'rgba(0, 0, 0, 0.3)'
              : 'rgba(255, 255, 255, 0.3)'
        }
        fontWeight={isEnglish ? 'bold' : 'normal'}
        transition="ease-in-out 0.3s"
        userSelect="none"
      >
        EN
      </Text>
      <Switch
        onChange={() => setIsEnglish(!isEnglish)}
        size="lg"
        sx={{
          '.chakra-switch__track': {
            // Target the internal track using the class name
            bg: 'rgb(84, 124, 57)', // Default track color
            _checked: dynamicStyles, // Dynamic checked track color
          },
        }}
      />
      <Text
        fontSize="1rem"
        m="0"
        letterSpacing="0"
        color={
          isEnglish
            ? !darkNavbar
              ? 'rgba(0, 0, 0, 0.3)'
              : 'rgba(255, 255, 255, 0.3)'
            : !darkNavbar
              ? 'black'
              : 'white'
        }
        fontWeight={isEnglish ? 'normal' : 'bold'}
        transition="ease-in-out 0.3s"
        userSelect="none"
      >
        RO
      </Text>
    </HStack>
  );
};

export default LanguageSwitch;
