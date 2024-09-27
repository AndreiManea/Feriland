import { useEffect, useState } from 'react';
import {
  Box,
  HStack,
  VStack,
  Image,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { interpolateColor } from '../../../utils/helperFunctions.utils';
import HoverButtonWrapper from '../../HoverButtonWrapper/HoverButtonWrapper';
import { useAppDispatch } from '../../../redux/hooks';
import { setBookingDrawerOpen } from '../../../redux/slices/bookingsSlice';
import { useTranslation } from 'react-i18next';

const ExploreSection: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

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
  const circleSize = `${30 + scrollPosition * 80}vh`;
  const clipPathValue = isSectionVisible
    ? `circle(${circleSize} at center)`
    : 'circle(30vh at center)';

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
      padding="1.8rem"
      backgroundColor={backgroundColor}
      transition="background-color 0.2s ease-out"
    >
      <VStack height="200vh" justifyContent="space-between">
        <HStack
          position="sticky"
          top="0"
          justifyContent="center"
          alignItems="center"
          height="100vh"
          overflow="hidden"
          borderRadius="4rem"
          width="100%"
        >
          <Box
            position="relative"
            width="100%"
            height="calc(100vh - 4rem)"
            borderRadius="2rem"
            marginTop="2rem"
            overflow="hidden"
          >
            <Image
              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c3945288009a5554ac39cb_fa5a9a59840835.5a313db584588.jpg"
              alt="background"
              objectFit="cover"
              width="100%"
              height="100%"
              style={{
                clipPath: clipPathValue,
                transition: 'clip-path 0.2s ease-out',
              }}
            />
          </Box>
        </HStack>
        <VStack
          zIndex="5"
          height="100vh"
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
              fontSize="5rem"
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
              color="white"
              fontSize="1.2rem"
            >
              {' '}
              {t('homePage.exploreSectionText')}
            </Text>
            <HStack
              mt="2rem"
              alignItems="center"
              justifyContent="center"
              gap="2rem"
              flexDirection={{ base: 'column', lg: 'row' }}
            >
              <HoverButtonWrapper>
                <Button
                  backgroundColor="rgba(0, 0, 0, 0.5)"
                  _hover={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                  color={'white'}
                  p="1.5rem 2rem"
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
                  p="1.5rem 2rem"
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
