import { useRef, useState } from 'react';
// import CalendarSection from './CalendarSection/CalendarSection';
import StickyCalendar from './StickyCalendar/StickyCalendar';
import {
  Amenities,
  AmenitiesContainer,
  AmenitiesGrid,
  ArrowLink,
  BoldText,
  BoldTextLarge,
  BoldTextSmall,
  ButtonContainer,
  CardContainer,
  CardsContainer,
  CloseButton,
  Content,
  ContentWrapper,
  Description,
  DetailsContainer,
  DotDivider,
  GridContainer,
  GridSection,
  Heading,
  HeadingContainer,
  IconDetailsContainer,
  IconDetailsTextContainer,
  IconDetailsWrapper,
  LinkContainer,
  MenuDivider,
  ModalContainer,
  ModalContent,
  SectionContainer,
  SectionWrapper,
  SubHeading,
  Tab,
  TabContent,
  TabMenu,
  TabText,
  Tabs,
  TabsContainer,
  TextButtonContainer,
  TextRegular,
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
} from './DetailsSection.styled';
import { HoverLine } from '../../Navbar/Navbar.styled';

const DetailsSection: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [currentTab, setCurrentTab] = useState('Tab 1');
  const [galleryOpen, setGalleryOpen] = useState(false);

  const handleTabClick = (
    tab: string,
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    setCurrentTab(tab);
  };

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

  return (
    <>
      <SectionWrapper>
        <SectionContainer>
          <GridContainer>
            <GridSection>
              <HeadingContainer>
                <Heading>Entire Master Villa</Heading>
                <DetailsContainer>
                  <TextRegular>6 Guests</TextRegular>
                  <DotDivider />
                  <TextRegular>2 Bedrooms</TextRegular>
                  <DotDivider />
                  <TextRegular>1.5 Baths</TextRegular>
                  <DotDivider />
                  <TextRegular>Ciubar</TextRegular>
                </DetailsContainer>
              </HeadingContainer>
              <CardsContainer>
                <CardContainer>
                  <img
                    src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d71d4cbcbf35a9a61090d1_10318%20(1).jpg"
                    srcSet="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d71d4cbcbf35a9a61090d1_10318%20(1)-p-500.jpg 500w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d71d4cbcbf35a9a61090d1_10318%20(1)-p-800.jpg 800w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d71d4cbcbf35a9a61090d1_10318%20(1)-p-1080.jpg 1080w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d71d4cbcbf35a9a61090d1_10318%20(1)-p-1600.jpg 1600w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d71d4cbcbf35a9a61090d1_10318%20(1).jpg 2000w"
                    sizes="(max-width: 479px) 100vw, 110px"
                    loading="lazy"
                    width="1000"
                    alt=""
                  />
                  <TextButtonContainer>
                    <SubHeading>Bedroom 1</SubHeading>
                    <LinkContainer
                      href="#"
                      data-w-id="cc567828-d750-2bb8-6dfa-9cde9a42f92c"
                      aria-label="open lightbox"
                      aria-haspopup="dialog"
                      onClick={toggleGalleryPopUp}
                    >
                      <ArrowLink>
                        <TextSmall>View Images</TextSmall>
                        <img
                          src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dca5b678988b92e4c8e336_arrow_3183335.png"
                          loading="lazy"
                          alt=""
                        />
                      </ArrowLink>
                      <HoverLine />
                    </LinkContainer>
                  </TextButtonContainer>
                </CardContainer>
                <CardContainer>
                  <img
                    src="https://assets-global.website-files.com/65bcf5fac0…364047b_interior-design-hut-photo%20(1)-p-500.jpg"
                    srcSet="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d389606f5c05a7c364047b_interior-design-hut-photo%20(1)-p-500.jpg 500w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d389606f5c05a7c364047b_interior-design-hut-photo%20(1)-p-800.jpg 800w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d389606f5c05a7c364047b_interior-design-hut-photo%20(1)-p-1080.jpg 1080w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d389606f5c05a7c364047b_interior-design-hut-photo%20(1).jpg 1333w"
                    sizes="(max-width: 479px) 100vw, 110px"
                    loading="lazy"
                    width="1000"
                    alt=""
                  />
                  <TextButtonContainer>
                    <SubHeading>Bedroom 2</SubHeading>
                    <LinkContainer
                      href="#"
                      data-w-id="cc567828-d750-2bb8-6dfa-9cde9a42f92c"
                      aria-label="open lightbox"
                      aria-haspopup="dialog"
                    >
                      <ArrowLink>
                        <TextSmall>View Images</TextSmall>
                        <img
                          src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dca5b678988b92e4c8e336_arrow_3183335.png"
                          loading="lazy"
                          alt=""
                        />
                      </ArrowLink>
                      <HoverLine />
                    </LinkContainer>
                  </TextButtonContainer>
                </CardContainer>
                <CardContainer>
                  <img
                    src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dca436b675c78191f9704b_1205.jpg"
                    srcSet="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dca436b675c78191f9704b_1205-p-500.jpg 500w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dca436b675c78191f9704b_1205-p-800.jpg 800w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dca436b675c78191f9704b_1205.jpg 1000w"
                    sizes="(max-width: 479px) 100vw, 110px"
                    loading="lazy"
                    width="1000"
                    alt=""
                  />
                  <TextButtonContainer>
                    <SubHeading>Bathroom</SubHeading>
                    <LinkContainer
                      href="#"
                      data-w-id="cc567828-d750-2bb8-6dfa-9cde9a42f92c"
                      aria-label="open lightbox"
                      aria-haspopup="dialog"
                    >
                      <ArrowLink>
                        <TextSmall>View Images</TextSmall>
                        <img
                          src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dca5b678988b92e4c8e336_arrow_3183335.png"
                          loading="lazy"
                          alt=""
                        />
                      </ArrowLink>
                      <HoverLine />
                    </LinkContainer>
                  </TextButtonContainer>
                </CardContainer>
                <CardContainer>
                  <img
                    src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dca4c8bfccf1f0baba49f0_40602.jpg"
                    srcSet="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dca4c8bfccf1f0baba49f0_40602-p-500.jpg 500w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dca4c8bfccf1f0baba49f0_40602-p-800.jpg 800w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dca4c8bfccf1f0baba49f0_40602.jpg 1000w"
                    sizes="(max-width: 479px) 100vw, 110px"
                    loading="lazy"
                    width="1000"
                    alt=""
                  />
                  <TextButtonContainer>
                    <SubHeading>Living Area</SubHeading>
                    <LinkContainer
                      href="#"
                      data-w-id="cc567828-d750-2bb8-6dfa-9cde9a42f92c"
                      aria-label="open lightbox"
                      aria-haspopup="dialog"
                    >
                      <ArrowLink>
                        <TextSmall>View Images</TextSmall>
                        <img
                          src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dca5b678988b92e4c8e336_arrow_3183335.png"
                          loading="lazy"
                          alt=""
                        />
                      </ArrowLink>
                      <HoverLine />
                    </LinkContainer>
                  </TextButtonContainer>
                </CardContainer>
              </CardsContainer>
              <MenuDivider />
              <IconDetailsWrapper>
                <IconDetailsContainer>
                  <img
                    src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dcb23745008c1d93dbff02_cab-gps_13807485.svg"
                    loading="lazy"
                    alt=""
                  />
                  <IconDetailsTextContainer>
                    <BoldText>Free parking on the premise</BoldText>
                    <TextSmall>Up to 3 cars</TextSmall>
                  </IconDetailsTextContainer>
                </IconDetailsContainer>
                <IconDetailsContainer>
                  <img
                    src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dcb48ba57382c01d3830c4_river_13806426.svg"
                    loading="lazy"
                    alt=""
                  />
                  <IconDetailsTextContainer>
                    <BoldText>Pool and Ciubar</BoldText>
                    <TextSmall>
                      This is an extra and you will have to call
                    </TextSmall>
                  </IconDetailsTextContainer>
                </IconDetailsContainer>
                <IconDetailsContainer>
                  <img
                    src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dcb42c74276c399013c032_calendar_13868806.svg"
                    loading="lazy"
                    alt=""
                  />
                  <IconDetailsTextContainer>
                    <BoldText>
                      Free Cancelation before ( dynamic date )
                    </BoldText>
                  </IconDetailsTextContainer>
                </IconDetailsContainer>
              </IconDetailsWrapper>
              <MenuDivider />
              <TabsContainer>
                <Tabs
                  data-current={currentTab}
                  data-easing="ease-in-out"
                  data-duration-in="200"
                  data-duration-out="200"
                >
                  <TabMenu role="tablist">
                    <Tab
                      data-w-tab="Tab 1"
                      currentTab={currentTab === 'Tab 1'}
                      id="w-tabs-0-data-w-tab-0"
                      href="#w-tabs-0-data-w-pane-0"
                      role="tab"
                      aria-controls="w-tabs-0-data-w-pane-0"
                      aria-selected={currentTab === 'Tab 1' ? 'true' : 'false'}
                      onClick={event => handleTabClick('Tab 1', event)}
                      tabIndex={currentTab === 'Tab 1' ? 0 : -1}
                    >
                      <TabText>Description</TabText>
                    </Tab>
                    <Tab
                      data-w-tab="Tab 2"
                      currentTab={currentTab === 'Tab 2'}
                      id="w-tabs-0-data-w-tab-1"
                      href="#w-tabs-0-data-w-pane-1"
                      role="tab"
                      aria-controls="w-tabs-0-data-w-pane-1"
                      aria-selected={currentTab === 'Tab 2' ? 'true' : 'false'}
                      onClick={event => handleTabClick('Tab 2', event)}
                      tabIndex={currentTab === 'Tab 2' ? 0 : -1}
                    >
                      <TabText>Rules</TabText>
                    </Tab>
                  </TabMenu>
                  <TabContent>
                    <ContentWrapper
                      data-w-tab="Tab 1"
                      currentTab={currentTab === 'Tab 1'}
                      id="w-tabs-0-data-w-pane-0"
                      role="tabpanel"
                      aria-labelledby="w-tabs-0-data-w-tab-0"
                    >
                      <Content>
                        <Description>
                          <TextRegular>
                            Galbino is a stunning 16th century castle in the
                            midst of nature just a few kilometres from the
                            enchanting village of Anghiari.
                            <br />
                            On a hill surrounded by woods and fields, Galbino
                            Castle is a private and exclusive place to relax,
                            explore nature, visit the cultural attractions of
                            the area and enjoy the Tuscan delights of food and
                            wine. The castle is naturally cool thanks to its
                            thick walls and features an infinity pool with
                            spectacular countryside views...
                          </TextRegular>
                          <BoldTextLarge>
                            The Space - Keep it relatively short
                          </BoldTextLarge>
                          <TextRegular>
                            The Castle, which is rented out for private use, has
                            ten bedrooms on two floors, a huge games room with
                            billiards and a ping pong table, a large kitchen
                            with a fireplace, two dining rooms, a library, a
                            living room with walls covered in frescos and a
                            small chapel which is still consecrated.
                            <br />
                            <br />
                            The castle is surrounded by a large garden, also for
                            the exclusive use of guests, housing the spectacular
                            infinity pool overlooking the Tuscan countryside.A
                            few steps from the pool there is a comfortable
                            changing room with a bathroom and shower.
                          </TextRegular>
                        </Description>
                      </Content>
                    </ContentWrapper>
                    <ContentWrapper
                      data-w-tab="Tab 2"
                      currentTab={currentTab === 'Tab 2'}
                      id="w-tabs-0-data-w-pane-1"
                      role="tabpanel"
                      aria-labelledby="w-tabs-0-data-w-tab-1"
                    >
                      <Content>
                        <Description>
                          <IconDetailsContainer>
                            <img
                              loading="lazy"
                              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e1d71c9a41d0ccd77af64d_time_6862163.svg"
                              alt=""
                            />
                            <IconDetailsTextContainer>
                              <TextSmall>
                                Check-in: 3:00 PM - 6:00 PM
                                <br />
                              </TextSmall>
                            </IconDetailsTextContainer>
                          </IconDetailsContainer>
                          <IconDetailsContainer>
                            <img
                              loading="lazy"
                              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e1d71c9a41d0ccd77af64d_time_6862163.svg"
                              alt=""
                            />
                            <IconDetailsTextContainer>
                              <TextSmall>
                                Checkout before 10:00 AM
                                <br />
                              </TextSmall>
                            </IconDetailsTextContainer>
                          </IconDetailsContainer>
                          <BoldTextLarge>Additional Rules</BoldTextLarge>
                          <TextRegular>
                            Included in the price:
                            <br />
                            Internet access, air conditioning, parking place,
                            electricity, gas, water, final cleaning, bed linen,
                            hand towels, pool, sunloungers, Wireless Internet
                            access. <br />‍<br />
                            4 persons and 2 persons (extra beds) including
                            children and infants (under 2 years). <br />
                            Please note that the maximum occupancy (6 persons)
                            must not be exceeded even with infants under 2 years
                            of age. <br />‍<br />
                            Pets:
                            <br />
                            Not allowed. Free of charge. <br />
                            <br />
                            Deposit (in cash when the keys are handed over on
                            site, will be refunded on departure):EUR 200
                            <br />
                          </TextRegular>
                        </Description>
                      </Content>
                    </ContentWrapper>
                  </TabContent>
                </Tabs>
              </TabsContainer>
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
              {/* <CalendarSection /> */}
            </GridSection>
            <StickyCalendar />
          </GridContainer>
        </SectionContainer>
      </SectionWrapper>

      {galleryOpen && (
        <GalleryPopUp>
          <GalleryContainer>
            <GalleryContent>
              <GalleryView tabIndex={0}>
                <Frame>
                  <Figure>
                    <img src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d87eb8aa46a4bf3e99be79_master%20villa.png" />
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
                hasPrev={true}
              ></LeftControls>
              <RightControls
                role="button"
                aria-hidden="false"
                aria-controls="w-lightbox-view"
                aria-label="next image"
                tabIndex={0}
                hasNext={true}
              ></RightControls>
              <GalleryCloseBtn
                role="button"
                aria-label="close lightbox"
                tabIndex={0}
              />
            </GalleryContent>
            <GalleryStrip role="tablist">
              <div
                className="w-lightbox-item w-lightbox-active"
                tabIndex={0}
                aria-controls="w-lightbox-view"
                role="tab"
                aria-label="show item 1 of 3"
                aria-selected="true"
              >
                <div className="w-lightbox-thumbnail">
                  <img
                    className="w-lightbox-img w-lightbox-wide w-lightbox-thumbnail-image"
                    src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d87eb8aa46a4bf3e99be79_master%20villa.png"
                  />
                </div>
              </div>
              <div
                className="w-lightbox-item"
                tabIndex={0}
                aria-controls="w-lightbox-view"
                role="tab"
                aria-label="show item 2 of 3"
              >
                <div className="w-lightbox-thumbnail">
                  <img
                    className="w-lightbox-img w-lightbox-wide w-lightbox-thumbnail-image"
                    src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d71d4cbcbf35a9a61090d1_10318%20(1).jpg"
                  />
                </div>
              </div>
              <div
                className="w-lightbox-item"
                tabIndex={0}
                aria-controls="w-lightbox-view"
                role="tab"
                aria-label="show item 3 of 3"
              >
                <div className="w-lightbox-thumbnail">
                  <img
                    className="w-lightbox-img w-lightbox-wide w-lightbox-thumbnail-image"
                    src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d5e1dd4aca861aa649961c_masterpoolvillabalex-1920x-q72.jpg"
                  />
                </div>
              </div>
            </GalleryStrip>
          </GalleryContainer>
        </GalleryPopUp>
      )}
    </>
  );
};

export default DetailsSection;
