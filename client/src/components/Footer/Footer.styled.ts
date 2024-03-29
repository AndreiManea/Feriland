import styled from 'styled-components';
import { HoverLine } from '../Navbar/Navbar.styled';

interface LinkProps {
  menuItemSelected: string;
  currentItem: string;
}

export const FooterContainer = styled.div`
  width: 100%;
  max-width: none;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2.08em;
  padding-right: 2.08em;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
`;

export const LogoContainer = styled.div`
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 3em;
  padding-bottom: 3em;
  padding-right: 2em;

  img {
    max-width: 40%;
    margin-bottom: 2em;
    margin-top: 2em;
  }
`;

export const Heading = styled.h4`
  font-family: 'Kaftan';
  font-size: 1.2em;
  font-weight: 400;
  line-height: 1.3;
`;

export const RegularText = styled.p`
  text-align: left;
  margin-bottom: 0;
  font-family: Satoshi, sans-serif;
  font-size: 1em;
  font-weight: 400;
  line-height: 1.5;
`;

export const MenuContainer = styled.div`
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 6em 0 4em 4em;
  display: flex;
`;

export const LinksContainer = styled.div`
  border-top-style: none !important;
  padding-left: 0;
  padding-right: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  flex-direction: column;
  align-items: stretch;
  display: flex;
`;

export const SmallText = styled.p`
  color: rgba(51, 51, 51, 0.7);
  letter-spacing: 1.6px;
  text-transform: uppercase;
  margin-bottom: 19px;
  font-family: Satoshi, sans-serif;
  font-size: 12px;
  line-height: 1.4;
`;

export const Link = styled.a<LinkProps>`
  max-width: 100%;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  opacity: ${({ menuItemSelected, currentItem }) =>
    menuItemSelected && menuItemSelected !== currentItem ? '0.25' : '1'};
`;

export const LinkText = styled.h3`
  color: #000;
  margin-top: 0;
  margin-bottom: 12px;
  font-family: 'Kaftan';
  font-size: 1.3em;
  font-weight: 400;
  line-height: 1.2;
  text-decoration: none;
`;

export const Contact = styled.div`
  padding-top: 6em;
  padding-bottom: 4em;
  padding-left: 4em;
`;

export const SecondaryLinksContainer = styled.div`
  grid-column-gap: 0.5em;
  grid-row-gap: 0.5em;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
`;

export const LinkWrapper = styled.div`
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5em;
  display: flex;

  img {
    max-width: 1.3rem;
    margin-right: 1em;
  }
`;

export const SecondaryLink = styled.a`
  max-width: 100%;
  display: inline-block;
  margin-left: 0;
  margin-right: 0;
  padding: 0 4px 4px 0;
  font-size: 0.7em;
  text-decoration: none;
  cursor: pointer;
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

export const SmallTextDark = styled.div`
  letter-spacing: 0;
  text-transform: none;
  margin-bottom: 0;
  font-family: Satoshi, sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
`;

export const LegalLinksContainer = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: none;
  margin-left: auto;
  margin-right: auto;
  padding-right: 2.08em;
`;

export const LegalLinksGrid = styled.div`
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  display: grid;
`;

export const LinksLeft = styled.div`
  padding-right: 2em;
  grid-column-gap: 2em;
  grid-row-gap: 2em;
  justify-content: flex-start;
  align-items: center;
  padding-top: 2em;
  padding-bottom: 2em;
  display: flex;
  grid-area: span 1 / span 2 / span 1 / span 2;
`;

export const LinksRight = styled.div`
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2em 0 2em 4em;
  display: flex;
  border-right-style: none;
`;
