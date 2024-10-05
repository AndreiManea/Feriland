import { HStack, Switch, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setCurrentLanguage } from '../../redux/slices/bookingsSlice'; // Import the action from Redux
import { useAppSelector } from '../../redux/hooks';
import { BookingForm } from '../../types/form';

const LanguageSwitch = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  const { selectedLanguage } = useAppSelector(
    state => state.bookings.bookingFormData as BookingForm
  );
  const isEnglish = selectedLanguage === 'en';

  const handleLanguageSwitch = () => {
    const newLanguage = isEnglish ? 'ro' : 'en';
    i18n.changeLanguage(newLanguage);
    dispatch(setCurrentLanguage(newLanguage));
  };

  return (
    <HStack gap="1rem" alignItems="center">
      <Text
        fontSize="1rem"
        m="0"
        letterSpacing="0"
        color={
          isEnglish
            ? 'rgb(84, 124, 57)' // Green when English is active
            : 'rgba(0, 0, 0, 0.3)' // Gray when Romanian is active
        }
        fontWeight={isEnglish ? 'bold' : 'normal'}
        transition="ease-in-out 0.3s"
        userSelect="none"
      >
        EN
      </Text>

      {/* Switch to toggle between languages */}
      <Switch
        isChecked={!isEnglish} // Checked if Romanian is active
        onChange={handleLanguageSwitch} // Toggle languages on switch change
        size="lg"
        sx={{
          '.chakra-switch__track': {
            bg: 'rgb(84, 124, 57)', // Default track color
            _checked: {
              bg: 'black', // Track color when checked
            },
          },
        }}
      />

      <Text
        fontSize="1rem"
        m="0"
        letterSpacing="0"
        color={
          !isEnglish
            ? 'black' // Black when Romanian is active
            : 'rgba(0, 0, 0, 0.3)' // Gray when English is active
        }
        fontWeight={!isEnglish ? 'bold' : 'normal'}
        transition="ease-in-out 0.3s"
        userSelect="none"
      >
        RO
      </Text>
    </HStack>
  );
};

export default LanguageSwitch;
