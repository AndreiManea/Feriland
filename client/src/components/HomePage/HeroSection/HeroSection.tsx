import { Box, Heading, HStack } from '@chakra-ui/react';
import VideoContainer from './VideoContainer';
// import ScrollableText from './ScrollableText';
import { useTranslation } from 'react-i18next';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Box zIndex="1" height="auto" position="sticky" top="0">
        <VideoContainer
          posterUrl="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65bcfb1a11088bee20f64843_Untitled design (7)-poster-00001.jpg"
          videoUrls={[
            'https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65bcfb1a11088bee20f64843_Untitled design (7)-transcode.mp4',
            'https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65bcfb1a11088bee20f64843_Untitled design (7)-transcode.webm',
          ]}
          autoplay={true}
          loop={true}
          muted={true}
        />
        <Box
          zIndex="2"
          backgroundColor="rgba(0,0,0,0.23)"
          position="absolute"
          top="0"
          bottom="0"
          left="0"
          right="0"
        />
        <HStack
          zIndex="5"
          top="0"
          bottom="0"
          left="0"
          right="0"
          position="absolute"
          alignItems="center"
          justifyContent="center"
        >
          <Heading
            color="white"
            as="h1"
            size={{ base: 'homeHeading', md: 'h1' }}
            mt="1.2rem"
            mb="0.8rem"
          >
            {t('homePage.header')}
          </Heading>
        </HStack>
      </Box>
      {/* <ScrollableText sentence={t('homePage.description')} /> */}
    </Box>
  );
};

export default HeroSection;
