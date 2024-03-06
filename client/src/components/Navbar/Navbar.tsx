import './Navbar.css';
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
} from './Navbar.styled.js';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredImage, setHoveredImage] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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

        <BookBtn>
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
              <img
                src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cf2f6190a4f1c1a9e26a96_LogoWhite.png"
                loading="lazy"
                width="768.5"
                sizes="100vw"
                alt=""
                srcSet="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cf2f6190a4f1c1a9e26a96_LogoWhite-p-500.png 500w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cf2f6190a4f1c1a9e26a96_LogoWhite-p-800.png 800w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cf2f6190a4f1c1a9e26a96_LogoWhite-p-1080.png 1080w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cf2f6190a4f1c1a9e26a96_LogoWhite.png 1537w"
                className="side-menu-logo"
              />
              <SideMenu>
                <MainLinks>
                  <MenuTextSmall>Menu</MenuTextSmall>
                  {/* TO ADD EFECTS TO IMAGE AND TEXT */}
                  <SideMenuLinkContainer
                    hoveredImage={hoveredImage}
                    imageName="cabinImg"
                  >
                    <SideMenuLink
                      onMouseEnter={() => setHoveredImage('cabinImg')}
                      onMouseLeave={() => setHoveredImage('')}
                    >
                      Master Cabin
                    </SideMenuLink>
                  </SideMenuLinkContainer>
                  <SideMenuLinkContainer
                    hoveredImage={hoveredImage}
                    imageName="relaxImg"
                  >
                    <SideMenuLink
                      onMouseEnter={() => setHoveredImage('relaxImg')}
                      onMouseLeave={() => setHoveredImage('')}
                    >
                      Discover
                    </SideMenuLink>
                  </SideMenuLinkContainer>
                  <SideMenuLinkContainer
                    hoveredImage={hoveredImage}
                    imageName="contactImg"
                  >
                    <SideMenuLink
                      onMouseEnter={() => setHoveredImage('contactImg')}
                      onMouseLeave={() => setHoveredImage('')}
                    >
                      Contact
                    </SideMenuLink>
                  </SideMenuLinkContainer>
                </MainLinks>
                <div className="menu-divider"></div>
                <div className="secondary-links">
                  <div className="w-layout-grid-secondary-links secondary-links-grid">
                    <div className="secondary-links-left" id="fifthId">
                      <div className="text-menu-super-small">Get Social</div>
                      {/* TO ADD EFFECT FOR HOVER */}
                      <a href="#" className="underline-link w-inline-block">
                        <div className="text-size-tiny dark">Instagram</div>
                        <div className="hover-line">
                          <div className="hover-line-fill"></div>
                        </div>
                      </a>
                      <a href="#" className="underline-link w-inline-block">
                        <div className="text-size-tiny dark">TikTok</div>
                        <div className="hover-line">
                          <div className="hover-line-fill"></div>
                        </div>
                      </a>
                      <a href="#" className="underline-link w-inline-block">
                        <div className="text-size-tiny dark">Youtube</div>
                        <div className="hover-line">
                          <div className="hover-line-fill"></div>
                        </div>
                      </a>
                    </div>
                    <div className="secondary-links-left" id="sixthId">
                      <div className="text-menu-super-small">Discover</div>
                      <a href="#" className="underline-link w-inline-block">
                        <div className="text-size-tiny dark">History</div>
                        <div className="hover-line">
                          <div className="hover-line-fill"></div>
                        </div>
                      </a>
                      <a href="#" className="underline-link w-inline-block">
                        <div className="text-size-tiny dark">Local Wine</div>
                        <div className="hover-line">
                          <div className="hover-line-fill"></div>
                        </div>
                      </a>
                      <a href="#" className="underline-link w-inline-block">
                        <div className="text-size-tiny dark">Bike Trails</div>
                        <div className="hover-line">
                          <div className="hover-line-fill"></div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="menu-divider"></div>
                {/* TO ADD TOGGLE FUNCTIONALITY */}
                <div className="language-social">
                  <div className="wg-element-wrapper">
                    <div className="wg-toggle-1-label lang1">
                      <div>En</div>
                    </div>
                    <div className="wg-toggle-1-switch ts-large">
                      <div className="toggle t-large"></div>
                    </div>
                    <div className="wg-toggle-1-label lang2">
                      <div>Ro</div>
                    </div>
                  </div>
                </div>
              </SideMenu>
            </SideMenuLinksContainer>
          </SideMenuLinksWrapper>
          { hoveredImage && <MenuImage hoveredImage={hoveredImage} /> }
        </SideMenuContainer>
      )}
    </TopNavbar>
  );
};

export default Navbar;
