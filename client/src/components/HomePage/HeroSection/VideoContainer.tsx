import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

export interface VideoContainerProps {
  posterUrl: string;
  videoUrls: string[];
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  children?: ReactNode;
}

const VideoContainer = ({
  posterUrl,
  videoUrls,
  autoplay,
  loop,
  muted,
}: VideoContainerProps) => {
  return (
    <Box
      data-poster-url={posterUrl}
      data-video-urls={videoUrls.join(',')}
      data-autoplay={autoplay}
      data-loop={loop}
      data-wf-ignore="true"
      position="relative"
      overflow="hidden"
      h="100vh"
    >
      <video
        autoPlay={autoplay}
        loop={loop}
        muted={muted}
        playsInline
        data-object-fit="cover"
        style={{ width: '100%', height: '100%', objectFit: 'cover', backgroundImage: `${posterUrl}` }}
      >
        <source
          src={videoUrls[0]}
          type="video/mp4"
        />
        <source
          src={videoUrls[1]}
          type="video/webm"
        />
      </video>
    </Box>
  );
};

export default VideoContainer;
