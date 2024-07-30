import styled from 'styled-components';
import { HoverLine } from '../Navbar/Navbar.styled';

interface LinkProps {
  menuItemSelected: string;
  currentItem: string;
}

export const Link = styled.a<LinkProps>`
  max-width: 100%;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  opacity: ${({ menuItemSelected, currentItem }) =>
    menuItemSelected && menuItemSelected !== currentItem ? '0.25' : '1'};
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
