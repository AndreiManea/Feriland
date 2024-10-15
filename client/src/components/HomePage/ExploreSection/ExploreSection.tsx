import { useEffect, useState } from 'react';
import {
  Box,
  HStack,
  VStack,
  Image,
  Heading,
  Text,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { interpolateColor } from '../../../utils/helperFunctions.utils';
import HoverButtonWrapper from '../../HoverButtonWrapper/HoverButtonWrapper';
import { useAppDispatch } from '../../../redux/hooks';
import { useTranslation } from 'react-i18next';
import behindTheScenesImg from '../../../assets/BehindTheScenes.webp';
import { setBookingDrawerOpen } from '../../../redux/slices/bookingsDrawerSlice';

const ExploreSection: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const initialCircleSize = useBreakpointValue({
    base: '15',
    lg: '25',
  });

  const { t } = useTranslation();

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const section = document.getElementById('explore-section');

    if (section) {
      const sectionOffsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      // Adjusted to start when the section is fully visible in the viewport
      const startEffectPosition =
        sectionOffsetTop - (windowHeight - sectionHeight / 2);

      // Start expanding when the section is fully in view
      if (
        scrollY >= startEffectPosition &&
        scrollY <= sectionOffsetTop + sectionHeight
      ) {
        setIsSectionVisible(true);

        // Increase the speed of the effect by dividing by a smaller portion of the section height
        const scrollFraction =
          (scrollY - startEffectPosition) / (sectionHeight * 0.5);
        setScrollPosition(Math.min(scrollFraction, 1));
      } else {
        setIsSectionVisible(false);
        setScrollPosition(0);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamically calculate the circle size based on scroll position
  const circleSize = `${Number(initialCircleSize as string) + scrollPosition * 80}svh`;
  const clipPathValue = isSectionVisible
    ? `circle(${circleSize} at center)`
    : `circle(${initialCircleSize}svh at center)`;

  // Calculate the background color based on scroll position
  const backgroundColor = interpolateColor(
    '#2f2a27',
    '#eae5df',
    scrollPosition
  );

  const history = useNavigate();

  const navigateToMasterVilla = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    history('/master-villa');
  };

  const dispatch = useAppDispatch();

  return (
    <Box
      id="explore-section"
      width="100%"
      mx="auto"
      padding={{ base: '0.5rem', md: '1.5rem' }}
      pb="0"
      backgroundColor={backgroundColor}
      transition="background-color 0.2s ease-out"
    >
      <VStack height="200svh" justifyContent="space-between">
        <HStack
          position="sticky"
          top="0"
          justifyContent="center"
          alignItems="center"
          height="100svh"
          overflow="hidden"
          borderRadius="4rem"
          width="100%"
        >
          <Box
            position="relative"
            width="100%"
            height="calc(100vh - 4rem)"
            borderRadius="2rem"
            marginTop={{ base: '5rem', md: '7.5rem', lg: '1.1rem' }}
            overflow="hidden"
          >
            <Box
              position="relative"
              width="100%"
              height="100%"
              borderRadius="4rem"
              overflow="hidden" // Ensures the overlay follows the border radius
            >
              {/* Overlay */}
              <Box
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                background="rgba(0, 0, 0, 0.5)" // Semi-transparent black overlay
                zIndex="1"
                style={{
                  clipPath: clipPathValue,
                }}
              />

              {/* Image */}
              <Image
                src={behindTheScenesImg}
                alt="background"
                borderRadius="4rem"
                objectFit="cover"
                width="100%"
                height="100%"
                zIndex="0"
                style={{
                  clipPath: clipPathValue,
                }}
              />
            </Box>
          </Box>
        </HStack>
        <VStack
          zIndex="5"
          height="100svh"
          justifyContent="center"
          alignItems="center"
          mt="6rem"
          pt="0"
          width="100%"
        >
          <VStack alignItems="center" maxWidth="31rem" gap="2rem" zIndex="6">
            <Heading
              as="h1"
              size="h1"
              textAlign="center"
              color="white"
              my="0"
              fontSize={{ base: '3rem', md: '5.25rem' }}
              lineHeight="1"
              fontWeight="200"
            >
              {t('homePage.exploreSectionHeader')}
            </Heading>
            <Text
              as="p"
              textAlign="center"
              lineHeight="1.2"
              mb="0"
              px={{ base: '1.5rem', md: '0' }}
              color="white"
              fontSize={{ base: '1rem', md: '1.2rem' }}
            >
              {t('homePage.exploreSectionText')}
            </Text>
            <HStack
              mt={{ base: '0', md: '1.5rem' }}
              alignItems="center"
              justifyContent="center"
              gap="2rem"
              flexDirection={{ base: 'column', md: 'row' }}
            >
              <HoverButtonWrapper>
                <Button
                  backgroundColor="rgba(255, 255, 255, 0.45)"
                  _hover={{ backgroundColor: 'rgba(255, 255, 255, 0.45)' }}
                  color="rgb(255,255,255)"
                  p={{ base: '1.5rem', md: '1.5rem 2rem' }}
                  borderRadius="10rem"
                  cursor="pointer"
                  onClick={e => navigateToMasterVilla(e)}
                >
                  {t('homePage.exploreSectionButton1')}
                </Button>
              </HoverButtonWrapper>
              <HoverButtonWrapper>
                <Button
                  backgroundColor="#547c39"
                  _hover={{ backgroundColor: '#547c39' }}
                  color={'white'}
                  p={{ base: '1.5rem', md: '1.5rem 2rem' }}
                  borderRadius="10rem"
                  cursor="pointer"
                  backdropFilter="blur(20px)"
                  onClick={() => dispatch(setBookingDrawerOpen(true))}
                >
                  {t('homePage.exploreSectionButton2')}
                </Button>
              </HoverButtonWrapper>
            </HStack>
          </VStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default ExploreSection;
