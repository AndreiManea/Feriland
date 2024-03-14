import styled from 'styled-components';
import { HoverLine } from '../../Navbar/Navbar.styled';

interface TabProps {
  currentTab: boolean;
}

export const SectionWrapper = styled.div`
  margin-bottom: 100px;
  padding-top: 4em;
  padding-bottom: 10.68px;
  position: static;
`;

export const SectionContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  max-width: none;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2.08em;
  padding-right: 2.08em;
`;

export const GridContainer = styled.div`
  grid-auto-columns: 1fr;
  display: grid;
  grid-column-gap: 6em;
  grid-row-gap: 6em;
  grid-template-rows: auto;
  grid-template-columns: 1.75fr 1fr;
`;

export const GridSection = styled.div`
  grid-column-gap: 4em;
  grid-row-gap: 4em;
  flex-direction: column;
  align-items: flex-start;
  display: flex;
  position: static;
  grid-area: span 1 / span 1 / span 1 / span 1;
`;

export const HeadingContainer = styled.div``;

export const Heading = styled.h2`
  z-index: 2;
  width: 100%;
  max-width: 20em;
  margin-top: 0;
  margin-bottom: 0;
  font-family: 'Kaftan';
  font-weight: 400;
  line-height: 1.3;
  position: relative;
  color: #000;
  text-align: left;
  font-size: 3.5em;
`;

export const DetailsContainer = styled.div`
  grid-column-gap: 0.6em;
  grid-row-gap: 0.6em;
  align-items: center;
  display: flex;
`;

export const TextRegular = styled.p`
  text-align: left;
  margin-bottom: 0;
  font-family: Satoshi, sans-serif;
  font-size: 1.1em;
  font-weight: 400;
  line-height: 1.5;
`;

export const DotDivider = styled.div`
  width: 4px;
  height: 4px;
  background-color: #000;
  border-radius: 10px;
`;

export const CardsContainer = styled.div`
  grid-auto-columns: 1fr;
  display: grid;
  min-width: 100%;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
`;

export const CardContainer = styled.div`
  grid-column-gap: 2em;
  grid-row-gap: 2em;
  background-color: rgba(234, 229, 223, 0);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 1.5em;
  justify-content: flex-start;
  align-items: center;
  padding: 26px;
  display: flex;
  grid-area: span 1 / span 1 / span 1 / span 1;

  img {
    width: 110px;
    height: 60px;
    object-fit: cover;
    border-radius: 199px;
  }
`;

export const TextButtonContainer = styled.div``;

export const SubHeading = styled.p`
  font-size: 1.35rem;
  line-height: 1.4;
`;

export const LinkContainer = styled.a`
  max-width: 100%;
  display: inline-block;
  margin-left: 0;
  margin-right: 0;
  padding: 0 4px 4px 0;
  font-size: 0.7em;
  text-decoration: none;
  position: relative;
  color: #fff;
  text-align: center;
  letter-spacing: 4px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0);
  border-style: none;
  border-bottom-width: 1px;
  border-bottom-color: rgba(255, 255, 255, 0.1);
  border-radius: 0;

  &:hover ${HoverLine} {
    opacity: 1;
  }
`;

export const ArrowLink = styled.div`
  grid-column-gap: 1em;
  grid-row-gap: 1em;
  flex-direction: row;
  align-items: center;
  display: flex;

  img {
    width: 1rem;
    height: auto;
  }
`;

export const TextSmall = styled.div`
  letter-spacing: 0;
  text-transform: none;
  margin-bottom: 0;
  font-family: Satoshi, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
`;

export const MenuDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const IconDetailsWrapper = styled.div`
  grid-column-gap: 2em;
  grid-row-gap: 2em;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  display: flex;
`;

export const IconDetailsContainer = styled.div`
  grid-column-gap: 2em;
  grid-row-gap: 2em;
  align-items: center;
  padding-left: 1rem;
  display: flex;

  img {
    width: 36px;
  }
`;

export const IconDetailsTextContainer = styled.div``;

export const BoldText = styled.p`
  text-align: left;
  margin-bottom: 0;
  font-family: Satoshi, sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  line-height: 1.5;
`;

export const TabsContainer = styled.div`
  width: 100%;
  max-width: none;
  margin-left: auto;
  margin-right: auto;
  border-top: 1px #505050;
  margin-top: 0;
  padding-top: 0;
