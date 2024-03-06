import styled from 'styled-components';

interface MenuProps {
  open: boolean;
}

interface SideMenuLinkContainerProps {
  imageName: string;
  hoveredImage: string;
}

interface MenuImageProps {
  hoveredImage: string;
}

export const TopNavbar = styled.div`
  z-index: 100;
  backdrop-filter: blur(20px);
  background-color: rgba(0, 0, 0, 0);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem 4rem;
  display: block;
  position: fixed;
  top: 0%;
  bottom: auto;
  left: 0%;
  right: 0%;
`;

export const NavbarGrid = styled.div`
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-template-columns: minmax(33%, 1fr) minmax(33%, 1fr) minmax(33%, 1fr);
  padding-top: 0;
  padding-bottom: 0;
  grid-template-rows: auto auto;
  grid-auto-columns: 1fr;
  display: grid;
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const MenuButton = styled.div`
  z-index: 120;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  background-color: #fff;
  border-radius: 100rem;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
`;

export const HamburgerMenu = styled.div<MenuProps>`
  width: 2rem;
  height: 100%;
  padding: 0.6rem 0;
  color: #000;
  justify-content: space-around;
  align-items: center;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  > div {
    width: 100%;
    height: 0.2rem;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 1rem;
    transition:
      transform 0.4s ease-out,
      opacity 0.4s ease-out;
  }

  & > div:nth-child(1) {
    transform: ${({ open }) =>
      open ? 'rotate(45deg) translate(0.2rem, 0.4rem)' : 'rotate(0)'};
  }

  & > div:nth-child(2) {
    transform: ${({ open }) => (open ? 'scaleX(0)' : 'scaleX(1)')};
    opacity: ${({ open }) => (open ? '0' : '1')};
  }

  & > div:nth-child(3) {
    transform: ${({ open }) =>
      open ? 'rotate(-45deg) translate(0.2rem, -0.4rem)' : 'rotate(0)'};
  }
`;

export const LogoWrapper = styled.div`
  display: grid;
  grid-area: span 1 / span 1 / span 1 / span 1;
  justify-content: center;

  > img {
    width: 200px;
    position: relative;
    grid-area: span 1 / span 1 / span 1 / span 1;
  }
`;

export const BookBtn = styled.div`
  grid-area: span 1 / span 1 / span 1 / span 1;
  align-self: center;
  justify-self: end;
`;

export const BtnLink = styled.a`
  max-width: 100%;
  display: inline-block;
  backdrop-filter: none;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 100rem;
  padding: 0;
  text-decoration: none;
`;

export const ButtonTextWrapper = styled.div`
  backdrop-filter: blur(17px);
  border-radius: 100rem;
  justify-content: center;
  padding: 0.8rem 1.6rem;
  display: flex;
`;

export const TextSmall = styled.p`
  color: #fff;
  letter-spacing: 0;
  text-transform: none;
  margin-bottom: 0;
  font-family: Satoshi, sans-serif;
  font-size: 1rem;
  font-weight: 400;

  &:first-child {
    margin-right: 0.3rem;
  }

  @media only screen and (max-width: 767px) {
    &:nth-child(2) {
      display: none;
    }
  }
`;

export const SideMenuContainer = styled.div`
  z-index: 101;
  height: 100vh;
  backdrop-filter: blur(20px);
  background-color: rgba(0, 0, 0, 0.95);
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
  display: flex;
`;

export const SideMenuLinksWrapper = styled.div`
  z-index: 110;
  width: 36%;
  height: 100vh;
  background-color: #eae5df;
  position: relative;

  transform: translate3d(0%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
`;

export const SideMenuLinksContainer = styled.div`
  height: 100vh;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  display: flex;
`;

export const SideMenu = styled.div`
  width: 100%;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  flex-direction: column;
  padding-left: 0;
  padding-right: 0;
  display: flex;
`;

export const MainLinks = styled.div`
  flex-direction: column;
  align-items: stretch;
  padding-left: 4em;
  padding-right: 2em;
  display: flex;
`;

export const MenuTextSmall = styled.p`
  color: rgba(51, 51, 51, 0.7);
  letter-spacing: 1.6px;
  text-transform: uppercase;
  margin-bottom: 19px;
  font-family: 'Kaftan';
  font-size: 12px;
  line-height: 1.4;
`;

export const SideMenuLinkContainer = styled.a<SideMenuLinkContainerProps>`
  opacity: ${({ hoveredImage, imageName }) =>
    hoveredImage && imageName !== hoveredImage ? '0.25' : '1'};
  text-decoration: none;
  cursor: pointer;
  max-width: 100%;
  display: inline-block;
`;

export const SideMenuLink = styled.h3`
  color: #000;
  margin-top: 0;
  margin-bottom: 12px;
  font-family: 'Kaftan';
  font-size: 2.5em;
  font-weight: 400;
  line-height: 1.2;
  text-decoration: none;
`;

export const MenuImage = styled.div<MenuImageProps>`
  z-index: 101;
  width: 36vw;
  height: 100vh;
  min-width: 36vw;
  opacity: 0;
  object-fit: cover;
  background-position: 50%;
  background-size: 1543px;
  display: flex;
  position: absolute;
  top: 0%;
  bottom: auto;
  left: 0%;
  right: auto;
  opacity: 0;
  transform: translate3d(0vw, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
  transition: transform 0.5s ease-in;

  ${({ hoveredImage }) => {
    if (hoveredImage === 'cabinImg') {
      return `
      background-image: url("../../assets/firstImg.jpg");
      transform: translate3d(34vw, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
      transform-style: preserve-3d;
      opacity: 1;
      `;
    } else if (hoveredImage === 'relaxImg') {
      return `
      background-image: url("../../assets/secondImg.jpg");
      transform: translate3d(34vw, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
      transform-style: preserve-3d;
      opacity: 1;
      `;
    } else if (hoveredImage === 'contactImg') {
      return `
      background-image: url("../../assets/thirdImg.jpg");
      transform: translate3d(34vw, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
      transform-style: preserve-3d;
      opacity: 1;
      `;
    }
  }}
`;
