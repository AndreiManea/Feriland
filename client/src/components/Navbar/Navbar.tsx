import logoImage from '../../assets/LogoWhite.png';
import { useState } from 'react';

import {
  BookBtn,
  BtnLink,
  ButtonTextWrapper,
  SideMenuLinkContainer,
  HamburgerMenu,
  LogoWrapper,
  MainLinks,
  MenuButton,
  MenuTextSmall,
  NavContainer,
  NavbarGrid,
  SideMenu,
  SideMenuContainer,
  SideMenuLink,
  SideMenuLinksContainer,
  SideMenuLinksWrapper,
  TextSmall,
  TopNavbar,
  MenuImage,
  MenuDivider,
  SecondaryLinks,
  SecondaryLinksGrid,
  SocialLink,
  LinkTextSmall,
  SecondaryLinksContainer,
  ToggleLanguage,
  ToggleWrapper,
  LanguageWrapperLeft,
  LanguageWrapperRight,
  ToggleButton,
  ToggleButtonContainer,
  Logo,
  HoverLine,
} from './Navbar.styled.js';
import { useAppDispatch } from '../../redux/hooks.js';
import { setBookingDrawerOpen } from '../../redux/slices/bookingsSlice.js';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredImage, setHoveredImage] = useState('');
  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSwitch = () => {
    setIsActive(!isActive);
  };

  const dispatch = useAppDispatch();

  return (
    <TopNavbar>
      <NavbarGrid>
        <NavContainer>
          <MenuButton onClick={toggleMenu}>
            {/* TO DO: LOTTIE ANIMATION ???? */}
            <HamburgerMenu open={isOpen}>
              <div />
              <div />
              <div />
            </HamburgerMenu>
          </MenuButton>
        </NavContainer>

        <LogoWrapper>
          <img src={logoImage} alt="LogoImg" />
        </LogoWrapper>

        <BookBtn onClick={() => dispatch(setBookingDrawerOpen(true))}>
          <BtnLink href="#">
            <ButtonTextWrapper>
              <TextSmall>Book</TextSmall>
              <TextSmall>your stay</TextSmall>
            </ButtonTextWrapper>
          </BtnLink>
        </BookBtn>
      </NavbarGrid>

      {isOpen && (
        <SideMenuContainer>
          <SideMenuLinksWrapper>
            <SideMenuLinksContainer>
              <Logo
                src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cf2f6190a4f1c1a9e26a96_LogoWhite.png"
                loading="lazy"
                width="768.5"
                sizes="100vw"
                alt=""
                srcSet="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cf2f6190a4f1c1a9e26a96_LogoWhite-p-500.png 500w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cf2f6190a4f1c1a9e26a96_LogoWhite-p-800.png 800w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cf2f6190a4f1c1a9e26a96_LogoWhite-p-1080.png 1080w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cf2f6190a4f1c1a9e26a96_LogoWhite.png 1537w"
              />
              <SideMenu>
                <MainLinks>
                  <MenuTextSmall>Menu</MenuTextSmall>
                  {/* TO ADD EFECTS TO IMAGE AND TEXT */}
                  <SideMenuLinkContainer
                    hoveredImage={hoveredImage}
                    imageName="cabinImg"
                    onMouseEnter={() => setHoveredImage('cabinImg')}
                    onMouseLeave={() => setHoveredImage('')}
                  >
                    <SideMenuLink>Master Cabin</SideMenuLink>
                  </SideMenuLinkContainer>
                  <SideMenuLinkContainer
                    hoveredImage={hoveredImage}
                    imageName="relaxImg"
                    onMouseEnter={() => setHoveredImage('discoverImg')}
                    onMouseLeave={() => setHoveredImage('')}
                  >
                    <SideMenuLink>Discover</SideMenuLink>
                  </SideMenuLinkContainer>
                  <SideMenuLinkContainer
                    hoveredImage={hoveredImage}
                    imageName="contactImg"
                    onMouseEnter={() => setHoveredImage('contactImg')}
                    onMouseLeave={() => setHoveredImage('')}
                  >
                    <SideMenuLink>Contact</SideMenuLink>
                  </SideMenuLinkContainer>
                </MainLinks>

                <MenuDivider />

                <SecondaryLinks>
                  <SecondaryLinksGrid>
                    <SecondaryLinksContainer>
                      <MenuTextSmall>Get Social</MenuTextSmall>

                      {/* TO ADD EFFECT FOR HOVER */}
                      <SocialLink href="#">
                        <LinkTextSmall>Instagram</LinkTextSmall>
                        <HoverLine />
                      </SocialLink>
                      <SocialLink href="#">
                        <LinkTextSmall>TikTok</LinkTextSmall>
                        <HoverLine />
                      </SocialLink>
                      <SocialLink href="#">
                        <LinkTextSmall>Youtube</LinkTextSmall>
                        <HoverLine />
                      </SocialLink>
                    </SecondaryLinksContainer>
                    <SecondaryLinksContainer>
                      <MenuTextSmall>Discover</MenuTextSmall>
                      <SocialLink href="#">
                        <LinkTextSmall>History</LinkTextSmall>
                        <HoverLine />
                      </SocialLink>
                      <SocialLink href="#">
                        <LinkTextSmall>Local Wine</LinkTextSmall>
                        <HoverLine />
                      </SocialLink>
                      <SocialLink href="#">
                        <LinkTextSmall>Bike Trails</LinkTextSmall>
                        <HoverLine />
                      </SocialLink>
                    </SecondaryLinksContainer>
                  </SecondaryLinksGrid>
                </SecondaryLinks>

                <MenuDivider />

                <ToggleLanguage>
                  <ToggleWrapper>
                    <LanguageWrapperLeft isActive={isActive}>
                      <div>En</div>
                    </LanguageWrapperLeft>
                    <ToggleButtonContainer
                      onClick={toggleSwitch}
                      isActive={isActive}
                    >
                      <ToggleButton isActive={isActive} />
                    </ToggleButtonContainer>
                    <LanguageWrapperRight isActive={isActive}>
                      <div>Ro</div>
                    </LanguageWrapperRight>
                  </ToggleWrapper>
                </ToggleLanguage>
              </SideMenu>
            </SideMenuLinksContainer>
          </SideMenuLinksWrapper>

          {/* TO DO - IMAGE TRANSITION SHADY */}
          <MenuImage hoveredImage={hoveredImage} />
        </SideMenuContainer>
      )}
    </TopNavbar>
  );
};

export default Navbar;
