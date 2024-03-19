import {
  HeroSectionContainerWrapper,
  HeroSectionContainer,
  VideoContainer,
  Overlay,
  TextContainer,
  Text,
  OverlayText,
  DescriptionContainer,
  Description,
  BottomImage,
} from './HeroSection.styled';

const HeroSection: React.FC = () => {
  const sentence =
    "Nestled in the embrace of the forest, our cabin offers an enchanting escape, a serene oasis where tranquility blooms amidst nature's whispers. Far from urban clamor, here beauty unfolds in its purest form, inviting you to a haven where the air is pristine and the soul finds peace.";

  return (
    <HeroSectionContainerWrapper>
      <HeroSectionContainer>
        <VideoContainer
          data-poster-url="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65bcfb1a11088bee20f64843_Untitled design (7)-poster-00001.jpg"
          data-video-urls="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65bcfb1a11088bee20f64843_Untitled design (7)-transcode.mp4,https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65bcfb1a11088bee20f64843_Untitled design (7)-transcode.webm"
          data-autoplay="true"
          data-loop="true"
          data-wf-ignore="true"
        >
          <video autoPlay loop muted playsInline data-object-fit="cover">
            <source
              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65bcfb1a11088bee20f64843_Untitled design (7)-transcode.mp4"
              type="video/mp4"
            />
            <source
              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65bcfb1a11088bee20f64843_Untitled design (7)-transcode.webm"
              type="video/webm"
            />
          </video>
        </VideoContainer>
        <Overlay />
        <TextContainer>
          <Text>Your Home In Nature</Text>
        </TextContainer>
      </HeroSectionContainer>
      <OverlayText>
        <DescriptionContainer >
          <Description>{sentence}</Description>
        </DescriptionContainer>
        <BottomImage
          src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c3a0b5149b2d0f56202fa9_line_427-%5BConverted%5D-2.gif"
          alt=""
        />
      </OverlayText>
    </HeroSectionContainerWrapper>
  );
};

export default HeroSection;
