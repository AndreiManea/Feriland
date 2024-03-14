import styled from 'styled-components';
import masterVillaImg from "../../../assets/master-villa.png";

export const HeroSectionContainer = styled.div``;

export const HeroSectionSticky = styled.div`
  z-index: 1;
  height: auto;
  position: sticky;
  top: 0;
  overflow: hidden;
`;

export const BackgroundContainer = styled.div`
  height: 100vh;
  background-image: url(${masterVillaImg});
  background-position: 50%;
  background-size: cover;
  position: relative;

  //transform
`;

export const HeroCover = styled.div`
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.23);
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
`;

export const HeadingContainer = styled.div`
  z-index: 5;
  max-width: 80vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
`;

export const Heading = styled.h1`
  text-align: center;
  color: #fff;
  font-family: 'Kaftan';
  font-size: 5em;
  font-weight: 400;
  line-height: 1.4;
  margin-top: 10px;
`;

export const OverlaySection = styled.div`
  z-index: 10;
  height: 100vh;
  backdrop-filter: blur(40px);
  padding-top: 0;
  padding-bottom: 0;
  position: relative;
  overflow: visible;
  border-top-left-radius: 100rem;
  border-top-right-radius: 100rem;
  margin-top: -10vh;
`;

export const VideoCircleContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 100rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -100px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
`;

export const VideoContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 100rem;
  position: absolute;
  color: #fff;
  overflow: hidden;

  > video {
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

    background-image: url('https://assets-global.website-files.com/65bcf5f…/65d881b…_Untitled design (10) - Trim-poster-00001.jpg');
  }
`;

export const PlayButton = styled.div`
  width: auto;
  height: auto;
  position: absolute;
`;

export const Icon = styled.img`
  width: 42px;
  opacity: 0.9;
`;

export const TextWrapper = styled.div`
  width: 100%;
  max-width: none;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2.08em;
  padding-right: 2.08em;
`;

export const TextContainer = styled.div`
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const Heading2 = styled.h2`
  z-index: 2;
  width: 100%;
  max-width: 20em;
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
