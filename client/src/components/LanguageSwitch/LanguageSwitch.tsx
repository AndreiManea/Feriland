import { HStack, Switch, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

interface LanguageSwitchProps {
  darkNavbar: boolean;
}

const LanguageSwitch = ({ darkNavbar }: LanguageSwitchProps) => {
  const { i18n } = useTranslation(); 
  const [isEnglish, setIsEnglish] = useState(i18n.language === 'en'); 

  // Dynamically apply the background color for the checked state
  const dynamicStyles = {
    backgroundColor: !darkNavbar ? 'black' : 'rgba(255, 255, 255, 0.3)',
  };

  // Function to switch languages
  const handleLanguageSwitch = () => {
    if (isEnglish) {
      i18n.changeLanguage('ro'); 
      setIsEnglish(false);
    } else {
      i18n.changeLanguage('en');  
      setIsEnglish(true);
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
          !isEnglish
            ? 'black'  
            : !darkNavbar
              ? 'rgba(0, 0, 0, 0.3)'  
              : 'rgba(255, 255, 255, 0.3)'
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