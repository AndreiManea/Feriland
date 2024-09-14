import { useState } from 'react';
import './navbarMenuButton.css';
import { useAppSelector } from '../../../redux/hooks';
import HoverButtonWrapper from '../../HoverButtonWrapper/HoverButtonWrapper';
const NavbarMenuButton = ({ onClick }: { onClick: () => void }) => {
  const [clicked, setClicked] = useState(false);
  const { darkNavbar } = useAppSelector(state => state.styles);

  const onClickHandler = () => {
    setClicked(!clicked);
    onClick?.();
  };
  return (
    <HoverButtonWrapper darkNavbar={darkNavbar}>
      <div
        onClick={onClickHandler}
        className={clicked ? 'is-active' : ''}
        id="hamburger"
        style={{
          background: !darkNavbar
            ? 'rgba(255, 255, 255, .2)'
            : 'rgba(255, 255, 255, .8)',
          transition: '0.3s ease-in-out',
        }}
      >
        <span
          className="line"
          style={{
            background: !darkNavbar ? 'white' : 'black',
            transition: '0.3s ease-in-out',
          }}
        ></span>
        <span
          className="line"
          style={{
            background: !darkNavbar ? 'white' : 'black',
            transition: '0.3s ease-in-out',
          }}
        ></span>
        <span
          className="line"
          style={{
            background: !darkNavbar ? 'white' : 'black',
            transition: '0.3s ease-in-out',
          }}
        ></span>
      </div>
    </HoverButtonWrapper>
  );
};

export default NavbarMenuButton;
