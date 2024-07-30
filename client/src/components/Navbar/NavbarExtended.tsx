import { Box, HStack, VStack, Image } from '@chakra-ui/react';
import fullLogo from '../../assets/FullLogo.png';
import PageLink from '../links/PageLink';
import SectionLabel from '../texts/SectionLabel';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';
import NavbarMovieButton from './NavbarMovieButton';
import NormalLink from '../links/NormalLink';
import NavbarDivider from './NavbarDivider';
import ContactLink from '../links/ContactLink';
import SocialLink from '../links/SocialLink';
import { useState } from 'react';

const NavbarExtended = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  const [pageLinkHovered, setPageLinkHovered] = useState(0);
  return (
    <Box width={isMenuOpen ? '100%' : 0} height={isMenuOpen ? '100%' : 0}>
      <HStack
        backgroundColor="rgb(234, 229, 223)"
        opacity={isMenuOpen ? '1' : '0'}
        borderRadius="1.438rem"
        transition={!isMenuOpen ? 'none' : '0.3s'}
        justifyContent="flex-start"
      >
        {/* Left Side */}
        <VStack
          p="1.75rem"
          alignItems="flex-start"
          gap="3.5rem"
          width="100%"
          position="relative"
          flex="1"
          display={isMenuOpen ? 'flex' : 'none'}
        >
          <Box>
            <SectionLabel title="MENU" />
            <PageLink
              title="Master Cabin"
              onMouseEnter={() => setPageLinkHovered(1)}
              onMouseLeave={() => setPageLinkHovered(0)}
              isHovered={pageLinkHovered === 1 || !pageLinkHovered}
            />
            <PageLink
              title="Discover"
              onMouseEnter={() => setPageLinkHovered(2)}
              onMouseLeave={() => setPageLinkHovered(0)}
              isHovered={pageLinkHovered === 2 || !pageLinkHovered}
            />
            <PageLink
              title="Contact"
              onMouseEnter={() => setPageLinkHovered(3)}
              onMouseLeave={() => setPageLinkHovered(0)}
              isHovered={pageLinkHovered === 3 || !pageLinkHovered}
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
          display={isMenuOpen ? 'flex' : 'none'}
        >
          <Image src={fullLogo} maxWidth="70%" />
          <HStack width="100%" justifyContent="space-around">
            <VStack
              gap="0.438rem"
              alignItems="flex-start"
              justifyContent="flex-start"
            >
              <SectionLabel title="DISCOVER" />
              <NormalLink title="History" />
              <NormalLink title="Local Wine" />
              <NormalLink title="Bike Trails" />
            </VStack>
            <VStack
              gap="0.438rem"
              alignItems="flex-start"
              justifyContent="flex-start"
            >
              <SectionLabel title="RELAX" />
              <NormalLink title="Ghioroc Lake" />
              <NormalLink title="Sauna" />
              <NormalLink title="Hot Tub" />
            </VStack>
            <NavbarDivider />
          </HStack>
        </VStack>
        {/* Right Side */}
        <VStack
          width="100%"
          flex="1"
          p="4rem 1.75rem 1.75rem 1.75rem"
          display={isMenuOpen ? 'flex' : 'none'}
          alignItems="flex-start"
          gap="3.5rem"
        >
          {/* CONTACT */}
          <VStack gap="0.5rem" alignItems="flex-start">
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
          {/* SOCIAL */}
          <VStack gap="0.438rem" alignItems="flex-start">
            <SectionLabel title="GET SOCIAL" />
            <HStack gap="0.875rem">
              <SocialLink
                imgSrc="https://cdn.prod.website-files.com/65bcf5fac0f3634790a816fe/65fc28a30fcf9583aa4319ab_instagram_1077042.svg"
                alt="Instagram"
              />
              <SocialLink
                imgSrc="https://cdn.prod.website-files.com/65bcf5fac0f3634790a816fe/65fc29f9bad6b884eb6ab808_video_15047576.svg"
                alt="TikTok"
              />
              <SocialLink
                imgSrc="https://cdn.prod.website-files.com/65bcf5fac0f3634790a816fe/65fc2a1088745fc10c184a30_facebook_2175193.svg"
                alt="Facebook"
              />
            </HStack>
          </VStack>
          {/* LANGUAGE */}
          <VStack gap="0.438rem" alignItems="flex-start">
            <SectionLabel title="SELECT LANGUAGE" />
            <LanguageSwitch />
          </VStack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default NavbarExtended;
