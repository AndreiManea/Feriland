import { useNavigate } from 'react-router-dom';
import {
  ButtonText,
  ButtonTextContainer,
  ButtonsContainer,
  Details,
  ExploreContainer,
  Header,
  OverlayGradient,
  PrimaryButton,
  SecondaryButton,
  StickyCircleContainer,
  StickyCircleElement,
  StickyCircleImg,
  StickyCircleWrapper,
  TextContainer,
  TextWrapper,
} from './ExploreSection.styled';

const ExploreSection: React.FC = () => {
  const history = useNavigate();

  const navigateToMasterVilla = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    history('/master-villa');
  };

  // TO DO - ADD SCROLL EVENT

  return (
    <ExploreContainer>
      <StickyCircleWrapper>
        <StickyCircleContainer>
          <StickyCircleElement>
            <StickyCircleImg
              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c3945288009a5554ac39cb_fa5a9a59840835.5a313db584588.jpg"
              srcSet="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c3945288009a5554ac39cb_fa5a9a59840835.5a313db584588-p-500.jpg 500w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c3945288009a5554ac39cb_fa5a9a59840835.5a313db584588-p-800.jpg 800w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c3945288009a5554ac39cb_fa5a9a59840835.5a313db584588-p-1080.jpg 1080w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c3945288009a5554ac39cb_fa5a9a59840835.5a313db584588-p-1600.jpg 1600w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c3945288009a5554ac39cb_fa5a9a59840835.5a313db584588.jpg 1920w"
              loading="lazy"
              sizes="100vw"
              width="960"
              alt=""
            />
          </StickyCircleElement>
        </StickyCircleContainer>
        <TextWrapper>
          <TextContainer>
            <Header>Behind the scenes</Header>
            <Details>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </Details>
            <ButtonsContainer>
              <PrimaryButton
                href="/master-villa"
                target="_blank"
                onClick={navigateToMasterVilla}
              >
                <ButtonTextContainer>
                  <ButtonText>Explore Cabin</ButtonText>
                </ButtonTextContainer>
              </PrimaryButton>
              <SecondaryButton href="#">
                <ButtonTextContainer>
                  <ButtonText>Book Your Stay</ButtonText>
                </ButtonTextContainer>
              </SecondaryButton>
            </ButtonsContainer>
          </TextContainer>
          <OverlayGradient />
        </TextWrapper>
      </StickyCircleWrapper>
    </ExploreContainer>
  );
};

export default ExploreSection;
