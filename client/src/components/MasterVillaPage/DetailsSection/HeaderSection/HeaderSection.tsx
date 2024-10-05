import { Box, Heading, HStack } from '@chakra-ui/react';
import { SubText } from './Text';
import { useTranslation } from 'react-i18next';

const HeaderSection = () => {
  const { t } = useTranslation();

  return (
    <Box
      w={{ base: '100%', lg: 'auto' }}
      display={{ base: 'flex', lg: 'block' }}
      flexDirection={{ base: 'column', lg: undefined }}
      gap={{ base: '2rem', lg: undefined }}
    >
      <Heading
        as="h2"
        size={{ base: 'h3', md: 'h1', lg: 'h2' }}
        zIndex="2"
        my="0"
        maxW={{ base: 'auto', lg: '35rem' }}
        position="relative"
        color="black"
        textAlign={{ base: 'center', lg: 'left' }}
        width="100%"
        fontWeight="400"
      >
        {t('masterVilla.detailsLeftHeader')}
      </Heading>
      <HStack
        alignItems="center"
        justifyContent={{ base: 'center', lg: 'flex-start' }}
      >
        <SubText divider>{t('masterVilla.detailsLeftGuestsNr')}</SubText>
        <SubText divider>{t('masterVilla.detailsLeftRoomsNr')}</SubText>
        <SubText divider>{t('masterVilla.detailsLeftBathroom')}</SubText>
        <SubText>{t('masterVilla.detailsLeftHotTub')}</SubText>
      </HStack>
    </Box>
  );
};

export default HeaderSection;
