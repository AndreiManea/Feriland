import styled from 'styled-components';
import firstImg from '../../assets/firstImg.jpg';
import secondImg from '../../assets/secondImg.jpg';
import thirdImg from '../../assets/thirdImg.jpg';

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

interface LanguageProps {
  isActive: boolean;
}

interface ToggleButtonProps {
  isActive: boolean;
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

export const Logo = styled.img`
  width: 280px;
  filter: invert();
  margin-bottom: 10vh;
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
  transition: all 0.5s ease-in;
  transform: translate3d(0vw, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;

  ${({ hoveredImage }) => {
    if (hoveredImage === 'cabinImg') {
      return `
      background-image: url(${firstImg});
      transform: translate3d(34vw, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
      transform-style: preserve-3d;
      opacity: 1;
      `;
    } else if (hoveredImage === 'discoverImg') {
      return `
      background-image: url(${secondImg});
      transform: translate3d(34vw, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
      transform-style: preserve-3d;
      opacity: 1;
      `;
    } else if (hoveredImage === 'contactImg') {
      return `
      background-image: url(${thirdImg});
      transform: translate3d(34vw, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
      transform-style: preserve-3d;
      opacity: 1;
      `;
    }
  }}
`;

export const MenuDivider = styled.div`
  height: 1px;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const SecondaryLinks = styled.div`
  padding-left: 4em;
  padding-right: 2em;
`;

export const SecondaryLinksGrid = styled.div`
  display: grid;
  grid-row-gap: 16px;
  grid-column-gap: 16px;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
`;

export const LinksContainer = styled.div`
  grid-column-gap: 0.5em;
  grid-row-gap: 0.5em;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
  grid-area: span 1 / span 1 / span 1 / span 1;
  justify-self: start;
`;

export const SocialLink = styled.a`
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  color: #fff;
  text-align: center;
  letter-spacing: 4px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0);
  border-style: none;
  border-bottom-width: 1px;
  border-bottom-color: rgba(255, 255, 255, 0.1);
  border-radius: 0;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr;
  grid-auto-columns: 1fr;
  margin-left: 0;
  margin-right: 0;
  padding: 0 4px 4px 0;
  font-size: 0.7em;
  text-decoration: none;
  position: relative;
  max-width: 100%;
  display: inline-block;
`;

export const LinkTextSmall = styled.div`
  color: rgba(0, 0, 0, 0.8);
  letter-spacing: 0;
  text-transform: none;
  margin-bottom: 0;
  font-family: Satoshi, sans-serif;
  font-size: 1rem;
  font-weight: 100;
`;

export const ToggleSocial = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 3.5em;
  padding-left: 4em;
  padding-right: 4em;
  position: relative;
`;

export const ToggleWrapper = styled.div`
  align-items: center;
  display: flex;
`;

export const ToggleButtonContainer = styled.div<ToggleButtonProps>`
  z-index: 100;
  min-width: 3rem;
  text-align: center;
  border-radius: 10rem;
  padding: 0.25rem;
  font-size: 0.875rem;
  line-height: 1em;
  transition: box-shadow 0.1s;
  display: flex;
  position: relative;
  box-shadow: inset 0 0 0 10rem rgba(36, 12, 46, 0);
  color: rgb(84, 124, 57);
  align-items: center;
  margin-left: 1rem;
  margin-right: 1rem;
  cursor: pointer;
  width: 4rem;
  height: 2rem;
  background-color: ${({ isActive }) =>
    isActive ? 'black' : 'rgb(84, 124, 57)'};
`;

export const ToggleButton = styled.div<ToggleButtonProps>`
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  transform: ${({ isActive }) =>
    isActive ? 'translateX(2rem)' : 'translateX(0)'};
  transition: 0.2s ease-in;
`;

export const LanguageWrapperLeft = styled.div<LanguageProps>`
  z-index: 1;
  cursor: pointer;
  margin-bottom: 0;
  padding-left: 0;
  font-weight: 700;
  position: relative;
  transform: translate(0.000001%);
  margin-right: -48px;
  padding-right: 48px;

  div {
    color: ${({ isActive }) =>
      isActive ? 'rgba(84, 124, 57, 0.3);' : 'rgb(84, 124, 57)'};
    transition: 0.2s ease-in;
  }
`;

export const LanguageWrapperRight = styled.div<LanguageProps>`
  z-index: 1;
  cursor: pointer;
  margin-bottom: 0;
  padding-left: 0;
  font-weight: 700;
  position: relative;
  transform: translate(0.000001%);
  margin-left: -48px;
  padding-left: 48px;

  div {
    color: ${({ isActive }) => (isActive ? 'black' : 'rgba(84, 124, 57, 0.3)')};
    transition: 0.2s ease-in;
  }
`;
