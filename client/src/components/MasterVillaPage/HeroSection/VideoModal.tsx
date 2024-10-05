import { useState } from 'react';
import YouTube from 'react-youtube';
import {
  Box,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Spinner,
  useBreakpointValue,
} from '@chakra-ui/react';

type VideoFullscreenProps = {
  isFullscreen: boolean;
  toggleFullscreen: () => void;
  videoId: string;
};

const VideoModal = ({
  isFullscreen,
  toggleFullscreen,
  videoId,
}: VideoFullscreenProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const youtubeStyles = useBreakpointValue({
    base: { width: '90%', height: '60%' },
    md: { width: '95%', height: '50%' },
    lg: { width: '90%', height: '75%' },
  });

  if (!isFullscreen) return null;

  const opts = {
    height: '100%',
    width: '100%',
  };

  const onReady = () => {
    setIsLoading(false);
  };

  const onError = () => {
    setIsLoading(false);
  };

  return (
    <Modal
      isOpen={isFullscreen}
      onClose={toggleFullscreen}
      size="full"
      isCentered
    >
      <ModalOverlay background="rgba(0, 0, 0, 0.8)" />
      <ModalContent
        background="transparent"
        borderRadius="0"
        boxShadow="none"
        p="0"
        m="0"
        maxW="100vw"
        maxH="100vh"
        overflow="hidden"
        height="100vh"
        width="100vw"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <ModalCloseButton
          color="white"
          zIndex="100"
          fontSize={{ base: '1.75rem', md: '2.5rem', lg: '2.25rem' }}
          mt={{ base: '2.5rem', md: '4.5rem', lg: '2rem' }}
          mr={{ base: '0.75rem', md: '1.5rem', lg: '2rem' }}
        />
        <Box
          height="100%"
          width="100%"
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="20rem"
        >
          {isLoading && (
            <Spinner
              size="xl"
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
            />
          )}
          <Box
            width="100%"
            height="100%"
            position="relative"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="20rem"
          >
            <YouTube
              videoId={videoId}
              opts={opts}
              onReady={onReady}
              onError={onError}
              className="youtube-video"
              style={youtubeStyles}
            />
          </Box>
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default VideoModal;
