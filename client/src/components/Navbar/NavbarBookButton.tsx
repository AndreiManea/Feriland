import { Button } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import HoverButtonWrapper from '../HoverButtonWrapper/HoverButtonWrapper';
import { useTranslation } from 'react-i18next';
import { setBookingDrawerOpen } from '../../redux/slices/bookingsDrawerSlice';

const NavbarBookButton = () => {
  const dispatch = useAppDispatch();
  const { darkNavbar } = useAppSelector(state => state.styles);
  const { t } = useTranslation();

  return (
    <HoverButtonWrapper darkNavbar={darkNavbar}>
      <Button
        onClick={() => dispatch(setBookingDrawerOpen(true))}
        backgroundColor={
          !darkNavbar ? 'rgba(255, 255, 255, .2)' : 'rgba(255, 255, 255, .8)'
        }
        color={!darkNavbar ? 'white' : 'black'}
        p={{ base: '1rem', md: '1.5rem 2rem' }}
        fontSize={{ base: '0.75rem', md: '1rem' }}
        borderRadius="10rem"
        _hover={{
          backgroundColor: !darkNavbar
            ? 'rgba(255, 255, 255, .2)'
            : 'rgba(255, 255, 255, .8)',
        }}
        transition="0.3s ease-in-out"
      >
        {t('navbar.bookButton')}
      </Button>
    </HoverButtonWrapper>
  );
};

export default NavbarBookButton;