`;

export const Tabs = styled.div`
  position: relative;
`;

export const TabMenu = styled.div`
  background-color: #eae5df;
  border-radius: 1000em;
  align-items: center;
  padding: 1em 2em;
  display: flex;
  position: relative;
`;

export const Tab = styled.a<TabProps>`
  max-width: 100%;
  text-decoration: none;
  cursor: pointer;
  vertical-align: top;
  border-radius: 999em;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0.9em 2em;
  transition: all 0.3s;
  display: flex;
  position: relative;
  text-align: center;
  grid-column-gap: 0.5em;

  color: #000;
  background-color: ${({ currentTab }) => (currentTab ? '#fff' : '#eae5df')};
  font-weight: ${({ currentTab }) => (currentTab ? '500' : 'none')};
`;

export const TabText = styled.div`
  z-index: 1;
  font-size: 1em;
  line-height: 1.2em;
  position: relative;
`;

export const TabContent = styled.div`
  display: block;
  position: relative;
  margin-top: 3em;
  padding-left: 1rem;
  padding-right: 1rem;
  overflow: visible;
`;

export const ContentWrapper = styled.div<TabProps>`
  position: relative;
  display: ${({ currentTab }) => (currentTab ? 'block' : 'none')};
  opacity: ${({ currentTab }) => (currentTab ? '1' : '0')};
  transition: opacity 300ms ease-in-out 0s;
`;

export const Content = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const Description = styled.div`
  grid-column-gap: 1.2em;
  grid-row-gap: 1.2em;
  flex-direction: column;
  align-items: flex-start;
  display: flex;
  position: relative;
`;

export const BoldTextLarge = styled.p`
  font-size: 1.6em;
  line-height: 1.4;
  margin-top: 10px;
  margin-bottom: 0;
  font-weight: 700;
`;

export const AmenitiesContainer = styled.div`
  width: 100%;
  grid-column-gap: 2em;
  grid-row-gap: 2em;
  flex-direction: column;
  align-items: flex-start;
  display: flex;
  position: relative;
`;

export const AmenitiesGrid = styled.div`
  width: 100%;
  min-width: 100%;
  grid-column-gap: 1.4em;
  grid-row-gap: 1em;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
`;

export const BoldTextSmall = styled.p`
  letter-spacing: 0;
  text-transform: none;
  margin-bottom: 0;
  font-family: Satoshi, sans-serif;
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 700;
`;

export const ModalContainer = styled.div`
  z-index: 4;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  position: fixed;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
`;

export const ModalContent = styled.div`
  overflow: scroll;
  padding: 0 0 2vw;
  background-color: #fff;
  border-radius: 1.5em;
  max-height: 50vh;
  max-width: 650px;
  min-height: 50vh;
  min-width: 650px;
  width: 100%;
  grid-column-gap: 2em;
  grid-row-gap: 2em;
  flex-direction: column;
  align-items: flex-start;
  display: flex;
  position: relative;
`;

export const ButtonContainer = styled.div`
  z-index: 3;
  width: 100%;
  background-color: #fff;
  border-top-left-radius: 1.5em;
  border-top-right-radius: 1.5em;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 0;
  padding: 1vw 2vw 1vw 1.5vw;
  display: flex;
  position: sticky;
  top: 0;

  img {
    width: 24px;
    opacity: 0.8;
  }
`;

export const CloseButton = styled.a`
  cursor: pointer;
  border-radius: 10em;
  padding: 16px;
  // transition:
  //   transform 0.5s,
  //   background-color 0.5s;
`;

export const Amenities = styled.div`
  grid-column-gap: 2em;
  grid-row-gap: 2em;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 2rem;
  padding-right: 2rem;
  display: flex;
`;

export const SmallTextNone = styled.div`
  letter-spacing: 0;
  text-transform: none;
  margin-bottom: 0;
  font-family: Satoshi, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
  text-decoration: line-through;
`;

export const HeadingLeft = styled.h2`
  font-weight: 400;
  line-height: 1.3;
  position: relative;
  margin-top: 0;
  margin-bottom: 0;
  font-family: 'Kaftan';
  z-index: 2;
  width: 100%;
  max-width: 20em;
  text-align: left;
  font-size: 3.5em;
  color: #000;
`;
