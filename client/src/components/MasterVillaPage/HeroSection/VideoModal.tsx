import { useState } from 'react';
import YouTube from 'react-youtube';
import { Box, Modal, ModalCloseButton, ModalContent, ModalOverlay, Spinner } from '@chakra-ui/react';

type VideoFullscreenProps = {
  isFullscreen: boolean;
  toggleFullscreen: () => void;
};

const VideoModal = ({
  isFullscreen,
  toggleFullscreen,
}: VideoFullscreenProps) => {
  const [isLoading, setIsLoading] = useState(true); 

  if (!isFullscreen) return null;

  const videoId = '6ffES6xEyxw';

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1, 
    },
  };

  const onReady = () => {
    setIsLoading(false);
  };

  const onError = () => {
    setIsLoading(false);
  };

  return (
    <Modal isOpen={isFullscreen} onClose={toggleFullscreen} size="full" isCentered>
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
          fontSize="1.5rem"
          mt="1rem"
          mr="1rem"
        />
        <Box
          height="100%"
          width="100%"
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius= '20rem'

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
             borderRadius= '20rem'
          >
            <YouTube
              videoId={videoId}
              opts={opts}
              onReady={onReady} 
              onError={onError} 
              className="youtube-video"
              style={{ width: '50%', height: '50%'
               }}  
            />
          </Box>
        </Box>
      </ModalContent>
    </Modal>
  );
};

export default VideoModal;
