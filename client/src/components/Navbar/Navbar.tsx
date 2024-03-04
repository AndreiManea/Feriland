import './Navbar.css';
import logoImage from '../../assets/LogoWhite.png';
import { useState } from 'react';

function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [hoveredImage, setHoveredImage] = useState('');

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className="top-navbar">
      <div className="w-layout-grid navbar-grid">
        {/* MENU */}
        {/* TO ADD TRANSITION ON BUTTON AND CHANGE SVG */}
        <div className="nav-container" id="firstId">
          <div className="menu-button" onClick={toggleMenu}>
            {/* TO ADD LOTTIE ANIMATION */}
            <div className="lottie-animation-menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 633 509"
                width="633"
                height="509"
                preserveAspectRatio="xMidYMid meet"
                className='lottie-svg'
              >
                <defs>
                  <clipPath id="__lottie_element_2">
                    <rect width="633" height="509" x="0" y="0" />
                  </clipPath>
                </defs>
                <g clipPath="url(#__lottie_element_2)">
                  "
                  <g
                    transform="matrix(1,0,0,1,298,256)"
                    opacity="1"
                    style={{ display: 'block' }}
                  >
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillOpacity="0"
                        stroke="rgb(255,255,255)"
                        strokeOpacity="1"
                        strokeWidth="20"
                        d=" M-284.8949890136719,-190.56900024414062 C-284.8949890136719,-190.56900024414062 -217.76600646972656,-190.56900024414062 -217.76600646972656,-190.56900024414062 C-217.76600646972656,-190.56900024414062 1.4550000429153442,-190.56900024414062 1.4550000429153442,-190.56900024414062 C1.4550000429153442,-190.56900024414062 217.61199951171875,-190.56900024414062 217.61199951171875,-190.56900024414062 C217.61199951171875,-190.56900024414062 285.07598876953125,-190.56900024414062 285.07598876953125,-190.56900024414062"
                      />
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,298,256)"
                    opacity="1"
                    style={{ display: 'block' }}
                  >
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillOpacity="0"
                        stroke="rgb(255,255,255)"
                        strokeOpacity="1"
                        strokeWidth="20"
                        d=" M-284.8949890136719,190.56900024414062 C-284.8949890136719,190.56900024414062 -219.64500427246094,190.56900024414062 -219.64500427246094,190.56900024414062 C-219.64500427246094,190.56900024414062 -0.04500000178813934,190.56900024414062 -0.04500000178813934,190.56900024414062 C-0.04500000178813934,190.56900024414062 215.71299743652344,190.56900024414062 215.71299743652344,190.56900024414062 C215.71299743652344,190.56900024414062 285.07598876953125,190.56900024414062 285.07598876953125,190.56900024414062"
                      />
                    </g>
                  </g>
                  <g
                    transform="matrix(1,0,0,1,298,256)"
                    opacity="1"
                    style={{ display: 'block' }}
                  >
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fillOpacity="0"
                        stroke="rgb(255,255,255)"
                        strokeOpacity="1"
                        strokeWidth="20"
                        d=" M-284.8949890136719,0.041999999433755875 C-284.8949890136719,0.041999999433755875 285.07598876953125,0.041999999433755875 285.07598876953125,0.041999999433755875"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* LOGO */}
        <div className="logo-wrapper" id="secondId">
          <img src={logoImage} alt="Logo" className="logo" id="thirdId" />
        </div>

        {/* BUTTON */}
        <div className="nav-cta" id="fourthId">
          <a href="#" className="button is-icon cta w-inline-block">
            <div className="clip">
              <div className="button-text">
                <div className="text-size-tiny">Book your stay</div>
              </div>
              <div className="button-text button-text-bottom">
                <div className="text-size-tiny">Book your stay</div>
              </div>
            </div>
          </a>
        </div>
      </div>

      {isMenuVisible && (
        <div data-scroll="stop" className="side-menu-container">
          <div className="side-menu-links-wrapper">
            <div className="side-menu-links-container">
              <img
                src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cf2f6190a4f1c1a9e26a96_LogoWhite.png"
                loading="lazy"
                width="768.5"
                sizes="100vw"
                alt=""
                srcSet="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cf2f6190a4f1c1a9e26a96_LogoWhite-p-500.png 500w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cf2f6190a4f1c1a9e26a96_LogoWhite-p-800.png 800w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cf2f6190a4f1c1a9e26a96_LogoWhite-p-1080.png 1080w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cf2f6190a4f1c1a9e26a96_LogoWhite.png 1537w"
                className="side-menu-logo"
              />
              <div className="side-menu">
                <div className="main-links">
                  <p className="text-menu-super-small">Menu</p>
                  {/* TO ADD EFECTS TO IMAGE AND TEXT */}
                  <a
                    className={`link-block w-inline-block ${hoveredImage !== 'cabinImg' && hoveredImage !== '' ? 'link-opacity' : ''}`}
                  >
                    <h3
                      className="side-menu-link"
                      onMouseEnter={() => setHoveredImage('cabinImg')}
                      onMouseLeave={() => setHoveredImage('')}
                    >
                      Master Cabin
                    </h3>
                  </a>
                  <a
                    className={`link-block w-inline-block ${hoveredImage !== 'relaxImg' && hoveredImage !== '' ? 'link-opacity' : ''}`}
                  >
                    <h3
                      className="side-menu-link"
                      onMouseEnter={() => setHoveredImage('relaxImg')}
                      onMouseLeave={() => setHoveredImage('')}
                    >
                      Discover
                    </h3>
                  </a>
                  <a
                    className={`link-block w-inline-block ${hoveredImage !== 'contactImg' && hoveredImage !== '' ? 'link-opacity' : ''}`}
                  >
                    <h3
                      className="side-menu-link"
                      onMouseEnter={() => setHoveredImage('contactImg')}
                      onMouseLeave={() => setHoveredImage('')}
                    >
                      Contact
                    </h3>
                  </a>
                </div>
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
              </div>
            </div>
          </div>
          {hoveredImage === 'cabinImg' && <div className="menu-image-1" />}
          {hoveredImage === 'relaxImg' && <div className="menu-image-2" />}
          {hoveredImage === 'contactImg' && <div className="menu-image-3" />}
        </div>
      )}
    </div>
  );
}

export default Navbar;
