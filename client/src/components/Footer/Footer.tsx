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

const Footer: React.FC = () => {
  const [pageLinkHovered, setPageLinkHovered] = useState(0);

  return (
    <Box
      w="100%"
      maxW="none"
      mx="auto"
      borderTop="1px solid rgba(0, 0, 0, 0.1)"
    >
      <Grid
        columnGap="0"
        rowGap="0"
        templateRows="auto"
        templateColumns="1fr 1fr 1fr"
        autoColumns="1fr"
      >
        <Box borderRight="1px solid rgba(0, 0, 0, 0.1)" py="6rem" px="2rem">
          <Image
            mb="2rem"
            maxWidth="70%"
            src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65faca4ebd87778858a47310_Logo.svg"
            alt="footer-logo"
            loading="lazy"
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
            textAlign="left"
            fontWeight="400"
          >
            Feriland S.R.L. All rights reserved.
          </Text>
        </Box>
        <VStack
          borderRight="1px solid rgba(0, 0, 0, 0.1)"
          justifyContent="flex-start"
          alignItems="flex-start"
          padding="6rem 0 4rem 4rem"
          spacing="0"
        >
          <VStack px="0" borderTop="none" align="stretch">
            <SectionLabel title="MENU" />
            <PageLink
              title="Home"
              onMouseEnter={() => setPageLinkHovered(1)}
              onMouseLeave={() => setPageLinkHovered(0)}
              isHovered={pageLinkHovered === 1 || !pageLinkHovered}
            />
            <PageLink
              title="Master Cabin"
              onMouseEnter={() => setPageLinkHovered(2)}
              onMouseLeave={() => setPageLinkHovered(0)}
              isHovered={pageLinkHovered === 2 || !pageLinkHovered}
            />
            <PageLink
              title="Discover"
              onMouseEnter={() => setPageLinkHovered(3)}
              onMouseLeave={() => setPageLinkHovered(0)}
              isHovered={pageLinkHovered === 3 || !pageLinkHovered}
            />
          </VStack>
        </VStack>
        <Box padding="6rem 0 4rem 4rem">
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
        </Box>
      </Grid>
      <Grid
        borderTop="1px solid rgba(0, 0, 0, 0.1)"
        gridTemplateColumns="1fr 1fr 1fr"
      >
        <HStack
          padding="2rem 0 2rem 2rem"
          gap="2rem"
          gridArea="span 1 / span 2 / span 1 / span 2"
          borderRight="1px solid rgba(0, 0, 0, 0.1)"
        >
          <NormalLink title="Privacy Policy" />
          <NormalLink title="Terms and Conditions" />
          <NormalLink title="ANPC" />
          <NormalLink title="ANPC sol" />
        </HStack>
        <HStack justifyContent="flex-start" padding="2rem 0 2rem 4rem">
          <Text as="p" m="0" fontSize="1rem" letterSpacing="0">
            Feriland S.R.L. All rights reserved.
          </Text>
        </HStack>
      </Grid>
    </Box>
  );
};

export default Footer;
