import styled from 'styled-components';

export const GallerySectionWrapper = styled.div`
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 10.68em;
  padding-bottom: 10.68em;
`;

export const GallerySectionContainer = styled.div`
  width: 100%;
  max-width: none;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2.08em;
  padding-right: 2.08em;
`;

export const GalleryGrid = styled.div`
  grid-auto-columns: 1fr;
  display: grid;
  grid-column-gap: 3em;
  grid-row-gap: 3em;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const LeftRightContainer = styled.div`
  grid-column-gap: 7em;
  grid-row-gap: 7em;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 0;
  padding-right: 0;
  display: flex;
  grid-area: span 1 / span 1 / span 1 / span 1;
`;

export const TopImage = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  display: flex;
  grid-area: span 1 / span 1 / span 1 / span 1;
`;

export const SmallImg = styled.img`
  width: 12em;
  border-radius: 1.3em;
`;

export const BigImg = styled.img`
  width: 22em;
  border-radius: 1.3em;
`;

export const BottomImage = styled.div`
  flex-direction: column;
  align-items: flex-start;
  display: flex;
  grid-area: span 1 / span 1 / span 1 / span 1;
`;

export const MiddleContainer = styled.div`
  grid-column-gap: 45px;
  grid-row-gap: 45px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  grid-area: span 1 / span 1 / span 1 / span 1;
`;

export const HeadingText = styled.h2`
  opacity: 1;
  text-align: center;
  margin-top: 0;
  margin-bottom: 16px;
  font-family: 'Kaftan';
  font-size: 4em;
  font-weight: 500;
  line-height: 1.2;
`;

export const Details = styled.div`
  text-align: center;
  font-family: Satoshi, sans-serif;
  font-size: 1em;
  line-height: 1.5;
`;
