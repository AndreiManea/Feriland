import React, { useState } from 'react';
import {
  Contact,
  FooterContainer,
  FooterGrid,
  Heading,
  LegalLinksContainer,
  LegalLinksGrid,
  Link,
  LinkText,
  LinkWrapper,
  LinksContainer,
  LinksLeft,
  LinksRight,
  LogoContainer,
  MenuContainer,
  RegularText,
  SecondaryLink,
  SecondaryLinksContainer,
  SmallText,
  SmallTextDark,
} from './Footer.styled';

const Footer: React.FC = () => {
  const [menuItemSelected, setMenuItemSelected] = useState('');

  const handleHover = (menuItemValue: string) => {
    setMenuItemSelected(menuItemValue);
  };

  return (
    <FooterContainer>
      <FooterGrid>
        <LogoContainer>
          <img
            src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65faca4ebd87778858a47310_Logo.svg"
            alt="footer-logo"
            loading="lazy"
          />
          <Heading>© 2024</Heading>
          <RegularText>Feriland S.R.L. All rights reserved.</RegularText>
        </LogoContainer>
        <MenuContainer>
          <LinksContainer>
            <SmallText>menu</SmallText>
            <Link
              onMouseEnter={() => handleHover('Home')}
              onMouseLeave={() => setMenuItemSelected('')}
              menuItemSelected={menuItemSelected}
              currentItem="Home"
            >
              <LinkText>Home</LinkText>
            </Link>
            <Link
              onMouseEnter={() => handleHover('Cabin')}
              onMouseLeave={() => setMenuItemSelected('')}
              menuItemSelected={menuItemSelected}
              currentItem="Cabin"
            >
              <LinkText>Master Cabin</LinkText>
            </Link>
            <Link
              onMouseEnter={() => handleHover('Discover')}
              onMouseLeave={() => setMenuItemSelected('')}
              menuItemSelected={menuItemSelected}
              currentItem="Discover"
            >
              <LinkText>Discover</LinkText>
            </Link>
          </LinksContainer>
        </MenuContainer>
        <Contact>
          <SecondaryLinksContainer>
            <SmallText>contact</SmallText>
            <LinkWrapper>
              <img
                src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65fad30b44a22c4233d0b328_email_3894024.svg"
                loading="lazy"
                alt=""
              />
              <SecondaryLink href="#">
                <SmallTextDark>contact@feriland.com</SmallTextDark>
              </SecondaryLink>
            </LinkWrapper>
            <LinkWrapper>
              <img
                src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65fad3ac0bf8677ba15127ae_telephone_3415136.svg"
                loading="lazy"
                alt=""
              />
              <SecondaryLink href="#">
                <SmallTextDark>0774 032 561</SmallTextDark>
              </SecondaryLink>
            </LinkWrapper>
            <LinkWrapper>
              <img
                src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65fad3f532264920f42a4367_social_13670484.svg"
                loading="lazy"
                alt=""
              />
              <SecondaryLink href="#">
                <SmallTextDark>WhatsApp</SmallTextDark>
              </SecondaryLink>
            </LinkWrapper>
          </SecondaryLinksContainer>
        </Contact>
      </FooterGrid>
      <LegalLinksContainer>
        <LegalLinksGrid>
          <LinksLeft>
            <SecondaryLink>
              <SmallTextDark>Privacy Policy</SmallTextDark>
            </SecondaryLink>
            <SecondaryLink>
              <SmallTextDark>Terms and Conditions</SmallTextDark>
            </SecondaryLink>
            <SecondaryLink>
              <SmallTextDark>ANPC</SmallTextDark>
            </SecondaryLink>
            <SecondaryLink>
              <SmallTextDark>ANPC sol</SmallTextDark>
            </SecondaryLink>
          </LinksLeft>
          <LinksRight>
            <RegularText>Feriland S.R.L. All rights reserved.</RegularText>
          </LinksRight>
        </LegalLinksGrid>
      </LegalLinksContainer>
    </FooterContainer>
  );
};

export default Footer;
