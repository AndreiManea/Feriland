import { HStack, Image } from '@chakra-ui/react';
import NormalLink from './NormalLink';

const ContactLink = ({
  imgSrc,
  title,
  to = '/',
  darkNavbar,
}: {
  imgSrc: string;
  title: string;
  to?: string;
  darkNavbar?: boolean;
}) => {
  return (
    <HStack gap="0.875rem" mb="0.438rem" alignItems="center">
      <Image
        maxWidth="1.3rem"
        src={imgSrc}
        filter={darkNavbar ? 'invert(1)' : 'none'}
      />
      <NormalLink title={title} to={to} darkNavbar={darkNavbar} />
    </HStack>
  );
};

export default ContactLink;
