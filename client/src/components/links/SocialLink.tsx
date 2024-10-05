import { Image, Link } from '@chakra-ui/react';

const SocialLink = ({
  imgSrc,
  to = '/',
  alt,
  darkNavbar,
}: {
  imgSrc: string;
  alt: string;
  to?: string;
  darkNavbar?: boolean;
}) => {
  return (
    <Link
      background={darkNavbar ? 'black' : 'white'}
      borderRadius="100%"
      p={{ base: '0.6rem', md: '0.7rem' }}
      _hover={{ filter: 'invert(1) brightness(2)' }}
      transition="ease-in-out 0.3s"
      href={to}
    >
      <Image
        w="100%"
        maxW={{ base: '1.35rem', md: '1.45rem' }}
        src={imgSrc}
        alt={alt}
        filter={darkNavbar ? 'invert(1)' : 'none'}
      />
    </Link>
  );
};

export default SocialLink;
