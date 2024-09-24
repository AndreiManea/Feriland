import { Box, Heading, HStack } from '@chakra-ui/react';
import { SubText } from './Text';
import { useTranslation } from 'react-i18next';

const HeaderSection = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Heading
        as="h2"
        size="h2"
        zIndex="2"
        my="0"
        maxW="35rem"
        position="relative"
        color="black"
        textAlign="left"
        width="100%"
        fontWeight="400"
      >
        {t('masterVilla.detailsLeftHeader')}
      </Heading>
      <HStack alignItems="center">
        <SubText divider>{t('masterVilla.detailsLeftGuestsNr')}</SubText>
        <SubText divider>{t('masterVilla.detailsLeftRoomsNr')}</SubText>
        <SubText divider>{t('masterVilla.detailsLeftBathroom')}</SubText>
        <SubText>{t('masterVilla.detailsLeftHotTub')}</SubText>
      </HStack>
    </Box>
  );
};

export default HeaderSection;
