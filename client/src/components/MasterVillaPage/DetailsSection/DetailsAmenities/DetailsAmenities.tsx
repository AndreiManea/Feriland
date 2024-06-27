import { useState, useRef } from 'react';
import { HoverLine } from '../../../Navbar/Navbar.styled';
import DetailsFeatureIcon from '../DetailsFeatureIcon/DetailsFeatureIcon';
import {
  AmenitiesContainer,
  BoldTextLarge,
  AmenitiesGrid,
  LinkContainer,
  BoldTextSmall,
  ModalContainer,
  ModalContent,
  ButtonContainer,
  CloseButton,
  Amenities,
  HeadingLeft,
} from '../DetailsSection.styled';
import { amenitiesData } from '../../../../utils/mockData.utils';

const DetailsAmenities = () => {
  const [showDetails, setShowDetails] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const toggleDetails = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event?.preventDefault();
    setShowDetails(prev => !prev);
  };

  return (
    <AmenitiesContainer>
      <BoldTextLarge>What this place offers</BoldTextLarge>
      <AmenitiesGrid>
        {amenitiesData.slice(0, 10).map((amenity, index) => (
          <DetailsFeatureIcon
            key={index}
            iconSrc={amenity.iconSrc}
            boldText={amenity.boldText}
            smallText={amenity.smallText || ''}
          />
        ))}
      </AmenitiesGrid>
      <LinkContainer
        href="#"
        data-lenis-stop=""
        data-w-id="a6438947-7b1b-9754-0d0b-3ecc7d6e76c8"
        onClick={toggleDetails}
      >
        <BoldTextSmall>
          View all {amenitiesData.length} amenities &gt;
        </BoldTextSmall>
        <HoverLine />
      </LinkContainer>
      {showDetails && (
        <ModalContainer ref={modalRef}>
          <ModalContent data-lenis-prevent="">
            <ButtonContainer>
              <CloseButton
                data-lenis-start=""
                data-w-id="8cd3ad2f-68c8-9cd4-5ee1-c264da6cdf7b"
                onClick={toggleDetails}
              >
                <img
                  src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d614b77ef113f8b090191d_cancel_10289710.png"
                  loading="lazy"
                  alt=""
                />
              </CloseButton>
            </ButtonContainer>
            <Amenities>
              <HeadingLeft>Amenities</HeadingLeft>
              <BoldTextLarge>Scenic Views</BoldTextLarge>
              <AmenitiesGrid>
                {amenitiesData.map((amenity, index) => (
                  <DetailsFeatureIcon
                    key={index}
                    iconSrc={amenity.iconSrc}
                    boldText={amenity.boldText}
                    smallText={amenity.smallText || ''}
                  />
                ))}
              </AmenitiesGrid>
            </Amenities>
          </ModalContent>
        </ModalContainer>
      )}
    </AmenitiesContainer>
  );
};

export default DetailsAmenities;
