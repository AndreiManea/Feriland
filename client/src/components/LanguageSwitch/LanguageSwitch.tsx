import { HStack, Switch, Text } from '@chakra-ui/react';
import { useState } from 'react';
import en from '../../translations/en.json';
import ro from '../../translations/ro.json';

interface LanguageSwitchProps {
  darkNavbar: boolean;
}

const LanguageSwitch = ({ darkNavbar }: LanguageSwitchProps) => {
  const [currentLanguage, setCurrentLanguage] = useState(en);
  const isEnglish = (currentLanguage === en);

  const dynamicStyles = {
    backgroundColor: !darkNavbar ? 'black' : 'rgba(255, 255, 255, 0.3)',
  };

  const handleLanguageSwitch = () => {
    if (isEnglish) {
      setCurrentLanguage(ro);
    } else {
      setCurrentLanguage(en);
    }
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
      >
        EN
      </Text>

      {/* Switch to toggle between languages */}
      <Switch
        isChecked={!isEnglish}
        onChange={handleLanguageSwitch}
        size="lg"
        sx={{
          '.chakra-switch__track': {
            bg: 'rgb(84, 124, 57)',
            _checked: dynamicStyles,
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
        fontWeight={!isEnglish ? 'bold' : 'normal'}
        transition="ease-in-out 0.3s"
      >
        RO
      </Text>
    </HStack>
  );
};

export default LanguageSwitch;
