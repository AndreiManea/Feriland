import { Box, HStack, Button } from '@chakra-ui/react';
import HoverButtonWrapper from '../HoverButtonWrapper/HoverButtonWrapper';
import { useState } from 'react';
import VideoModal from '../MasterVillaPage/HeroSection/VideoModal';

const MovieButton = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = (
    event?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (event) {
      event.preventDefault();
    }
    setIsFullscreen((prevState) => !prevState);
  };

  return (
    <Box
      width="100%"
      backgroundImage="url('https://cdn.prod.website-files.com/65bcf5fac0f3634790a816fe/65f07d77580e270a5d790676_374581141_686381230189221_533891080229178423_n.jpg')"
      backgroundPosition="50%"
      backgroundSize="cover"
      borderRadius="0.875rem"
      height="12rem"
      position="relative"
    >
      <HStack
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="0"
        bottom="0"
        right="0"
        left="0"
      >
        <HoverButtonWrapper>
          <Button
            position="relative"
            onClick={toggleFullscreen}
            backgroundColor="#547c39"
            _hover={{ backgroundColor: '#547c39' }}
            color={'white'}
            p="1.5rem 2rem"
            borderRadius="10rem"
            cursor="pointer"
          >
            Watch the film
          </Button>
        </HoverButtonWrapper>
      </HStack>
      <VideoModal
        isFullscreen={isFullscreen}
        toggleFullscreen={toggleFullscreen}
        videoId="6ffES6xEyxw"
      />
    </Box>
  );
};

export default MovieButton;
