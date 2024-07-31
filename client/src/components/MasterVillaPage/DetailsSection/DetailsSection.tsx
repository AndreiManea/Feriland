import { useRef, useState } from 'react';
import {
  Amenities,
  AmenitiesContainer,
  AmenitiesGrid,
  BoldTextLarge,
  BoldTextSmall,
  ButtonContainer,
  CardsContainer,
  CloseButton,
  GridContainer,
  GridSection,
  IconDetailsContainer,
  IconDetailsTextContainer,
  IconDetailsWrapper,
  LinkContainer,
  MenuDivider,
  ModalContainer,
  ModalContent,
  SectionContainer,
  SectionWrapper,
  TextSmall,
  SmallTextNone,
  HeadingLeft,
  GalleryPopUp,
  GalleryContainer,
  GalleryContent,
  GalleryStrip,
  GalleryView,
  Spinner,
  LeftControls,
  RightControls,
  GalleryCloseBtn,
  Frame,
  Figure,
  GalleryStripItem,
  ItemThumbnail,
} from './DetailsSection.styled';
import StickyCalendar from './CalendarSection/StickyCalendar/StickyCalendar';
import DetailsHeader from './DetailsHeader/DetailsHeader';
import DetailsRoomCard from './DetailsRoomCard/DetailsRoomCard';
import DetailsFeatureIcon from './DetailsFeatureIcon/DetailsFeatureIcon';
import DetailsTabs from './DetailsTabs/DetailsTabs';
import CalendarSection from './CalendarSection/CalendarSection';
import useDarkNavbar from '../../../utils/hooks/useDarkNavbar';

