import styled from 'styled-components';

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
