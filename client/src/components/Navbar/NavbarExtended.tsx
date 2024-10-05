import { Box, HStack, VStack, Image, Link, Stack } from '@chakra-ui/react';
import fullLogo from '../../assets/FullLogo.png';
import gramIcon from '../../assets/icons/instagram_icon.svg';
import tikTokIcon from '../../assets/icons/titktok_icon.svg';
import facebookIcon from '../../assets/icons/facebook_icon.svg';
import PageLink from '../links/PageLink';
import SectionLabel from '../texts/SectionLabel';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';
import NavbarMovieButton from './NavbarMovieButton';
import NormalLink from '../links/NormalLink';
import NavbarDivider from './NavbarDivider';
import ContactLink from '../links/ContactLink';
import SocialLink from '../links/SocialLink';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const NavbarExtended = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  const { t } = useTranslation();
  const [pageLinkHovered, setPageLinkHovered] = useState(0);

  return (
    <Box width={isMenuOpen ? '100%' : 0} height={isMenuOpen ? '100%' : 0}>
      <Stack
        backgroundColor={'rgb(234, 229, 223)'}
        opacity={isMenuOpen ? '1' : '0'}
        borderRadius="1.438rem"
        transition={!isMenuOpen ? 'none' : '0.3s ease-in-out'}
        justifyContent="flex-start"
        direction={{ base: 'column', md: 'row' }}
      >
        {/* Left Side */}
        <VStack
          p={{ base: '1.2rem 1.2rem 0.25rem 1.2rem', md: '1.75rem' }}
          alignItems="flex-start"
          gap={{ base: '0.5rem', md: '3.5rem' }}
          width="100%"
          position="relative"
          flex="1"
          display={isMenuOpen ? 'flex' : 'none'}
        >
          <Box>
            <SectionLabel title={t('navbar.menu')} />
            <PageLink
              title={t('navbar.masterVilla')}
              onMouseEnter={() => setPageLinkHovered(1)}
              onMouseLeave={() => setPageLinkHovered(0)}
              isHovered={pageLinkHovered === 1 || !pageLinkHovered}
              to="/master-villa"
            />
            <PageLink
              title={t('navbar.discover')}
              onMouseEnter={() => setPageLinkHovered(2)}
              onMouseLeave={() => setPageLinkHovered(0)}
              isHovered={pageLinkHovered === 2 || !pageLinkHovered}
              to="/discover"
            />
            <PageLink
              title={t('navbar.contact')}
              onMouseEnter={() => setPageLinkHovered(3)}
              onMouseLeave={() => setPageLinkHovered(0)}
              isHovered={pageLinkHovered === 3 || !pageLinkHovered}
              to="/contact"
            />
          </Box>
          <NavbarDivider />
          <NavbarMovieButton />
        </VStack>

        {/* Center Side */}
        <VStack
          width="100%"
          flex="1.5"
          p="1.75rem"
          gap="5rem"
          position="relative"
          display={{ base: 'none', xl: isMenuOpen ? 'flex' : 'none' }}
        >
          <Link href="/" textAlign="center">
            <Image
              src={fullLogo}
              maxWidth="70%"
              transition="0.3s ease-in-out"
            />
          </Link>
          <HStack width="100%" justifyContent="space-around" spacing="0.5rem">
            {/* Discover Section */}
            <VStack
              gap="0.438rem"
              alignItems="flex-start"
              justifyContent="flex-start"
              flex="1"
              maxWidth="9rem"
            >
              <SectionLabel title={t('navbar.discoverSection')} />
              <NormalLink title={t('navbar.history')} to="/discover/history" />
              <NormalLink
                title={t('navbar.localWine')}
                to="/discover/local-wine"
              />
              <NormalLink
                title={t('navbar.bikeTrails')}
                to="/discover/bike-trails"
              />
            </VStack>

            {/* Relax Section */}
            <VStack
              gap="0.438rem"
              alignItems="flex-start"
              justifyContent="flex-start"
              flex="1"
              maxWidth="9rem"
            >
              <SectionLabel title={t('navbar.relaxSection')} />
              <NormalLink
                title={t('navbar.ghiorocLake')}
                to="/discover/ghioroc-lake"
              />
              <NormalLink title={t('navbar.sauna')} to="/discover/sauna" />
              <NormalLink title={t('navbar.hotTub')} to="/discover/hot-tub" />
            </VStack>

            {/* Divider */}
            <NavbarDivider />
          </HStack>
        </VStack>

        {/* Right Side */}
        <VStack
          width="100%"
          flex="1"
          p={{
            base: '0 1.75rem 1.25rem 1.75rem',
            md: '4rem 1.75rem 1.75rem 1.75rem',
          }}
          display={isMenuOpen ? 'flex' : 'none'}
          alignItems="flex-start"
          gap={{ base: '1rem', md: '3.5rem' }}
        >
          {/* CONTACT */}
          <VStack
            gap="0.5rem"
            alignItems="flex-start"
            display={{ base: 'none', md: 'flex' }}
          >
            <SectionLabel title={t('navbar.contactSection')} />
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

          {/* SOCIAL */}
          <VStack
            gap="0.438rem"
            alignItems="flex-start"
            display={{ base: 'none', md: 'flex' }}
          >
            <SectionLabel title={t('navbar.getSocial')} />
            <HStack gap="0.875rem">
              <SocialLink imgSrc={gramIcon} alt="Instagram" />
              <SocialLink imgSrc={tikTokIcon} alt="TikTok" />
              <SocialLink imgSrc={facebookIcon} alt="Facebook" />
            </HStack>
          </VStack>

          {/* LANGUAGE */}
          <VStack gap="0.438rem" alignItems="flex-start">
            <SectionLabel title={t('navbar.selectLanguage')} />
            <LanguageSwitch />
          </VStack>
        </VStack>
      </Stack>
    </Box>
  );
};

export default NavbarExtended;
