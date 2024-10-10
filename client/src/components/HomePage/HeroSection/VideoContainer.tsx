import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { useAppDispatch } from '../../../redux/hooks';
import { setIsLoading } from '../../../redux/slices/loadingSlice';

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
  const dispatch = useAppDispatch();

  return (
    <Box
      data-poster-url={posterUrl}
      data-video-urls={videoUrls.join(',')}
      data-autoplay={autoplay}
      data-loop={loop}
      data-wf-ignore="true"
      position="relative"
      overflow="hidden"
      h="100svh"
    >
      <video
        autoPlay={autoplay}
        loop={loop}
        muted={muted}
        playsInline
        data-object-fit="cover"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          backgroundImage: `${posterUrl}`,
        }}
        onCanPlay={() =>
          setTimeout(() => {
            dispatch(setIsLoading(false));
          }, 1000)
        }
      >
        <source src={videoUrls[0]} type="video/mp4" />
        <source src={videoUrls[1]} type="video/webm" />
      </video>
    </Box>
  );
};

export default VideoContainer;
