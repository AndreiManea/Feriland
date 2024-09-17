import {
  BottomImage,
  // Description,
  // DescriptionContainer,
  OverlayText,
} from './HeroSection.styled';
import { TextAnimation } from './TextAnimation';
type TextProps = {
  sentence: string;
};

const ScrollableText = ({ sentence }: TextProps) => {
  return (
    <OverlayText style={      {overflow:"visible"}
    }>
      {/* <DescriptionContainer>
        <Description>{sentence}</Description>
      </DescriptionContainer> */}
      <TextAnimation text={sentence} />
      <BottomImage
        src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c3a0b5149b2d0f56202fa9_line_427-%5BConverted%5D-2.gif"
        alt=""
      />
    </OverlayText>
  );
};

export default ScrollableText;
