import styled from 'styled-components';

interface Props {
  position: string;
}

export const SliderSectionWrapper = styled.section``;

export const TextWrapper = styled.div`
  max-width: none;
  min-width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  display: flex;
`;

export const DividerContainer = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10.68em;
  display: flex;

  img {
    opacity: 0.3;
  }
`;

export const Line = styled.div`
  width: 45%;
  height: 0.5px;
  opacity: 0.3;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const TextContainer = styled.div`
  max-width: 500px;
`;

export const Header = styled.h2`
  z-index: 2;
  width: 100%;
  max-width: 20em;
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
  font-family: 'Kaftan';
  font-weight: 400;
  line-height: 1.3;
  position: relative;
  color: #000;
  font-size: 4em;
`;

export const Details = styled.p`
  text-align: left;
  font-family: Satoshi, sans-serif;
  font-size: 1em;
  line-height: 1.5;
  text-align: center;
`;

export const SliderContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  min-height: 75vh;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: auto;
  margin-right: auto;
  padding: 0 3em;
  display: flex;
`;

export const TricksSlider = styled.div`
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  position: relative;
  user-select: none;
`;

export const FlickContainer = styled.div`
  height: 650px;
  touch-action: pan-y;
  width: 100% !important;
  overflow: visible !important;
  position: relative !important;
  cursor: grab;
`;

export const FlickSlider = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  transform: translateX(0.01%);
  border: none;
`;

export const SlideContainer = styled.div<Props>`
  width: 42%;
  height: 70vh;
  max-height: 80vw;
  color: #fff;
  text-align: center;
  border-radius: 1.3em;
  flex: none;
  justify-content: center;
  align-items: flex-end;
  margin-right: 1em;
  padding: 2em;
  display: flex;
  overflow: hidden;
  position: absolute;
  left: 0px;

  transform: translateX(${props => props.position});

  img {
    z-index: 1;
    width: 200%;
    height: 100%;
    max-width: none;
    object-fit: cover;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: auto;
  }
`;

export const CardContainer = styled.div`
  z-index: 2;
  backdrop-filter: blur(6px);
  background-image: linear-gradient(rgba(0, 0, 0, 0.23), rgba(0, 0, 0, 0.23));
  border: 0.5px rgba(255, 255, 255, 0.4);
  border-radius: 1.3em;
  padding: 2em 1.5em;
  position: relative;
`;

export const CardHeader = styled.h3`
  text-align: left;
  margin-top: 0;
  font-family: 'Kaftan';
  font-size: 3em;
  font-weight: 400;
  line-height: 1.2;
`;

export const CardDetails = styled.p`
  z-index: 6;
  max-width: 500px;
  grid-column-gap: 2em;
  grid-row-gap: 2em;
  flex-direction: column;
  align-items: center;
  display: flex;
  position: relative;
  text-align: left;
  margin-bottom: 0;
  font-family: Satoshi, sans-serif;
  font-size: 1.1em;
  font-weight: 400;
  line-height: 1.5;
`;

export const PrevButton = styled.button`
  position: absolute;
  background: hsla(0, 0%, 100%, 0.75);
  border: none;
  color: #333;
  top: 50%;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  transform: translateY(-50%);
  left: 10px;
`;

export const NextButton = styled.button`
  position: absolute;
  background: hsla(0, 0%, 100%, 0.75);
  border: none;
  color: #333;
  top: 50%;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  transform: translateY(-50%);
  right: 10px;
`;
