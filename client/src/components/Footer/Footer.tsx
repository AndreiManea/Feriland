import React, { useState } from 'react';
import {
  Box,
  Grid,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import PageLink from '../links/PageLink';
import SectionLabel from '../texts/SectionLabel';
import ContactLink from '../links/ContactLink';
import NormalLink from '../links/NormalLink';
import fullLogo from '../../assets/FullLogo.png';
import { useTranslation } from 'react-i18next';
import SocialLink from '../links/SocialLink';
import gramIcon from '../../assets/icons/instagram_icon.svg';
import tikTokIcon from '../../assets/icons/titktok_icon.svg';
import facebookIcon from '../../assets/icons/facebook_icon.svg';

const Footer: React.FC = () => {
  const [pageLinkHovered, setPageLinkHovered] = useState(0);
  const { t } = useTranslation();

  return (
    <Box
      w="100%"
      maxW="none"
      mx="auto"
      borderTop="1px solid rgba(0, 0, 0, 0.1)"
      background="rgb(234, 229, 223)"
    >
      <Grid
        columnGap="0"
        rowGap="0"
        templateRows="auto"
        templateColumns={{ base: '1fr', lg: '1fr 1fr 1fr' }}
        autoColumns="1fr"
      >
        {/* Logo Side */}
        <Box
          borderRight="1px solid rgba(0, 0, 0, 0.1)"
          py={{ base: '1.5rem', lg: '6rem' }}
          px={{ base: '1rem', lg: '2rem' }}
          gridRow={{ base: 2, lg: 1 }}
          textAlign={{ base: 'left', md: 'center', lg: 'left' }}
        >
          <Image
            mb="2rem"
            maxWidth={{ base: '95%', md: '50%', lg: '80%' }}
            src={fullLogo}
            alt="footer-logo"
          />
          <Heading
            fontFamily="'Kaftan Serif', sans-serif"
            fontSize="1.5rem"
            fontWeight="400"
            lineHeight="1.3"
          >
            © 2024
          </Heading>
          <Text
            as="p"
            mb="0"
            fontSize="1rem"
            lineHeight="1.5"
            fontFamily="'Satoshi', sans-serif"
            fontWeight="400"
          >
            {t('footer.reservedRights')}
          </Text>
        </Box>
        {/* Menu Side */}
        <VStack
          borderRight="1px solid rgba(0, 0, 0, 0.1)"
          justifyContent="flex-start"
          alignItems="flex-start"
          padding="6rem 0 4rem 4rem"
          spacing="0"
          display={{ base: 'none', lg: 'flex' }}
          gridRow={1}
        >
          <VStack px="0" borderTop="none" align="stretch">
            <SectionLabel title={t('footer.menu')} />
            <PageLink
              title={t('footer.home')}
              onMouseEnter={() => setPageLinkHovered(1)}
              onMouseLeave={() => setPageLinkHovered(0)}
              isHovered={pageLinkHovered === 1 || !pageLinkHovered}
              to="/"
            />
            <PageLink
              title={t('footer.masterVilla')}
              onMouseEnter={() => setPageLinkHovered(2)}
              onMouseLeave={() => setPageLinkHovered(0)}
              isHovered={pageLinkHovered === 2 || !pageLinkHovered}
              to="/master-villa"
            />
            <PageLink
              title={t('footer.discover')}
              onMouseEnter={() => setPageLinkHovered(3)}
              onMouseLeave={() => setPageLinkHovered(0)}
              isHovered={pageLinkHovered === 3 || !pageLinkHovered}
              to="/discover"
            />
          </VStack>
        </VStack>
        {/* Contact Side */}
        <Box padding={{ base: '2rem', lg: '6rem 0 4rem 4rem' }} gridRow={1}>
          <VStack
            alignItems={{ base: 'center', lg: 'flex-start' }}
            gap={{ base: '2.5rem', lg: '0' }}
          >
            <VStack
              gap="0.25rem"
              alignItems="center"
              display={{ base: 'flex', md: 'none' }}
            >
              <SectionLabel title={t('navbar.getSocial')} />
              <HStack gap="0.75rem">
                <SocialLink imgSrc={gramIcon} alt="Instagram" />
                <SocialLink imgSrc={tikTokIcon} alt="TikTok" />
                <SocialLink imgSrc={facebookIcon} alt="Facebook" />
              </HStack>
            </VStack>
            <HStack
              gap={{ base: '3.2rem', md: '5rem', lg: '0' }}
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <VStack alignItems="flex-start" spacing="0.5rem">
                <SectionLabel title="CONTACT" />
                <ContactLink
                  imgSrc="https://cdn.prod.website-files.com/65bcf5fac0f3634790a816fe/65fad30b44a22c4233d0b328_email_3894024.svg"
                  title="contact@feriland.com"
                />
                <ContactLink
                  imgSrc="https://cdn.prod.website-files.com/65bcf5fac0f3634790a816fe/65fad3ac0bf8677ba15127ae_telephone_3415136.svg"
                  title="0774 032 561"
                />
                <ContactLink
                  imgSrc="https://cdn.prod.website-files.com/65bcf5fac0f3634790a816fe/65fad3f532264920f42a4367_social_13670484.svg"
                  title="WhatsApp"
                />
              </VStack>
              <VStack
                gap="0.25rem"
                alignItems="center"
                display={{ base: 'none', md: 'flex', lg: 'none' }}
              >
                <SectionLabel title={t('navbar.getSocial')} />
                <HStack gap="0.75rem">
                  <SocialLink imgSrc={gramIcon} alt="Instagram" />
                  <SocialLink imgSrc={tikTokIcon} alt="TikTok" />
                  <SocialLink imgSrc={facebookIcon} alt="Facebook" />
                </HStack>
              </VStack>
              <VStack
                alignItems="flex-start"
                spacing="0.5rem"
                display={{ base: 'block', lg: 'none' }}
              >
                <SectionLabel title="LEGAL" />
                <VStack
                  textAlign="left"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing="0.5rem"
                  pt={{ base: '0.5rem', lg: '0' }}
                >
                  <NormalLink
                    title={t('footer.privacyPolicy')}
                    to="/privacy-policy"
                  />
                  <NormalLink
                    title={t('footer.termsAndConditions')}
                    to="terms-and-conditions"
                  />
                  <NormalLink title={t('footer.anpc')} to="/anpc" />
                  <NormalLink title={t('footer.anpcSol')} to="/anpc-sol" />
                </VStack>
              </VStack>
            </HStack>
          </VStack>
        </Box>
      </Grid>
      <Grid
        borderTop="1px solid rgba(0, 0, 0, 0.1)"
        gridTemplateColumns="1fr 1fr 1fr"
        display={{ base: 'none', lg: 'block' }}
      >
        <HStack
          padding="2rem 0 2rem 2rem"
          gap="2rem"
          gridArea="span 1 / span 2 / span 1 / span 2"
          borderRight="1px solid rgba(0, 0, 0, 0.1)"
        >
          <NormalLink title={t('footer.privacyPolicy')} to="/privacy-policy" />
          <NormalLink
            title={t('footer.termsAndConditions')}
            to="terms-and-conditions"
          />
          <NormalLink title={t('footer.anpc')} to="/anpc" />
          <NormalLink title={t('footer.anpcSol')} to="/anpc-sol" />
        </HStack>
      </Grid>
    </Box>
  );
};

export default Footer;
