import Flickity from 'flickity';
import { useEffect, useRef } from 'react';
import {
  CardContainer,
  CardDetails,
  CardHeader,
  Details,
  DividerContainer,
  FlickContainer,
  FlickSlider,
  Header,
  Line,
  SlideContainer,
  SliderContainer,
  SliderSectionWrapper,
  TextContainer,
  TextWrapper,
  TricksSlider,
} from './SliderSection.styled';

const SliderSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    if (sliderRef.current) {
      const flickityInstance = new Flickity(sliderRef.current, {
        pageDots: false,
        prevNextButtons: true,
      });

      return () => {
        flickityInstance.destroy();
      };
    }
  }, []);

  return (
    <SliderSectionWrapper>
      <TextWrapper>
        <DividerContainer>
          <Line />
          <img
            src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb736094ba4a4473a3011e_abc.svg"
            loading="lazy"
            alt=""
          />
          <Line />
        </DividerContainer>
        <TextContainer>
          <Header>Activities in Feriland</Header>
          <Details>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </Details>
        </TextContainer>
      </TextWrapper>

      {/* TO ADD DRAG FUNCTIONALITY  */}
      <SliderContainer>
        <TricksSlider tabIndex={0}>
        <FlickContainer >
            <FlickSlider ref={sliderRef}>
              <SlideContainer position="0%">
                <img
                  src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6a680710a6aed4d4470b_california-vineyards-santa-barbara%20(1).jpg"
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 82vw, (max-width: 991px) 85vw, (max-width: 1279px) 78vw, (max-width: 1439px) 79vw, (max-width: 1919px) 1139.03125px, 61vw"
                  srcSet="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6a680710a6aed4d4470b_california-vineyards-santa-barbara%20(1)-p-500.jpg 500w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6a680710a6aed4d4470b_california-vineyards-santa-barbara%20(1)-p-800.jpg 800w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6a680710a6aed4d4470b_california-vineyards-santa-barbara%20(1)-p-1080.jpg 1080w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6a680710a6aed4d4470b_california-vineyards-santa-barbara%20(1)-p-1600.jpg 1600w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6a680710a6aed4d4470b_california-vineyards-santa-barbara%20(1).jpg 2000w"
                  loading="lazy"
                  alt=""
                />
                <CardContainer>
                  <CardHeader>Wine Fields</CardHeader>
                  <CardDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </CardDetails>
                </CardContainer>
              </SlideContainer>
              <SlideContainer aria-hidden="true" position="102.83%">
                <img
                  src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6d918848db73b0af7f4d_male-cyclist-riding-bicycle-morning%20(1).jpg"
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 82vw, (max-width: 991px) 85vw, (max-width: 1279px) 78vw, (max-width: 1439px) 79vw, (max-width: 1919px) 1139.03125px, 61vw"
                  srcSet="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6d918848db73b0af7f4d_male-cyclist-riding-bicycle-morning%20(1)-p-500.jpg 500w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6d918848db73b0af7f4d_male-cyclist-riding-bicycle-morning%20(1)-p-800.jpg 800w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6d918848db73b0af7f4d_male-cyclist-riding-bicycle-morning%20(1)-p-1080.jpg 1080w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6d918848db73b0af7f4d_male-cyclist-riding-bicycle-morning%20(1)-p-1600.jpg 1600w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6d918848db73b0af7f4d_male-cyclist-riding-bicycle-morning%20(1).jpg 2000w"
                  loading="lazy"
                  alt=""
                />
                <CardContainer>
                  <CardHeader>Bike Trails</CardHeader>
                  <CardDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </CardDetails>
                </CardContainer>
              </SlideContainer>
              <SlideContainer aria-hidden="true" position="205.67%">
                <img
                  src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6c69b51d23f6b756ba3c_sunrise-view-morning-mountains%20(1).jpg"
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 82vw, (max-width: 991px) 85vw, (max-width: 1279px) 78vw, (max-width: 1439px) 79vw, (max-width: 1919px) 1139.03125px, 61vw"
                  srcSet="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6c69b51d23f6b756ba3c_sunrise-view-morning-mountains%20(1)-p-500.jpg 500w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6c69b51d23f6b756ba3c_sunrise-view-morning-mountains%20(1)-p-800.jpg 800w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6c69b51d23f6b756ba3c_sunrise-view-morning-mountains%20(1)-p-1080.jpg 1080w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6c69b51d23f6b756ba3c_sunrise-view-morning-mountains%20(1)-p-1600.jpg 1600w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6c69b51d23f6b756ba3c_sunrise-view-morning-mountains%20(1).jpg 2000w"
                  loading="lazy"
                  alt=""
                />
                <CardContainer>
                  <CardHeader>Untouched Forest</CardHeader>
                  <CardDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </CardDetails>
                </CardContainer>
              </SlideContainer>
              <SlideContainer aria-hidden="true" position="308.5%">
                <img
                  src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6f7b41e27be6aab002a0_pexels-pixabay-433155.jpg"
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 82vw, (max-width: 991px) 85vw, (max-width: 1279px) 78vw, (max-width: 1439px) 79vw, (max-width: 1919px) 1139.03125px, 61vw"
                  srcSet="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6f7b41e27be6aab002a0_pexels-pixabay-433155-p-500.jpg 500w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6f7b41e27be6aab002a0_pexels-pixabay-433155-p-800.jpg 800w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6f7b41e27be6aab002a0_pexels-pixabay-433155-p-1080.jpg 1080w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6f7b41e27be6aab002a0_pexels-pixabay-433155-p-1600.jpg 1600w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6f7b41e27be6aab002a0_pexels-pixabay-433155.jpg 1920w"
                  loading="lazy"
                  alt=""
                />
                <CardContainer>
                  <CardHeader>Calm &amp; Silence</CardHeader>
                  <CardDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </CardDetails>
                </CardContainer>
              </SlideContainer>
              <SlideContainer aria-hidden="true" position="411.34%">
                <img
                  src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e5162f4b9d4b16b2a0bd_woman-bikini-bathing-japanese-style-bath-outdoors.jpg"
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 82vw, (max-width: 991px) 85vw, (max-width: 1279px) 78vw, (max-width: 1439px) 79vw, (max-width: 1919px) 1139.03125px, 61vw"
                  srcSet="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e5162f4b9d4b16b2a0bd_woman-bikini-bathing-japanese-style-bath-outdoors-p-500.jpg 500w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e5162f4b9d4b16b2a0bd_woman-bikini-bathing-japanese-style-bath-outdoors-p-800.jpg 800w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e5162f4b9d4b16b2a0bd_woman-bikini-bathing-japanese-style-bath-outdoors.jpg 1001w"
                  loading="lazy"
                  alt=""
                />
                <CardContainer>
                  <CardHeader>Ciubar</CardHeader>
                  <CardDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </CardDetails>
                </CardContainer>
              </SlideContainer>
              <SlideContainer aria-hidden="true" position="514.17%">
                <img
                  src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6e7b3607acd868849df0_vertical-shot-ringnecked-pheasant-perched-branch%20(1).jpg"
                  sizes="(max-width: 479px) 100vw, (max-width: 767px) 82vw, (max-width: 991px) 85vw, (max-width: 1279px) 78vw, (max-width: 1439px) 79vw, (max-width: 1919px) 1139.03125px, 61vw"
                  srcSet="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6e7b3607acd868849df0_vertical-shot-ringnecked-pheasant-perched-branch%20(1)-p-500.jpg 500w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6e7b3607acd868849df0_vertical-shot-ringnecked-pheasant-perched-branch%20(1)-p-800.jpg 800w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6e7b3607acd868849df0_vertical-shot-ringnecked-pheasant-perched-branch%20(1)-p-1080.jpg 1080w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb6e7b3607acd868849df0_vertical-shot-ringnecked-pheasant-perched-branch%20(1).jpg 1600w"
                  loading="lazy"
                  alt=""
                />
                <CardContainer>
                  <CardHeader>Wild Life</CardHeader>
                  <CardDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </CardDetails>
                </CardContainer>
              </SlideContainer>
            </FlickSlider>
          </FlickContainer>
          <button className="flickity-button flickity-prev-next-button previous" aria-label="previous">
            <svg className="flickity-button-icon" viewBox="0 0 100 100">
              <path
                d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                className="arrow"
              />
            </svg>
          </button>
          <button className="flickity-button flickity-prev-next-button next" aria-label="next">
            <svg className="flickity-button-icon" viewBox="0 0 100 100">
              <path
                d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                className="arrow"
                transform="translate(100, 100) rotate(180) "
              />
            </svg>
          </button>
        </TricksSlider>

        <div className="progress">
          <div className="progress-fill"></div>
        </div>
      </SliderContainer>
    </SliderSectionWrapper>
  );
};

export default SliderSection;