const DetailsSection: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [activePhotoId, setActivePhotoId] = useState(1);
  // const [galleryId, setGalleryId] = useState(1)
  const sectionRef = useRef<HTMLDivElement>(null);
  useDarkNavbar(sectionRef);

  const toggleDetails = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event?.preventDefault();
    setShowDetails(!showDetails);
  };

  const toggleGalleryPopUp = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event?.preventDefault();
    setGalleryOpen(!galleryOpen);
  };

  const cardItems = [
    {
      src: 'https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d71d4cbcbf35a9a61090d1_10318%20(1).jpg',
      srcSet:
        'https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d71d4cbcbf35a9a61090d1_10318%20(1)-p-500.jpg 500w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d71d4cbcbf35a9a61090d1_10318%20(1)-p-800.jpg 800w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d71d4cbcbf35a9a61090d1_10318%20(1)-p-1080.jpg 1080w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d71d4cbcbf35a9a61090d1_10318%20(1)-p-1600.jpg 1600w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d71d4cbcbf35a9a61090d1_10318%20(1).jpg 2000w',
      altText: 'Bedroom 1',
      title: 'Bedroom 1',
    },
    {
      src: 'https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d389606f5c05a7c364047b_interior-design-hut-photo%20(1)-p-500.jpg',
      srcSet:
        'https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d389606f5c05a7c364047b_interior-design-hut-photo%20(1)-p-500.jpg 500w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d389606f5c05a7c364047b_interior-design-hut-photo%20(1)-p-800.jpg 800w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d389606f5c05a7c364047b_interior-design-hut-photo%20(1)-p-1080.jpg 1080w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d389606f5c05a7c364047b_interior-design-hut-photo%20(1).jpg 1333w',
      altText: 'Bedroom 2',
      title: 'Bedroom 2',
    },
    {
      src: 'https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dca436b675c78191f9704b_1205.jpg',
      srcSet:
        'https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dca436b675c78191f9704b_1205-p-500.jpg 500w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dca436b675c78191f9704b_1205-p-800.jpg 800w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dca436b675c78191f9704b_1205.jpg 1000w',
      altText: 'Bathroom',
      title: 'Bathroom',
    },
    {
      src: 'https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dca4c8bfccf1f0baba49f0_40602.jpg',
      srcSet:
        'https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dca4c8bfccf1f0baba49f0_40602-p-500.jpg 500w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dca4c8bfccf1f0baba49f0_40602-p-800.jpg 800w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dca4c8bfccf1f0baba49f0_40602.jpg 1000w',
      altText: 'Living Area',
      title: 'Living Area',
    },
  ];

  const featuresArray = [
    {
      iconSrc:
        'https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dcb23745008c1d93dbff02_cab-gps_13807485.svg',
      boldText: 'Free parking on the premise',
      smallText: 'Up to 3 cars',
    },
    {
      iconSrc:
        'https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dcb48ba57382c01d3830c4_river_13806426.svg',
      boldText: 'Pool and Ciubar',
      smallText: 'This is an extra and you will have to call',
    },
    {
      iconSrc:
        'https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dcb42c74276c399013c032_calendar_13868806.svg',
      boldText: 'Free Cancelation before ( dynamic date )',
      smallText: '',
    },
  ];

  return (
    <>
      <SectionWrapper ref={sectionRef}>
        <SectionContainer>
          <GridContainer>
            <GridSection>
              <DetailsHeader />
              <CardsContainer>
                {cardItems.map(card => (
                  <DetailsRoomCard
                    imgSrc={card.src}
                    imgSet={card.srcSet}
                    altText={card.altText}
                    title={card.title}
                    onClick={toggleGalleryPopUp}
                  />
                ))}
              </CardsContainer>
              <MenuDivider />
              <IconDetailsWrapper>
                {featuresArray.map(feature => (
                  <DetailsFeatureIcon
                    iconSrc={feature.iconSrc}
                    boldText={feature.boldText}
                    smallText={feature.smallText}
                  />
                ))}
              </IconDetailsWrapper>
              <MenuDivider />
              <DetailsTabs />
              <MenuDivider />
              <AmenitiesContainer>
                <BoldTextLarge>What this place offers</BoldTextLarge>
                <AmenitiesGrid>
                  <IconDetailsContainer>
                    <img
                      src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65ddce68e750f1cc62d0de1b_spoon_13865462.svg"
                      loading="lazy"
                      alt=""
                    />
                    <IconDetailsTextContainer>
                      <TextSmall>Kitchen</TextSmall>
                    </IconDetailsTextContainer>
                  </IconDetailsContainer>
                  <IconDetailsContainer>
                    <img
                      src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65ddce7f81c110a2718c6688_connection_13808316.svg"
                      loading="lazy"
                      alt=""
                    />
                    <IconDetailsTextContainer>
                      <TextSmall>Fast wifi - 567 Mbps</TextSmall>
                    </IconDetailsTextContainer>
                  </IconDetailsContainer>
                  <IconDetailsContainer>
                    <img
                      src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65ddcebd64a3dd0c908ab15c_store_13808743.svg"
                      loading="lazy"
                      alt=""
                    />
                    <IconDetailsTextContainer>
                      <TextSmall>Pets Allowed</TextSmall>
                    </IconDetailsTextContainer>
                  </IconDetailsContainer>
                  <IconDetailsContainer>
                    <img
                      src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65ddcef3e30ad8301dda2634_multimedia_13866697.svg"
                      loading="lazy"
                      alt=""
                    />
                    <IconDetailsTextContainer>
                      <TextSmall>90'' Smart Projector - Netflix</TextSmall>
                    </IconDetailsTextContainer>
                  </IconDetailsContainer>
                  <IconDetailsContainer>
                    <img
                      src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65ddcf5a7e945dad6c0e5393_camp_13809154.svg"
                      loading="lazy"
                      alt=""
                    />
                    <IconDetailsTextContainer>
                      <TextSmall>Fire Pit</TextSmall>
                    </IconDetailsTextContainer>
                  </IconDetailsContainer>
                  <IconDetailsContainer>
                    <img
                      src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65ddd00453bad6094728ed29_bath_13805708.svg"
                      loading="lazy"
                      alt=""
                    />
                    <IconDetailsTextContainer>
                      <TextSmall>Outdoor Shower</TextSmall>
                    </IconDetailsTextContainer>
                  </IconDetailsContainer>
                  <IconDetailsContainer>
                    <img
                      src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65ddd04f7b22dce63f5d710c_hot-tub_9247169.svg"
                      loading="lazy"
                      alt=""
                    />
                    <IconDetailsTextContainer>
                      <TextSmall>Ciubar / Hot Tub</TextSmall>
                    </IconDetailsTextContainer>
                  </IconDetailsContainer>
                  <IconDetailsContainer>
                    <img
                      src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65ddd12d0e13a6ab08cfe994_toilet-hanger_13809689.svg"
                      loading="lazy"
                      alt=""
                    />
                    <IconDetailsTextContainer>
                      <TextSmall>Bath Robe / Towels</TextSmall>
                    </IconDetailsTextContainer>
                  </IconDetailsContainer>
                  <IconDetailsContainer>
                    <img
                      src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65ddd1a1475b4c687ff43465_camera_13807476.svg"
                      loading="lazy"
                      alt=""
                    />
                    <IconDetailsTextContainer>
                      <SmallTextNone>Security cameras</SmallTextNone>
                    </IconDetailsTextContainer>
                  </IconDetailsContainer>
                  <IconDetailsContainer>
                    <img
                      src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65ddd1ccb6199bfeb56e36a6_christmas_13808034.svg"
                      loading="lazy"
                      alt=""
                    />
                    <IconDetailsTextContainer>
                      <SmallTextNone>Air conditioning</SmallTextNone>
                    </IconDetailsTextContainer>
                  </IconDetailsContainer>
                </AmenitiesGrid>
                <LinkContainer
                  href="#"
                  data-lenis-stop=""
                  data-w-id="a6438947-7b1b-9754-0d0b-3ecc7d6e76c8"
                  onClick={toggleDetails}
                >
                  <BoldTextSmall>View all 42 amenities &gt;</BoldTextSmall>
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
                          <IconDetailsContainer>
                            <img
                              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e04cafc585db6796f42e20_drink_13866883.svg"
                              loading="lazy"
                              alt=""
                            />
                            <IconDetailsTextContainer>
                              <TextSmall>Vineyard View</TextSmall>
                            </IconDetailsTextContainer>
                          </IconDetailsContainer>
                          <IconDetailsContainer>
                            <img
                              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e04cfcccb6912b6897f374_road_13808425.svg"
                              loading="lazy"
                              alt=""
                            />
                            <IconDetailsTextContainer>
                              <TextSmall>Valley view</TextSmall>
                            </IconDetailsTextContainer>
                          </IconDetailsContainer>
                          <IconDetailsContainer>
                            <img
                              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e04d2b07ae7f3b71c0a71a_day_13805435.svg"
                              loading="lazy"
                              alt=""
                            />
                            <IconDetailsTextContainer>
                              <TextSmall>Garden View</TextSmall>
                            </IconDetailsTextContainer>
                          </IconDetailsContainer>
                          <IconDetailsContainer>
                            <img
                              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e04db7a8bf61da9cb15336_bay_6056964.svg"
                              loading="lazy"
                              alt=""
                            />
                            <IconDetailsTextContainer>
                              <TextSmall>Lake View</TextSmall>
                            </IconDetailsTextContainer>
                          </IconDetailsContainer>
                        </AmenitiesGrid>
                        <BoldTextLarge>Bathroom</BoldTextLarge>
                        <AmenitiesGrid>
                          <IconDetailsContainer>
                            <img
                              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e04dff8aa09181d9ab566e_hair-dryer_13865574.svg"
                              loading="lazy"
                              alt=""
                            />
                            <IconDetailsTextContainer>
                              <TextSmall>Hair Dryer</TextSmall>
                            </IconDetailsTextContainer>
                          </IconDetailsContainer>
                          <IconDetailsContainer>
                            <img
                              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e04e35c9b2bebf9065cf29_wash_13806192.svg"
                              loading="lazy"
                              alt=""
                            />
                            <IconDetailsTextContainer>
                              <TextSmall>Body Soap</TextSmall>
                            </IconDetailsTextContainer>
                          </IconDetailsContainer>
                          <IconDetailsContainer>
                            <img
                              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e04e65afbcab1341c4c7b2_gel_1592662.svg"
                              loading="lazy"
                              alt=""
                            />
                            <IconDetailsTextContainer>
                              <TextSmall>Shampoo</TextSmall>
                            </IconDetailsTextContainer>
                          </IconDetailsContainer>
                          <IconDetailsContainer>
                            <img
                              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65ddd00453bad6094728ed29_bath_13805708.svg"
                              loading="lazy"
                              alt=""
                            />
                            <IconDetailsTextContainer>
                              <TextSmall>Outdoor / Indoor Shower</TextSmall>
                            </IconDetailsTextContainer>
                          </IconDetailsContainer>
                          <IconDetailsContainer>
                            <img
                              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e04ed61bddacebfb2e96f4_hot-spring_7755240.svg"
                              loading="lazy"
                              alt=""
                            />
                            <IconDetailsTextContainer>
                              <TextSmall>Hot Water</TextSmall>
                            </IconDetailsTextContainer>
                          </IconDetailsContainer>
                        </AmenitiesGrid>
                        <BoldTextLarge>Bedroom and laundry</BoldTextLarge>
                        <AmenitiesGrid>
                          <IconDetailsContainer>
                            <img
                              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e04f32a548ba3e6e6cf07a_rack_11088314.svg"
                              loading="lazy"
                              alt=""
                            />
                            <IconDetailsTextContainer>
                              <TextSmall>Hangers</TextSmall>
                            </IconDetailsTextContainer>
                          </IconDetailsContainer>
                          <IconDetailsContainer>
                            <img
                              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e04f676f7f914679a8a8ed_towels_3964622.svg"
                              loading="lazy"
                              alt=""
                            />
                            <IconDetailsTextContainer>
                              <TextSmall>Bed Linens</TextSmall>
                            </IconDetailsTextContainer>
                          </IconDetailsContainer>
                          <IconDetailsContainer>
                            <img
                              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e04fa307efdcd200870dc6_pillow_9164914.svg"
                              loading="lazy"
                              alt=""
                            />
                            <IconDetailsTextContainer>
                              <TextSmall>Extra pillow and blankets</TextSmall>
                            </IconDetailsTextContainer>
                          </IconDetailsContainer>
                          <IconDetailsContainer>
                            <img
                              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e0500eb7b7496526191da6_curtain_8143929.svg"
                              loading="lazy"
                              alt=""
                            />
                            <IconDetailsTextContainer>
                              <TextSmall>Room-darkening shades</TextSmall>
                            </IconDetailsTextContainer>
                          </IconDetailsContainer>
                          <IconDetailsContainer>
                            <img
                              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e0504b6ae522bb3e95805c_iron.svg"
                              loading="lazy"
                              alt=""
                            />
                            <IconDetailsTextContainer>
                              <TextSmall>Iron</TextSmall>
                            </IconDetailsTextContainer>
                          </IconDetailsContainer>
                        </AmenitiesGrid>
                        <BoldTextLarge>Entertainment</BoldTextLarge>
                        <AmenitiesGrid>
                          <IconDetailsContainer>
                            <img
                              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e0511490de47718bb05359_book_13049652.svg"
                              loading="lazy"
                              alt=""
                            />
                            <IconDetailsTextContainer>
                              <TextSmall>Books and reading material</TextSmall>
                            </IconDetailsTextContainer>
                          </IconDetailsContainer>
                          <IconDetailsContainer>
                            <img
                              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e0516cff49b4ee98fad6f4_dices_8042383.svg"
                              loading="lazy"
                              alt=""
                            />
                            <IconDetailsTextContainer>
                              <TextSmall>Board Games</TextSmall>
                            </IconDetailsTextContainer>
                          </IconDetailsContainer>
                          <IconDetailsContainer>
                            <img
                              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65ddcef3e30ad8301dda2634_multimedia_13866697.svg"
                              loading="lazy"
                              alt=""
                            />
                            <IconDetailsTextContainer>
                              <TextSmall>
                                90'' Smart Projector - Netflix
                              </TextSmall>
                            </IconDetailsTextContainer>
                          </IconDetailsContainer>
                          <IconDetailsContainer>
                            <img
                              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e0519bc6c50b11add84e72_piece_10593976.svg"
                              loading="lazy"
                              alt=""
                            />
                            <IconDetailsTextContainer>
                              <TextSmall>Chess</TextSmall>
                            </IconDetailsTextContainer>
                          </IconDetailsContainer>
                        </AmenitiesGrid>
                        <BoldTextLarge>Kitchen and dining</BoldTextLarge>
                        <AmenitiesGrid>
                          <IconDetailsContainer>
                            <img
                              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65ddce68e750f1cc62d0de1b_spoon_13865462.svg"
                              loading="lazy"
                              alt=""
                            />
                            <IconDetailsTextContainer>
                              <TextSmall>Kitchen on premise</TextSmall>
                            </IconDetailsTextContainer>
                          </IconDetailsContainer>
                          <IconDetailsContainer>
                            <img
                              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e0522838b64e3bbbd7a979_refrigerator_10400518.svg"
                              loading="lazy"
                              alt=""
                            />
                            <IconDetailsTextContainer>
                              <TextSmall>Refrigerator</TextSmall>
                            </IconDetailsTextContainer>
                          </IconDetailsContainer>
                          <IconDetailsContainer>
                            <img
                              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e0536326f336373fa199ea_oven_2660647.svg"
                              loading="lazy"
                              alt=""
                            />
                            <IconDetailsTextContainer>
                              <TextSmall>Microwave</TextSmall>
                            </IconDetailsTextContainer>
                          </IconDetailsContainer>
                          <IconDetailsContainer>
                            <img
                              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e052af61cf44d2f52d0c24_kitchen-appliance_13866061.svg"
                              loading="lazy"
                              alt=""
                            />
                            <IconDetailsTextContainer>
                              <TextSmall>Coffee maker</TextSmall>
                            </IconDetailsTextContainer>
                          </IconDetailsContainer>
                          <IconDetailsContainer>
                            <img
                              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e052d30774df43d88bb7a9_gas-range_13866142.svg"
                              loading="lazy"
                              alt=""
                            />
                            <IconDetailsTextContainer>
                              <TextSmall>Stove</TextSmall>
                            </IconDetailsTextContainer>
                          </IconDetailsContainer>
                          <IconDetailsContainer>
                            <img
                              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e0533937f1df728163b903_bbq_3860226.svg"
                              loading="lazy"
                              alt=""
                            />
                            <IconDetailsTextContainer>
                              <TextSmall>Barbecue utensils</TextSmall>
                            </IconDetailsTextContainer>
                          </IconDetailsContainer>
                          <IconDetailsContainer>
                            <img
                              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e04cafc585db6796f42e20_drink_13866883.svg"
                              loading="lazy"
                              alt=""
                            />
                            <IconDetailsTextContainer>
                              <TextSmall>Wine glasses</TextSmall>
                            </IconDetailsTextContainer>
                          </IconDetailsContainer>
                        </AmenitiesGrid>
                        <BoldTextLarge>Outdoor</BoldTextLarge>
                        <AmenitiesGrid>
                          <IconDetailsContainer>
                            <img
                              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e04f32a548ba3e6e6cf07a_rack_11088314.svg"
                              loading="lazy"
                              alt=""
                            />
                            <IconDetailsTextContainer>
                              <TextSmall>Private Patio / Balcony</TextSmall>
                            </IconDetailsTextContainer>
                          </IconDetailsContainer>
                          <IconDetailsContainer>
                            <img
                              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e058e57cee17138b4a1432_grass_3439934.svg"
                              loading="lazy"
                              alt=""
                            />
                            <IconDetailsTextContainer>
                              <TextSmall>Private Garden</TextSmall>
                            </IconDetailsTextContainer>
                          </IconDetailsContainer>
                          <IconDetailsContainer>
                            <img
                              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e04db7a8bf61da9cb15336_bay_6056964.svg"
                              loading="lazy"
                              alt=""
                            />
                            <IconDetailsTextContainer>
                              <TextSmall>Private Lake</TextSmall>
                            </IconDetailsTextContainer>
                          </IconDetailsContainer>
                          <IconDetailsContainer>
                            <img
                              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e0594cb65323938f4b672e_dinner-table_3213863.svg"
                              loading="lazy"
                              alt=""
                            />
                            <IconDetailsTextContainer>
                              <TextSmall>Outdoor Furniture</TextSmall>
                            </IconDetailsTextContainer>
                          </IconDetailsContainer>
                          <IconDetailsContainer>
                            <img
                              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e0533937f1df728163b903_bbq_3860226.svg"
                              loading="lazy"
                              alt=""
                            />
                            <IconDetailsTextContainer>
                              <TextSmall>BBQ Grill</TextSmall>
                            </IconDetailsTextContainer>
                          </IconDetailsContainer>
                          <IconDetailsContainer>
                            <img
                              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65ddcf5a7e945dad6c0e5393_camp_13809154.svg"
                              loading="lazy"
                              alt=""
                            />
                            <IconDetailsTextContainer>
                              <TextSmall>Fire Pit</TextSmall>
                            </IconDetailsTextContainer>
                          </IconDetailsContainer>
                          <IconDetailsContainer>
                            <img
                              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65ddd04f7b22dce63f5d710c_hot-tub_9247169.svg"
                              loading="lazy"
                              alt=""
                            />
                            <IconDetailsTextContainer>
                              <TextSmall>Ciubar</TextSmall>
                            </IconDetailsTextContainer>
                          </IconDetailsContainer>
                          <IconDetailsContainer>
                            <img
                              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e059ddc45911e4fc6afcf3_summer_13809572.svg"
                              loading="lazy"
                              alt=""
                            />
                            <IconDetailsTextContainer>
                              <TextSmall>Summer Pool</TextSmall>
                            </IconDetailsTextContainer>
                          </IconDetailsContainer>
                        </AmenitiesGrid>
                      </Amenities>
                    </ModalContent>
                  </ModalContainer>
                )}
              </AmenitiesContainer>
              <MenuDivider />
              <CalendarSection customClass="sectionCalendar" />
            </GridSection>
            <StickyCalendar />
          </GridContainer>
        </SectionContainer>
      </SectionWrapper>

      {/* TO DO - ADD IMAGES DEPENDING ON ROOM */}
      {galleryOpen && (
        <GalleryPopUp>
          <GalleryContainer>
            <GalleryContent>
              <GalleryView tabIndex={0}>
                <Frame>
                  <Figure>
                    {activePhotoId === 1 && (
                      <img src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d87eb8aa46a4bf3e99be79_master%20villa.png" />
                    )}
                    {activePhotoId === 2 && (
                      <img src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d71d4cbcbf35a9a61090d1_10318%20(1).jpg" />
                    )}
                    {activePhotoId === 3 && (
                      <img src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d5e1dd4aca861aa649961c_masterpoolvillabalex-1920x-q72.jpg" />
                    )}
                  </Figure>
                </Frame>
              </GalleryView>
              <Spinner
                role="progressbar"
                aria-live="polite"
                aria-hidden="true"
                aria-busy="false"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={100}
                aria-valuetext="Loaded image"
              />
              <LeftControls
                role="button"
                aria-hidden="true"
                aria-controls="w-lightbox-view"
                aria-label="previous image"
                tabIndex={-1}
                onClick={() => setActivePhotoId(activePhotoId - 1)}
                hasPrev={activePhotoId !== 1}
              />
              <RightControls
                role="button"
                aria-hidden="false"
                aria-controls="w-lightbox-view"
                aria-label="next image"
                tabIndex={0}
                onClick={() => setActivePhotoId(activePhotoId + 1)}
                hasNext={activePhotoId !== 3}
              />
              <GalleryCloseBtn
                role="button"
                aria-label="close lightbox"
                tabIndex={0}
                onClick={() => setGalleryOpen(false)}
              />
            </GalleryContent>
            <GalleryStrip role="tablist">
              <GalleryStripItem
                selectedImg={activePhotoId}
                currentImg={1}
                onClick={() => setActivePhotoId(1)}
                tabIndex={0}
                aria-controls="w-lightbox-view"
                role="tab"
                aria-label="show item 1 of 3"
                aria-selected="true"
              >
                <ItemThumbnail>
                  <img src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d87eb8aa46a4bf3e99be79_master%20villa.png" />
                </ItemThumbnail>
              </GalleryStripItem>
              <GalleryStripItem
                selectedImg={activePhotoId}
                currentImg={2}
                onClick={() => setActivePhotoId(2)}
                tabIndex={0}
                aria-controls="w-lightbox-view"
                role="tab"
                aria-label="show item 2 of 3"
              >
                <ItemThumbnail>
                  <img src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d71d4cbcbf35a9a61090d1_10318%20(1).jpg" />
                </ItemThumbnail>
              </GalleryStripItem>
              <GalleryStripItem
                selectedImg={activePhotoId}
                currentImg={3}
                onClick={() => setActivePhotoId(3)}
                tabIndex={0}
                aria-controls="w-lightbox-view"
                role="tab"
                aria-label="show item 3 of 3"
              >
                <ItemThumbnail>
                  <img src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d5e1dd4aca861aa649961c_masterpoolvillabalex-1920x-q72.jpg" />
                </ItemThumbnail>
              </GalleryStripItem>
            </GalleryStrip>
          </GalleryContainer>
        </GalleryPopUp>
      )}
    </>
  );
};

export default DetailsSection;
