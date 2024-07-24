import { useState } from 'react';
import {
  TabsContainer,
  Tabs,
  TabMenu,
  Tab,
  TabText,
  TabContent,
  ContentWrapper,
  Content,
  Description,
  TextRegular,
  BoldTextLarge,
  IconDetailsContainer,
  IconDetailsTextContainer,
  TextSmall,
} from '../DetailsSection.styled';

const DetailsTabs = () => {
  const [currentTab, setCurrentTab] = useState('Tab 1');

  const handleTabClick = (
    tab: string,
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    setCurrentTab(tab);
  };

  return (
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
                  Galbino is a stunning 16th century castle in the midst of
                  nature just a few kilometres from the enchanting village of
                  Anghiari.
                  <br />
                  On a hill surrounded by woods and fields, Galbino Castle is a
                  private and exclusive place to relax, explore nature, visit
                  the cultural attractions of the area and enjoy the Tuscan
                  delights of food and wine. The castle is naturally cool thanks
                  to its thick walls and features an infinity pool with
                  spectacular countryside views...
                </TextRegular>
                <BoldTextLarge>
                  The Space - Keep it relatively short
                </BoldTextLarge>
                <TextRegular>
                  The Castle, which is rented out for private use, has ten
                  bedrooms on two floors, a huge games room with billiards and a
                  ping pong table, a large kitchen with a fireplace, two dining
                  rooms, a library, a living room with walls covered in frescos
                  and a small chapel which is still consecrated.
                  <br />
                  <br />
                  The castle is surrounded by a large garden, also for the
                  exclusive use of guests, housing the spectacular infinity pool
                  overlooking the Tuscan countryside.A few steps from the pool
                  there is a comfortable changing room with a bathroom and
                  shower.
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
                  Internet access, air conditioning, parking place, electricity,
                  gas, water, final cleaning, bed linen, hand towels, pool,
                  sunloungers, Wireless Internet access. <br />‍<br />
                  4 persons and 2 persons (extra beds) including children and
                  infants (under 2 years). <br />
                  Please note that the maximum occupancy (6 persons) must not be
                  exceeded even with infants under 2 years of age. <br />‍<br />
                  Pets:
                  <br />
                  Not allowed. Free of charge. <br />
                  <br />
                  Deposit (in cash when the keys are handed over on site, will
                  be refunded on departure):EUR 200
                  <br />
                </TextRegular>
              </Description>
            </Content>
          </ContentWrapper>
        </TabContent>
      </Tabs>
    </TabsContainer>
  );
};

export default DetailsTabs;
