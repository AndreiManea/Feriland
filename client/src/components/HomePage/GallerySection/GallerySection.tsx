import {
  BigImg,
  BottomImage,
  Details,
  GalleryGrid,
  GallerySectionContainer,
  GallerySectionWrapper,
  HeadingText,
  LeftRightContainer,
  MiddleContainer,
  SmallImg,
  TopImage,
} from './GallerySection.styled';

const GallerySection = () => {
  return (
    <GallerySectionWrapper>
      <GallerySectionContainer>
        <GalleryGrid>
          <LeftRightContainer>
            <TopImage>
              <SmallImg
                src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e38b178fae30e5a90a5f_pexels-julissa-helmuth-4962458.jpg"
                srcSet="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e38b178fae30e5a90a5f_pexels-julissa-helmuth-4962458-p-500.jpg 500w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e38b178fae30e5a90a5f_pexels-julissa-helmuth-4962458-p-800.jpg 800w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e38b178fae30e5a90a5f_pexels-julissa-helmuth-4962458-p-1080.jpg 1080w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e38b178fae30e5a90a5f_pexels-julissa-helmuth-4962458.jpg 1280w"
                sizes="(max-width: 479px) 32vw, (max-width: 767px) 24vw, (max-width: 1919px) 168px, 252px"
                loading="lazy"
                width="200"
                alt=""
              />
            </TopImage>
            <BottomImage>
              <BigImg
                src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e5d9c1c179945a74317b_pexels-ata-ebem-10560259.jpg"
                srcSet="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e5d9c1c179945a74317b_pexels-ata-ebem-10560259-p-500.jpg 500w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e5d9c1c179945a74317b_pexels-ata-ebem-10560259-p-800.jpg 800w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e5d9c1c179945a74317b_pexels-ata-ebem-10560259-p-1080.jpg 1080w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e5d9c1c179945a74317b_pexels-ata-ebem-10560259.jpg 1280w"
                sizes="(max-width: 479px) 48vw, (max-width: 767px) 44vw, (max-width: 1919px) 308px, 448px"
                loading="lazy"
                width="330"
                alt=""
              />
            </BottomImage>
          </LeftRightContainer>
          <MiddleContainer>
            <img
              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e05c1cde1bf4b1ecb515_25588595_357dxf%20%5BConverted%5D.png"
              loading="lazy"
              width="40"
              alt=""
            />
            <HeadingText>Hard to find, hard to leave</HeadingText>
            <Details>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </Details>
          </MiddleContainer>
          <LeftRightContainer>
            <TopImage>
              <BigImg
                src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e5162f4b9d4b16b2a0bd_woman-bikini-bathing-japanese-style-bath-outdoors.jpg"
                srcSet="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e5162f4b9d4b16b2a0bd_woman-bikini-bathing-japanese-style-bath-outdoors-p-500.jpg 500w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e5162f4b9d4b16b2a0bd_woman-bikini-bathing-japanese-style-bath-outdoors-p-800.jpg 800w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e5162f4b9d4b16b2a0bd_woman-bikini-bathing-japanese-style-bath-outdoors.jpg 1001w"
                sizes="(max-width: 479px) 100vw, (max-width: 767px) 45vw, (max-width: 1919px) 308px, 448px"
                loading="lazy"
                width="200"
                alt=""
              />
            </TopImage>
            <BottomImage>
              <SmallImg
                src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e3478b3b7e3a11f3503f_pexels-kindel-media-7148680%20(1).jpg"
                srcSet="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e3478b3b7e3a11f3503f_pexels-kindel-media-7148680%20(1)-p-500.jpg 500w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e3478b3b7e3a11f3503f_pexels-kindel-media-7148680%20(1)-p-800.jpg 800w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e3478b3b7e3a11f3503f_pexels-kindel-media-7148680%20(1).jpg 1280w"
                sizes="(max-width: 479px) 100vw, (max-width: 767px) 25vw, (max-width: 1919px) 168px, 252px"
                loading="lazy"
                width="330"
                alt=""
              />
            </BottomImage>
          </LeftRightContainer>
        </GalleryGrid>
      </GallerySectionContainer>
    </GallerySectionWrapper>
  );
};

export default GallerySection;