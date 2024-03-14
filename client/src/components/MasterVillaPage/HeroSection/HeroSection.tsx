// import './HeroSection.css';
import {
  BackgroundContainer,
  Heading,
  Heading2,
  HeadingContainer,
  HeroCover,
  HeroSectionContainer,
  HeroSectionSticky,
  Icon,
  OverlaySection,
  PlayButton,
  TextContainer,
  TextWrapper,
  VideoCircleContainer,
  VideoContainer,
} from './HeroSection.styled';

const HeroSection: React.FC = () => {
  const sentence =
    'Imagine a haven of serenity where time stands still and noise fades away to birdsong. A dreamland where you can stroll around an elegant medieval hamlet as you pass enchanting stone cottages that whisper stories of long ago.';

  return (
    <HeroSectionContainer>
      <HeroSectionSticky>
        <BackgroundContainer />
        <HeroCover />
        <HeadingContainer>
          <Heading>
            Our timeless dreamland, your piece of heaven immersed in the Minis
            hills.
          </Heading>
        </HeadingContainer>
      </HeroSectionSticky>

      <OverlaySection>
        <VideoCircleContainer>
          <VideoContainer
            data-poster-url="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d881bba4ccd956607e0480_Untitled design (10) - Trim-poster-00001.jpg"
            data-video-urls="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d881bba4ccd956607e0480_Untitled design (10) - Trim-transcode.mp4,https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d881bba4ccd956607e0480_Untitled design (10) - Trim-transcode.webm"
            data-autoplay="true"
            data-loop="true"
            data-wf-ignore="true"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              data-wf-ignore="true"
              data-object-fit="cover"
            >
              <source
                src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d881bba4ccd956607e0480_Untitled design (10) - Trim-transcode.mp4"
                data-wf-ignore="true"
              />
              <source
                src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d881bba4ccd956607e0480_Untitled design (10) - Trim-transcode.webm"
                data-wf-ignore="true"
              />
            </video>
          </VideoContainer>
          <PlayButton>
            <Icon
              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d8886f3af7447dcb00e78d_play_12751645.png"
              loading="lazy"
              alt=""
            />
          </PlayButton>
        </VideoCircleContainer>
        <TextWrapper>
          <TextContainer>
            {/* TO DO - ADD READING EFFECT */}
            <Heading2>{sentence}</Heading2>
          </TextContainer>
        </TextWrapper>
      </OverlaySection>
    </HeroSectionContainer>
  );
};

export default HeroSection;
