import { Grid, GridItem, Image, Link } from '@chakra-ui/react';
import logoImage from '../../assets/ShortLogo.png';
import NavbarMenuButton from './NavbarMenuButton/NavbarButton';
import { useAppSelector } from '../../redux/hooks';
import NavbarBookButton from './NavbarBookButton';

const NavbarCollapsed = ({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { darkNavbar } = useAppSelector(state => state.styles);

  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      alignItems="center"
      width="100%"
      p="0.75rem"
    >
      <GridItem display="flex" justifyContent="flex-start">
        <NavbarMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </GridItem>
      <GridItem display="flex" justifyContent="center">
        <Link href="/">
          <Image
            src={logoImage}
            alt="LogoImg"
            width="170px"
            filter={darkNavbar ? 'invert(1) brightness(2)' : ''}
            transition="0.3s ease-in-out"
          />
        </Link>
      </GridItem>
      <GridItem display="flex" justifyContent="flex-end">
        <NavbarBookButton />
      </GridItem>
    </Grid>
  );
};

export default NavbarCollapsed;
