import styled from 'styled-components';

export const HeroSectionContainerWrapper = styled.div``;

export const HeroSectionContainer = styled.div`
  z-index: 1;
  height: auto;
  position: sticky;
  top: 0;
`;

export const VideoContainer = styled.div`
  height: 100vh;
  color: #fff;
  position: relative;
  overflow: hidden;

  > video {
    background-image: url('https://assets-global.website-files.com/65bcf5f…/65bcfb1…_Untitled design (7)-poster-00001.jpg');
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -100;
    background-position: 50%;
    background-size: cover;
    margin: auto;
    position: absolute;
    top: -100%;
    bottom: -100%;
    left: -100%;
    right: -100%;
  }
`;

export const Overlay = styled.div`
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.23);
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
`;

export const TextContainer = styled.div`
  z-index: 5;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
`;

export const Text = styled.div`
  color: #fff;
  font-family: 'Kaftan';
  font-size: 5em;
  font-weight: 400;
  line-height: 1.4;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const OverlayText = styled.div`
  will-change: background-image;
  background-color: rgba(0, 0, 0, 0.05);
  z-index: 10;
  height: 100vh;
  backdrop-filter: blur(40px);
  background-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  padding-top: 0;
  padding-bottom: 0;
  position: relative;
  overflow: hidden;
`;

export const DescriptionContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: none;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2.08em;
  padding-right: 2.08em;
`;

export const Description = styled.h2`
  opacity: 1;
  z-index: 2;
  width: 100%;
  max-width: 25em;
  color: #fff;
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
  font-family: 'Kaftan';
  font-size: 2.5em;
  font-weight: 400;
  line-height: 1.3;
  position: relative;
`;

export const BottomImage = styled.img`
  width: 80%;
  height: auto;
  opacity: 0.69;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  top: auto;
  bottom: 0%;
  left: 0%;
  right: 0%;
`;
