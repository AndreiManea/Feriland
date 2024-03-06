import './DetailsSection.css';

import { useRef, useState } from 'react';
import './DetailsSection.css';

import CalendarSection from './CalendarSection/CalendarSection';
import StickyCalendar from './StickyCalendar/StickyCalendar';

const DetailsSection: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [currentTab, setCurrentTab] = useState('Tab 1');

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

  return (
    <div className="section rend">
      <div className="container property">
        <div className="w-layout-grid rent-grid">
          <div id="firstInfoId" className="property-info">
            <div className="title-short-info">
              <h2 className="heading-2 dark left">Entire Master Villa</h2>
              <div className="details">
                <p className="text-size_regular">6 Guests</p>
                <div className="dot-divider"></div>
                <p className="text-size_regular">2 Bedrooms</p>
                <div className="dot-divider"></div>
                <p className="text-size_regular">1.5 Baths</p>
                <div className="dot-divider"></div>
                <p className="text-size_regular">Ciubar</p>
              </div>
            </div>
            <div className="w-layout-grid property-cards">
              <div id="secondInfoId" className="property-card">
                <img
                  src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d71d4cbcbf35a9a61090d1_10318%20(1).jpg"
                  loading="lazy"
                  width="1000"
                  sizes="(max-width: 479px) 100vw, 110px"
                  alt=""
                  srcSet="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d71d4cbcbf35a9a61090d1_10318%20(1)-p-500.jpg 500w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d71d4cbcbf35a9a61090d1_10318%20(1)-p-800.jpg 800w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d71d4cbcbf35a9a61090d1_10318%20(1)-p-1080.jpg 1080w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d71d4cbcbf35a9a61090d1_10318%20(1)-p-1600.jpg 1600w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d71d4cbcbf35a9a61090d1_10318%20(1).jpg 2000w"
                  className="property-card-image"
                />
                <div className="text-button-container">
                  <p className="text-size_large center-mobile">Bedroom 1</p>
                  <a
                    href="#"
                    data-w-id="cc567828-d750-2bb8-6dfa-9cde9a42f92c"
                    className="underline-link w-inline-block w-lightbox"
                    aria-label="open lightbox"
                    aria-haspopup="dialog"
                  >
                    <div className="arrow-link">
                      <div className="text-size-tiny dark">View Images</div>
                      <img
                        src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dca5b678988b92e4c8e336_arrow_3183335.png"
                        loading="lazy"
                        alt=""
                        className="arrow"
                      />
                    </div>
                    <div className="hover-line">
                      <div className="hover-line-fill" id="hover-line-id"></div>
                    </div>
                  </a>
                </div>
              </div>
              <div id="thirdInfoId" className="property-card">
                <img
                  src="https://assets-global.website-files.com/65bcf5fac0…364047b_interior-design-hut-photo%20(1)-p-500.jpg"
                  loading="lazy"
                  width="1000"
                  sizes="(max-width: 479px) 100vw, 110px"
                  alt=""
                  srcSet="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d389606f5c05a7c364047b_interior-design-hut-photo%20(1)-p-500.jpg 500w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d389606f5c05a7c364047b_interior-design-hut-photo%20(1)-p-800.jpg 800w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d389606f5c05a7c364047b_interior-design-hut-photo%20(1)-p-1080.jpg 1080w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d389606f5c05a7c364047b_interior-design-hut-photo%20(1).jpg 1333w"
                  className="property-card-image"
                />
                <div className="text-button-container">
                  <p className="text-size_large center-mobile">Bedroom 1</p>
                  <a
                    href="#"
                    data-w-id="cc567828-d750-2bb8-6dfa-9cde9a42f92c"
                    className="underline-link w-inline-block w-lightbox"
                    aria-label="open lightbox"
                    aria-haspopup="dialog"
                  >
                    <div className="arrow-link">
                      <div className="text-size-tiny dark">View Images</div>
                      <img
                        src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dca5b678988b92e4c8e336_arrow_3183335.png"
                        loading="lazy"
                        alt=""
                        className="arrow"
                      />
                    </div>
                    <div className="hover-line">
                      <div className="hover-line-fill" id="hover-line-id"></div>
                    </div>
                  </a>
                </div>
              </div>
              <div id="fourthInfoId" className="property-card">
                <img
                  src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dca436b675c78191f9704b_1205.jpg"
                  loading="lazy"
                  width="1000"
                  sizes="(max-width: 479px) 100vw, 110px"
                  alt=""
                  srcSet="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dca436b675c78191f9704b_1205-p-500.jpg 500w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dca436b675c78191f9704b_1205-p-800.jpg 800w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dca436b675c78191f9704b_1205.jpg 1000w"
                  className="property-card-image"
                />
                <div className="text-button-container">
                  <p className="text-size_large center-mobile">Bathroom</p>
                  <a
                    href="#"
                    data-w-id="cc567828-d750-2bb8-6dfa-9cde9a42f92c"
                    className="underline-link w-inline-block w-lightbox"
                    aria-label="open lightbox"
                    aria-haspopup="dialog"
                  >
                    <div className="arrow-link">
                      <div className="text-size-tiny dark">View Images</div>
                      <img
                        src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dca5b678988b92e4c8e336_arrow_3183335.png"
                        loading="lazy"
                        alt=""
                        className="arrow"
                      />
                    </div>
                    <div className="hover-line">
                      <div className="hover-line-fill" id="hover-line-id"></div>
                    </div>
                  </a>
                </div>
              </div>
              <div id="fifthInfoId" className="property-card">
                <img
                  src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dca4c8bfccf1f0baba49f0_40602.jpg"
                  loading="lazy"
                  width="1000"
                  sizes="(max-width: 479px) 100vw, 110px"
                  alt=""
                  srcSet="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dca4c8bfccf1f0baba49f0_40602-p-500.jpg 500w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dca4c8bfccf1f0baba49f0_40602-p-800.jpg 800w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dca4c8bfccf1f0baba49f0_40602.jpg 1000w"
                  className="property-card-image"
                />
                <div className="text-button-container">
                  <p className="text-size_large center-mobile">Living Area</p>
                  <a
                    href="#"
                    data-w-id="cc567828-d750-2bb8-6dfa-9cde9a42f92c"
                    className="underline-link w-inline-block w-lightbox"
                    aria-label="open lightbox"
                    aria-haspopup="dialog"
                  >
                    <div className="arrow-link">
                      <div className="text-size-tiny dark">View Images</div>
                      <img
                        src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dca5b678988b92e4c8e336_arrow_3183335.png"
                        loading="lazy"
                        alt=""
                        className="arrow"
                      />
                    </div>
                    <div className="hover-line">
                      <div className="hover-line-fill" id="hover-line-id"></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="menu-divider"></div>
            <div className="icon-details-container">
              <div className="icon-details">
                <img
                  src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dcb23745008c1d93dbff02_cab-gps_13807485.svg"
                  loading="lazy"
                  alt=""
                  className="property-icon"
                />
                <div className="icon-details-text">
                  <p className="text-size_regular bold">
                    Free parking on the premise
                  </p>
                  <div className="text-size-tiny dark">Up to 3 cars</div>
                </div>
              </div>
              <div className="icon-details">
                <img
                  src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dcb48ba57382c01d3830c4_river_13806426.svg"
                  loading="lazy"
                  alt=""
                  className="property-icon"
                />
                <div className="icon-details-text">
                  <p className="text-size_regular bold">Pool and Ciubar</p>
                  <div className="text-size-tiny dark">
                    This is an extra and you will have to call
                  </div>
                </div>
              </div>
              <div className="icon-details">
                <img
                  src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dcb42c74276c399013c032_calendar_13868806.svg"
                  loading="lazy"
                  alt=""
                  className="property-icon"
                />
                <div className="icon-details-text">
                  <p className="text-size_regular bold">
                    Free Cancelation before ( dynamic date )
                  </p>
                </div>
              </div>
            </div>
            <div className="menu-divider"></div>
            <div className="container-w3 gutter-outside">
              <div className="second-example-with-underline">
                <div
                  className="tabs w-tabs"
                  data-current={currentTab}
                  data-easing="ease-in-out"
                  data-duration-in="300"
                  data-duration-out="300"
                >
                  <div
                    className="tabs-menu-underline-wrapper w-tab-menu"
                    role="tablist"
                  >
                    <a
                      data-w-tab="Tab 1"
                      className={`tabs-nav-item-underline _01 w-inline-block w-tab-link ${currentTab === 'Tab 1' ? 'w--current' : ''}`}
                      id="w-tabs-0-data-w-tab-0"
                      href="#w-tabs-0-data-w-pane-0"
                      role="tab"
                      aria-controls="w-tabs-0-data-w-pane-0"
                      aria-selected={currentTab === 'Tab 1' ? 'true' : 'false'}
                      onClick={event => handleTabClick('Tab 1', event)}
                      tabIndex={currentTab === 'Tab 1' ? 0 : -1}
                    >
                      <div className="tabs-nav-text">Description</div>
                    </a>
                    <a
                      data-w-tab="Tab 2"
                      className={`tabs-nav-item-underline _02 w-inline-block w-tab-link ${currentTab === 'Tab 2' ? 'w--current' : ''}`}
                      id="w-tabs-0-data-w-tab-1"
                      href="#w-tabs-0-data-w-pane-1"
                      role="tab"
                      aria-controls="w-tabs-0-data-w-pane-1"
                      aria-selected={currentTab === 'Tab 2' ? 'true' : 'false'}
                      onClick={event => handleTabClick('Tab 2', event)}
                      tabIndex={currentTab === 'Tab 2' ? 0 : -1}
                    >
                      <div className="tabs-nav-text">Rules</div>
                    </a>
                  </div>
                  <div className="tabs-content-wrapper w-tab-content">
                    <div
                      data-w-tab="Tab 1"
                      className={`tab-content-item w-tab-pane ${currentTab === 'Tab 1' ? 'w--tab-active' : ''}`}
                      id="w-tabs-0-data-w-pane-0"
                      role="tabpanel"
                      aria-labelledby="w-tabs-0-data-w-tab-0"
                    >
                      <div className="tab-content">
                        <div className="description">
                          <p className="text-size_regular">
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
                          </p>
                          <p className="text-size_large bold">
                            The Space - Keep it relatively short
                          </p>
                          <p className="text-size_regular">
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
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      data-w-tab="Tab 2"
                      className={`tab-content-item w-tab-pane ${currentTab === 'Tab 2' ? 'w--tab-active' : ''}`}
                      id="w-tabs-0-data-w-pane-1"
                      role="tabpanel"
                      aria-labelledby="w-tabs-0-data-w-tab-1"
                      style={{ opacity: '1' }}
                    >
                      <div className="tab-content">
                        <div className="description">
                          <div className="icon-details">
                            <img
                              loading="lazy"
                              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e1d71c9a41d0ccd77af64d_time_6862163.svg"
                              alt=""
                              className="property-icon"
                            />
                            <div className="icon-details-text">
                              <p className="text-size-tiny dark">
                                Check-in: 3:00 PM - 6:00 PM
                                <br />
                              </p>
                            </div>
                          </div>
                          <div className="icon-details">
                            <img
                              loading="lazy"
                              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e1d71c9a41d0ccd77af64d_time_6862163.svg"
                              alt=""
                              className="property-icon"
                            />
                            <div className="icon-details-text">
                              <p className="text-size-tiny dark">
                                Checkout before 10:00 AM
                                <br />
                              </p>
                            </div>
                          </div>
                          <p className="text-size_large bold">
                            Additional Rules
                          </p>
                          <p className="text-size_regular">
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
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="menu-divider"></div>
            <div className="amenities">
              <p className="text-size_large bold">What this place offers</p>
              <div className="w-layout-grid-amenities amenities-grid">
                <div className="icon-details">
                  <img
                    src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65ddce68e750f1cc62d0de1b_spoon_13865462.svg"
                    loading="lazy"
                    alt=""
                    className="property-icon"
                  />
                  <div className="icon-details-text">
                    <p className="text-size-tiny dark">Kitchen</p>
                  </div>
                </div>
                <div className="icon-details">
                  <img
                    src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65ddce7f81c110a2718c6688_connection_13808316.svg"
                    loading="lazy"
                    alt=""
                    className="property-icon"
                  />
                  <div className="icon-details-text">
                    <p className="text-size-tiny dark">Fast wifi - 567 Mbps</p>
                  </div>
                </div>
                <div className="icon-details">
                  <img
                    src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65ddcebd64a3dd0c908ab15c_store_13808743.svg"
                    loading="lazy"
                    alt=""
                    className="property-icon"
                  />
                  <div className="icon-details-text">
                    <p className="text-size-tiny dark">Pets Allowed</p>
                  </div>
                </div>
                <div className="icon-details">
                  <img
                    src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65ddcef3e30ad8301dda2634_multimedia_13866697.svg"
                    loading="lazy"
                    alt=""
                    className="property-icon"
                  />
                  <div className="icon-details-text">
                    <p className="text-size-tiny dark">
                      90'' Smart Projector - Netflix
                    </p>
                  </div>
                </div>
                <div className="icon-details">
                  <img
                    src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65ddcf5a7e945dad6c0e5393_camp_13809154.svg"
                    loading="lazy"
                    alt=""
                    className="property-icon"
                  />
                  <div className="icon-details-text">
                    <p className="text-size-tiny dark">Fire Pit</p>
                  </div>
                </div>
                <div className="icon-details">
                  <img
                    src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65ddd00453bad6094728ed29_bath_13805708.svg"
                    loading="lazy"
                    alt=""
                    className="property-icon"
                  />
                  <div className="icon-details-text">
                    <p className="text-size-tiny dark">Outdoor Shower</p>
                  </div>
                </div>
                <div className="icon-details">
                  <img
                    src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65ddd04f7b22dce63f5d710c_hot-tub_9247169.svg"
                    loading="lazy"
                    alt=""
                    className="property-icon"
                  />
                  <div className="icon-details-text">
                    <p className="text-size-tiny dark">Ciubar / Hot Tub</p>
                  </div>
                </div>
                <div className="icon-details">
                  <img
                    src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65ddd12d0e13a6ab08cfe994_toilet-hanger_13809689.svg"
                    loading="lazy"
                    alt=""
                    className="property-icon"
                  />
                  <div className="icon-details-text">
                    <p className="text-size-tiny dark">Bath Robe / Towels</p>
                  </div>
                </div>
                <div className="icon-details">
                  <img
                    src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65ddd1a1475b4c687ff43465_camera_13807476.svg"
                    loading="lazy"
                    alt=""
                    className="property-icon"
                  />
                  <div className="icon-details-text">
                    <p className="text-size-tiny dark cancel">
                      Security cameras
                    </p>
                  </div>
                </div>
                <div className="icon-details">
                  <img
                    src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65ddd1ccb6199bfeb56e36a6_christmas_13808034.svg"
                    loading="lazy"
                    alt=""
                    className="property-icon"
                  />
                  <div className="icon-details-text">
                    <p className="text-size-tiny dark cancel">
                      Air conditioning
                    </p>
                  </div>
                </div>
              </div>
              <a
                href="#"
                data-lenis-stop=""
                data-w-id="a6438947-7b1b-9754-0d0b-3ecc7d6e76c8"
                className="underline-link w-inline-block"
                onClick={toggleDetails}
              >
                <div className="text-size-tiny dark bold">
                  View all 42 amenities &gt;
                </div>
                <div className="hover-line">
                  <div
                    className="hover-line-fill"
                    style={{
                      transform:
                        'translate3d(-101%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                      transformStyle: 'preserve-3d',
                    }}
                  ></div>
                </div>
              </a>
              <div
                className={`amenities-details-container ${showDetails ? 'details-container' : ''}`}
                ref={modalRef}
                tabIndex={0}
              >
                <div
                  data-lenis-prevent=""
                  className="description-details amenities"
                >
                  <div className="close-button-container">
                    <a
                      data-lenis-start=""
                      data-w-id="8cd3ad2f-68c8-9cd4-5ee1-c264da6cdf7b"
                      className="close-button-property"
                      onClick={toggleDetails}
                    >
                      <img
                        src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d614b77ef113f8b090191d_cancel_10289710.png"
                        loading="lazy"
                        alt=""
                        className="icon small"
                      />
                    </a>
                  </div>
                  <div className="padding">
                    <h2 className="heading-2 dark left">Amenities</h2>
                    <p className="text-size_large bold">Scenic Views</p>
                    <div className="w-layout-grid-amenities amenities-grid">
                      <div className="icon-details">
                        <img
                          src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e04cafc585db6796f42e20_drink_13866883.svg"
                          loading="lazy"
                          alt=""
                          className="property-icon"
                        />
                        <div className="icon-details-text">
                          <p className="text-size-tiny dark">Vineyard View</p>
                        </div>
                      </div>
                      <div className="icon-details">
                        <img
                          src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e04cfcccb6912b6897f374_road_13808425.svg"
                          loading="lazy"
                          alt=""
                          className="property-icon"
                        />
                        <div className="icon-details-text">
                          <p className="text-size-tiny dark">Valley view</p>
                        </div>
                      </div>
                      <div className="icon-details">
                        <img
                          src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e04d2b07ae7f3b71c0a71a_day_13805435.svg"
                          loading="lazy"
                          alt=""
                          className="property-icon"
                        />
                        <div className="icon-details-text">
                          <p className="text-size-tiny dark">Garden View</p>
                        </div>
                      </div>
                      <div className="icon-details">
                        <img
                          src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e04db7a8bf61da9cb15336_bay_6056964.svg"
                          loading="lazy"
                          alt=""
                          className="property-icon"
                        />
                        <div className="icon-details-text">
                          <p className="text-size-tiny dark">Lake View</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-size_large bold">Bathroom</p>
                    <div className="w-layout-grid-amenities amenities-grid">
                      <div className="icon-details">
                        <img
                          src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e04dff8aa09181d9ab566e_hair-dryer_13865574.svg"
                          loading="lazy"
                          alt=""
                          className="property-icon"
                        />
                        <div className="icon-details-text">
                          <p className="text-size-tiny dark">Hair Dryer</p>
                        </div>
                      </div>
                      <div className="icon-details">
                        <img
                          src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e04e35c9b2bebf9065cf29_wash_13806192.svg"
                          loading="lazy"
                          alt=""
                          className="property-icon"
                        />
                        <div className="icon-details-text">
                          <p className="text-size-tiny dark">Body Soap</p>
                        </div>
                      </div>
                      <div className="icon-details">
                        <img
                          src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e04e65afbcab1341c4c7b2_gel_1592662.svg"
                          loading="lazy"
                          alt=""
                          className="property-icon"
                        />
                        <div className="icon-details-text">
                          <p className="text-size-tiny dark">Shampoo</p>
                        </div>
                      </div>
                      <div className="icon-details">
                        <img
                          src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65ddd00453bad6094728ed29_bath_13805708.svg"
                          loading="lazy"
                          alt=""
                          className="property-icon"
                        />
                        <div className="icon-details-text">
                          <p className="text-size-tiny dark">
                            Outdoor / Indoor Shower
                          </p>
                        </div>
                      </div>
                      <div className="icon-details">
                        <img
                          src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e04ed61bddacebfb2e96f4_hot-spring_7755240.svg"
                          loading="lazy"
                          alt=""
                          className="property-icon"
                        />
                        <div className="icon-details-text">
                          <p className="text-size-tiny dark">Hot Water</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-size_large bold">Bedroom and laundry</p>
                    <div className="w-layout-grid-amenities amenities-grid">
                      <div className="icon-details">
                        <img
                          src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e04f32a548ba3e6e6cf07a_rack_11088314.svg"
                          loading="lazy"
                          alt=""
                          className="property-icon"
                        />
                        <div className="icon-details-text">
                          <p className="text-size-tiny dark">Hangers</p>
                        </div>
                      </div>
                    </div>
                    <div className="icon-details">
                      <img
                        src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e04f676f7f914679a8a8ed_towels_3964622.svg"
                        loading="lazy"
                        alt=""
                        className="property-icon"
                      />
                      <div className="icon-details-text">
                        <p className="text-size-tiny dark">Bed Linens</p>
                      </div>
                    </div>
                    <div className="icon-details">
                      <img
                        src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e04fa307efdcd200870dc6_pillow_9164914.svg"
                        loading="lazy"
                        alt=""
                        className="property-icon"
                      />
                      <div className="icon-details-text">
                        <p className="text-size-tiny dark">
                          Extra pillow and blankets
                        </p>
                      </div>
                    </div>
                    <div className="icon-details">
                      <img
                        src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e0500eb7b7496526191da6_curtain_8143929.svg"
                        loading="lazy"
                        alt=""
                        className="property-icon"
                      />
                      <div className="icon-details-text">
                        <p className="text-size-tiny dark">
                          Room-darkening shades
                        </p>
                      </div>
                    </div>
                    <div className="icon-details">
                      <img
                        src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e0504b6ae522bb3e95805c_iron.svg"
                        loading="lazy"
                        alt=""
                        className="property-icon"
                      />
                      <div className="icon-details-text">
                        <p className="text-size-tiny dark">Iron</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CalendarSection />
          </div>
          <StickyCalendar />
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
