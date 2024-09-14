import { Button } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setBookingDrawerOpen } from '../../redux/slices/bookingsSlice';
import HoverButtonWrapper from '../HoverButtonWrapper/HoverButtonWrapper';

const NavbarBookButton = () => {
  const dispatch = useAppDispatch();
  const { darkNavbar } = useAppSelector(state => state.styles);

  return (
    <HoverButtonWrapper darkNavbar={darkNavbar}>
      <Button
        onClick={() => dispatch(setBookingDrawerOpen(true))}
        backgroundColor={
          !darkNavbar ? 'rgba(255, 255, 255, .2)' : 'rgba(255, 255, 255, .8)'
        }
        color={!darkNavbar ? 'white' : 'black'}
        p="1.5rem 2rem"
        borderRadius="10rem"
        _hover={{
          backgroundColor: !darkNavbar
            ? 'rgba(255, 255, 255, .2)'
            : 'rgba(255, 255, 255, .8)',
        }}
        transition="0.3s ease-in-out"
      >
        Book Now
      </Button>
    </HoverButtonWrapper>
  );
};

export default NavbarBookButton;
