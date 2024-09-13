import { Box, Heading, VStack, Image } from '@chakra-ui/react';
import masterVillaImg from '../../../assets/master-villa.png';

const HeroSection: React.FC = () => {
  return (
    <Box overflow="hidden" height="100vh">
      <Box position="sticky" height="auto" zIndex="1" top="0" overflow="hidden">
        <Box
          backgroundImage={`url(${masterVillaImg})`}
          backgroundPosition="center"
          backgroundSize="cover"
          width="100%"
          height="100vh"
          position="relative"
          overflow="hidden"
        />
        <Box
          zIndex="2"
          backgroundColor="rgba(0, 0, 0, 0.23)"
          position="absolute"
          top="0"
          bottom="0"
          left="0"
          right="0"
        />
        <VStack
          zIndex="5"
          maxWidth="80vw"
          mx="auto"
          position="absolute"
          alignItems="center"
          justifyContent="center"
          top="0"
          bottom="0"
          left="0"
          right="0"
        >
          <Heading
            as="h1"
            size="h1"
            textAlign="center"
            color="white"
            mt="1rem"
            fontWeight="400"
          >
            Our timeless dreamland, your piece of heaven immersed in the Minis
            hills.
          </Heading>
        </VStack>
      </Box>

      <Box
        position="relative"
        zIndex="10"
        height="100vh"
        width="40vw"
        mx="auto"
        py="0"
        overflow="visible"
        borderTopRadius="20vw"
        mt="-10vh"
        backdropFilter="blur(2.5rem)"
        backgroundColor="rgba(0, 0, 0, 0.533)"
      >
        <VStack
          position="absolute"
          top="0"
          bottom="0"
          left="0"
          right="0"
          alignItems="center"
          justifyContent="center"
          borderRadius="100rem"
          mx="auto"
          width="10.5rem"
          height="10.5rem"
          mt="-6rem"
          overflow="hidden"
        >
          <Box
            data-poster-url="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d881bba4ccd956607e0480_Untitled design (10) - Trim-poster-00001.jpg"
            data-video-urls="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d881bba4ccd956607e0480_Untitled design (10) - Trim-transcode.mp4,https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d881bba4ccd956607e0480_Untitled design (10) - Trim-transcode.webm"
            data-autoplay="true"
            data-loop="true"
            data-wf-ignore="true"
          >
            <Box
              as="video"
              autoPlay
              loop
              muted
              playsInline
              data-wf-ignore="true"
              width="100%"
              height="100%"
              margin="auto"
              position="absolute"
              objectFit="cover"
              backgroundSize="cover"
              backgroundPosition="50%"
              backgroundImage="url('https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d881bba4ccd956607e0480_Untitled%20design%20(10)%20-%20Trim-poster-00001.jpg')"
              top="0"
              bottom="0"
              left="0"
              right="0"
            >
              <source
                src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d881bba4ccd956607e0480_Untitled%20design%20(10)%20-%20Trim-transcode.mp4"
                type="video/mp4"
                data-wf-ignore="true"
              />
              <source
                src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d881bba4ccd956607e0480_Untitled%20design%20(10)%20-%20Trim-transcode.webm"
                type="video/webm"
                data-wf-ignore="true"
              />
            </Box>
          </Box>
          <Box position="absolute" width="auto" height="auto">
            <Image
              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d8886f3af7447dcb00e78d_play_12751645.png"
              loading="lazy"
              alt=""
              width="2.5rem"
              opacity="0.9"
            />
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default HeroSection;
