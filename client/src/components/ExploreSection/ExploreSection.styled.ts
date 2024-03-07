import styled from 'styled-components';

export const ExploreContainer = styled.div`
  width: 100%;
  max-width: none;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2.08em;
  padding-right: 2.08em;
  background-color: rgb(46, 42, 39);
`;

export const StickyCircleWrapper = styled.div`
  height: 200vh;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
`;

export const StickyCircleContainer = styled.div`
  width: 100%;
  height: 100vh;
  border-radius: 3em;
  justify-content: center;
  align-items: center;
  padding-top: 6rem;
  padding-bottom: 0;
  display: flex;
  position: sticky;
  top: 0;
  overflow: hidden;
`;

export const StickyCircleElement = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
  overflow: hidden;

  //INITIAL VALUES - CIRCLE
  // border-radius: 35em;
  // height: 35em;
  // width: 35em;

  //FINAL VALUES - FULLSCREEN
  border-radius: 3em;
  height: 100vh;
  width: 100vw;
`;

export const StickyCircleImg = styled.img`
  width: 100vw;
  height: 100vh;
  max-width: none;
  min-height: 100vh;
  min-width: 100vw;
  object-fit: cover;
  position: relative;
`;

export const TextWrapper = styled.div`
  z-index: 5;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
  padding-top: 0;
  display: flex;
  position: relative;
`;

export const TextContainer = styled.div`
  z-index: 6;
  max-width: 500px;
  grid-column-gap: 2em;
  grid-row-gap: 2em;
  flex-direction: column;
  align-items: center;
  display: flex;
  position: relative;
`;

export const Header = styled.h2`
  color: #fff;
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
  font-family: 'Kaftan';
  font-size: 6em;
  font-weight: 400;
  line-height: 1;
`;

export const Details = styled.p`
  text-align: center;
  color: #ececec;
  margin-bottom: 0;
  font-family: Satoshi, sans-serif;
  font-size: 1.4em;
  line-height: 1.2;
`;

export const ButtonsContainer = styled.div`
  grid-column-gap: 2em;
  grid-row-gap: 2em;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
  display: flex;
`;

export const PrimaryButton = styled.a`
  color: #5c5c5c;
  border-radius: 10em;
  justify-content: center;
  align-items: center;
  padding: 0.9rem 1.8rem;
  font-size: 16px;
  line-height: 18px;
  text-decoration: none;
  display: flex;
  position: relative;
  overflow: hidden;
  background-color: #547c39;
  border-radius: 10em;
`;

export const ButtonTextContainer = styled.div`
  z-index: 3;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
  color: #fff;
  margin-bottom: 0;
  font-size: 1rem;
  line-height: 1.2;
`;

export const ButtonText = styled.div`
  color: #fff;
  margin-bottom: 0;
  font-size: 1rem;
  line-height: 1.2;
`;

export const SecondaryButton = styled.a`
  color: #5c5c5c;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10em;
  justify-content: center;
  align-items: center;
  padding: 0.9rem 1.8rem;
  font-size: 16px;
  line-height: 18px;
  text-decoration: none;
  display: flex;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(20px);
`;

export const OverlayGradient = styled.div`
  background-image: linear-gradient(to top, #000, rgba(255, 255, 255, 0) 85%);
  border-radius: 3em;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
  opacity: 1;
`;
