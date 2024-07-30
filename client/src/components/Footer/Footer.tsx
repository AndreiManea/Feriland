import React, { useState } from 'react';
import {
  LegalLinksContainer,
  LegalLinksGrid,
  LinksLeft,
  LinksRight,
  SecondaryLink,
} from './Footer.styled';
import { HoverLine } from '../Navbar/Navbar.styled';
import {
  Box,
  Grid,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Link as ChakraLink,
} from '@chakra-ui/react';

const Footer: React.FC = () => {
  const [pageLinkHovered, setPageLinkHovered] = useState(0);

  return (
    <Box
      w="100%"
      maxW="none"
      mx="auto"
      px="2.08em"
      borderTop="1px solid rgba(0, 0, 0, 0.1)"
    >
      <Grid
        columnGap="0px"
        rowGap="0px"
        templateRows="auto"
        templateColumns="1fr 1fr 1fr"
        autoColumns="1fr"
      >
        <Box borderRight="1px solid rgba(0, 0, 0, 0.1)" py="6rem" pr="2rem">
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

            {/* Move text to PageLink component */}
            <PageLink
              title="Home"
              onMouseEnter={() => setPageLinkHovered(1)}
              onMouseLeave={() => setPageLinkHovered(0)}
              isHovered={pageLinkHovered === 1 || !pageLinkHovered}
            />
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
          </VStack>
        </VStack>
        <Box padding="6rem 0 4rem 4rem">
          <VStack alignItems="flex-start" spacing="0.5rem">
            <SectionLabel title="CONTACT" />

            <HStack
              justifyContent="space-between"
              mb="0.5rem"
              alignItems="center"
            >
              <Image
                maxW="1.3rem"
                mr="1rem"
                src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65fad30b44a22c4233d0b328_email_3894024.svg"
                loading="lazy"
                alt=""
              />
              <ChakraLink
                href="#"
                textDecoration="none"
                position="relative"
                display="inline-block"
                pr="0.4rem"
                pb="0.2rem"
                fontSize="1rem"
                color="rgba(0, 0, 0, 0.8)"
                letterSpacing="0"
                textTransform="none"
                fontFamily="Satoshi, sans-serif"
                _after={{
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  height: '1px',
                  bg: 'black',
                  width: '0%',
                  transition: 'width 0.4s ease-in-out',
                }}
                _hover={{
                  _after: {
                    width: '100%',
                  },
                }}
              >
                <Text
                  as="p"
                  mb="0"
                  color="rgba(0, 0, 0, 0.8)"
                  letterSpacing="0"
                  textTransform="none"
                  fontFamily="Satoshi, sans-serif"
                  fontSize="1rem"
                >
                  contact@feriland.com
                </Text>
                {/* <HoverLine /> */}
              </ChakraLink>
            </HStack>
            <HStack
              justifyContent="space-between"
              mb="0.5rem"
              alignItems="center"
            >
              <Image
                maxW="1.3rem"
                mr="1rem"
                src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65fad3ac0bf8677ba15127ae_telephone_3415136.svg"
                loading="lazy"
                alt=""
              />
              <ChakraLink
                href="#"
                textDecoration="none"
                position="relative"
                display="inline-block"
                pr="0.4rem"
                pb="0.2rem"
                fontSize="1rem"
                color="rgba(0, 0, 0, 0.8)"
                letterSpacing="0"
                textTransform="none"
                fontFamily="Satoshi, sans-serif"
             
                
              >
                <Text
                  as="p"
                  mb="0"
                  color="rgba(0, 0, 0, 0.8)"
                  letterSpacing="0"
                  textTransform="none"
                  fontFamily="Satoshi, sans-serif"
                  fontSize="1rem"
                >
                  0774 032 561
                </Text>
                <HoverLine />
              </ChakraLink>
            </HStack>
            <HStack
              justifyContent="space-between"
              mb="0.5rem"
              alignItems="center"
            >
              <Image
                maxW="1.3rem"
                mr="1rem"
                src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65fad3f532264920f42a4367_social_13670484.svg"
                loading="lazy"
                alt=""
              />
              <ChakraLink
                href="#"
                textDecoration="none"
                position="relative"
                display="inline-block"
                pr="0.4rem"
                pb="0.2rem"
                fontSize="1rem"
                color="rgba(0, 0, 0, 0.8)"
                letterSpacing="0"
                textTransform="none"
                fontFamily="Satoshi, sans-serif"
                _after={{
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  height: '1px',
                  bg: 'black',
                  width: '0%',
                  transition: 'width 0.3s ease',
                }}
                _hover={{
                  _after: {
                    width: '100%',
                  },
                }}
              >
                <Text
                  as="p"
                  mb="0"
                  color="rgba(0, 0, 0, 0.8)"
                  letterSpacing="0"
                  textTransform="none"
                  fontFamily="Satoshi, sans-serif"
                  fontSize="1rem"
                >
                  WhatsApp
                </Text>
                <HoverLine />
              </ChakraLink>
            </HStack>
          </VStack>
        </Box>
      </Grid>
      <LegalLinksContainer>
        <LegalLinksGrid>
          <LinksLeft>
            <SecondaryLink>
              <Text
                as="p"
                mb="0"
                color="rgba(0, 0, 0, 0.8)"
                letterSpacing="0"
                textTransform="none"
                fontWeight="400"
                fontFamily="Satoshi, sans-serif"
                fontSize="0.9rem"
              >
                Privacy Policy
              </Text>
              <HoverLine />
            </SecondaryLink>
            <SecondaryLink>
              <Text
                as="p"
                mb="0"
                color="rgba(0, 0, 0, 0.8)"
                letterSpacing="0"
                textTransform="none"
                fontWeight="400"
                fontFamily="Satoshi, sans-serif"
                fontSize="0.9rem"
              >
                Terms and Conditions
              </Text>
              <HoverLine />
            </SecondaryLink>
            <SecondaryLink>
              <Text
                as="p"
                mb="0"
                color="rgba(0, 0, 0, 0.8)"
                letterSpacing="0"
                textTransform="none"
                fontWeight="400"
                fontFamily="Satoshi, sans-serif"
                fontSize="0.9rem"
              >
                ANPC
              </Text>
              <HoverLine />
            </SecondaryLink>
            <SecondaryLink>
              <Text
                as="p"
                mb="0"
                color="rgba(0, 0, 0, 0.8)"
                letterSpacing="0"
                textTransform="none"
                fontWeight="400"
                fontFamily="Satoshi, sans-serif"
                fontSize="0.9rem"
              >
                ANPC sol
              </Text>
              <HoverLine />
            </SecondaryLink>
          </LinksLeft>
          <LinksRight>
            <Text
              as="p"
              mb="0"
              fontSize="1em"
              lineHeight="1.5"
              fontFamily="'Satoshi', sans-serif"
              textAlign="left"
            >
              Feriland S.R.L. All rights reserved.
            </Text>
          </LinksRight>
        </LegalLinksGrid>
      </LegalLinksContainer>
    </Box>
  );
};

export default Footer;
