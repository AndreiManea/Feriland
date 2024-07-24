import styled, { css } from 'styled-components';
import { HoverLine } from '../../Navbar/Navbar.styled';

interface TabProps {
  currentTab: boolean;
}

interface LeftControlsProps {
  hasPrev: boolean;
}

interface RightControlsProps {
  hasNext: boolean;
}

interface GalleryStripProps {
  currentImg: number;
  selectedImg: number;
}

const galleryMediaQuery = css`
  @media (min-width: 768px) {
    margin-top: 2vh;
    height: 84vh;
  }
`;

const controlsBaseStyles = css`
  width: 4em;
  cursor: pointer;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 24px;
  transition: all 0.3s;
  position: absolute;
  top: 0;
  bottom: 0;
`;

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

export const GalleryPopUp = styled.div`
  cursor: auto;
  letter-spacing: normal;
  text-indent: 0;
  text-shadow: none;
  text-transform: none;
  visibility: visible;
  white-space: normal;
  word-break: normal;
  word-spacing: normal;
  word-wrap: normal;
  color: #fff;
  text-align: center;
  z-index: 2000;
  opacity: 1;
  -webkit-tap-highlight-color: transparent;
  background: rgba(0, 0, 0, 0.9);
  outline: 0;
  font-family: 'Kaftan';
  font-size: 17px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.2;
  list-style: disc;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
  height: 100%;
`;

export const GalleryContainer = styled.div`
  height: 100%;
  overflow: auto;
`;

export const GalleryContent = styled.div`
  position: relative;
  overflow: hidden;

  ${galleryMediaQuery}
`;

export const GalleryView = styled.div`
  width: 100vw;
  position: absolute;
  ${galleryMediaQuery}
`;

export const Spinner = styled.div`
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  border: 5px solid rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  margin-top: -20px;
  margin-left: -20px;
  animation: 0.8s linear infinite spin;
  position: absolute;
  top: 50%;
  left: 50%;
  display: none;
`;

export const LeftControls = styled.div<LeftControlsProps>`
  ${controlsBaseStyles}
  left: 0;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yMCAwIDI0IDQwIiB3aWR0aD0iMjQiIGhlaWdodD0iNDAiPjxnIHRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0ibTAgMGg1djIzaDIzdjVoLTI4eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDN2MjNoMjN2M2gtMjZ6IiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==);
  opacity: ${({ hasPrev }) => (hasPrev ? '0.5' : '0')};
`;

export const RightControls = styled.div<RightControlsProps>`
  ${controlsBaseStyles}
  right: 0;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMjQgNDAiIHdpZHRoPSIyNCIgaGVpZ2h0PSI0MCI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMC0waDI4djI4aC01di0yM2gtMjN6IiBvcGFjaXR5PSIuNCIvPjxwYXRoIGQ9Im0xIDFoMjZ2MjZoLTN2LTIzaC0yM3oiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+);
  opacity: ${({ hasNext }) => (hasNext ? '0.5' : '0')};
`;

export const GalleryCloseBtn = styled.div`
  width: 4em;
  cursor: pointer;
  background-position: center;
  background-repeat: no-repeat;
  transition: all 0.3s;
  position: absolute;
  top: 0;
  height: 2.6em;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMTggMTciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMCAwaDd2LTdoNXY3aDd2NWgtN3Y3aC01di03aC03eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDd2LTdoM3Y3aDd2M2gtN3Y3aC0zdi03aC03eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=);
  background-size: 18px;
  right: 0;

  @media (min-width: 768px) .w-lightbox-close {
    opacity: 0.8;
  }
`;

export const Frame = styled.div`
  vertical-align: middle;
  display: inline-block;
  padding: 5vh 5vw 0 5vw;
`;

export const Figure = styled.figure`
  margin: 0;
  position: relative;
  cursor: pointer;
  display: block;

  img {
    width: auto;
    height: auto;
    display: block;
    float: none;

    media (min-width: 768px) {
      max-width: 82.3vw;
      max-height: 84vh;
    }
  }
`;

export const GalleryStrip = styled.div`
  white-space: nowrap;
  padding: 0 1vh;
  line-height: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-x: auto;
  overflow-y: hidden;
`;

export const GalleryStripItem = styled.div<GalleryStripProps>`
  width: 10vh;
  box-sizing: content-box;
  cursor: pointer;
  padding: 2vh 1vh;
  display: inline-block;
  opacity: ${({ currentImg, selectedImg }) =>
    currentImg === selectedImg ? '0.3' : '1'};
`;

export const ItemThumbnail = styled.div`
  height: 10vh;
  background: #222;
  position: relative;
  overflow: hidden;

  img {
    height: 100%;
    left: 50%;
    transform: translate(-50%);
    position: absolute;
    top: 0;
    width: auto;
    max-width: none;
  }
`;
