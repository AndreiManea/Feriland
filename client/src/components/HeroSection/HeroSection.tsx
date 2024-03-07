import './HeroSection.css';
import { HeroSectionContainerWrapper, HeroSectionContainer } from './HeroSection.styled';

/* WORK IN PROGRESS
interface WordProps {
  word: string;
}

const Word: React.FC<WordProps> = ({ word }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0.3, y: 20 }}
      animate={{ opacity: inView ? 1 : 0.5, y: inView ? 0 : 20 }}
      transition={{ duration: 0.5 }}
      style={{ display: 'inline-block', margin: '0 4px' }}
    >
      {word}
    </motion.span>
  );
}; 

interface SentenceProps {
  sentence: string;
}

const Sentence: React.FC<SentenceProps> = ({ sentence }) => {
  const words = sentence.split(' ').map((word, index) => (
    <Word key={index} word={word} />
  ));

  return <h2 className='heading-2'>{words}</h2>;
}; */

const HeroSection = () => {
  const sentence =
    "Nestled in the embrace of the forest, our cabin offers an enchanting escape, a serene oasis where tranquility blooms amidst nature's whispers. Far from urban clamor, here beauty unfolds in its purest form, inviting you to a haven where the air is pristine and the soul finds peace.";

  return (
    <HeroSectionContainerWrapper>
      <HeroSectionContainer>
        <div
          className="background-video w-background-video w-background-video-atom"
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
        </div>
        <div className="hero-cover"></div>
        <div className="hero-container">
          <h1 className="heading center">Your Home In Nature</h1>
        </div>
      </HeroSectionContainer>
      <div className="overlay-section---text">
        <div className="container">
          <div className="text-container">
            <h2 className="heading-2">{sentence}</h2>
          </div>
        </div>
        <img
          src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c3a0b5149b2d0f56202fa9_line_427-%5BConverted%5D-2.gif"
          alt=""
          className="bottom-image"
        />
      </div>
    </HeroSectionContainerWrapper>
  );
};

export default HeroSection;
