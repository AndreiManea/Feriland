import { HStack, Image } from '@chakra-ui/react';
import NormalLink from './NormalLink';

const ContactLink = ({
  imgSrc,
  title,
  to = '/',
}: {
  imgSrc: string;
  title: string;
  to?: string;
}) => {
  return (
    <HStack gap="0.875rem" mb="0.438rem" alignItems="center">
      <Image maxWidth="1.3rem" src={imgSrc} />
      <NormalLink title={title} to={to} />
    </HStack>
  );
};

export default ContactLink;
