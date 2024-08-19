import { HStack, Image, Box, Text, Link } from '@chakra-ui/react';

interface CardProps {
  imgSrc: string;
  imgSet: string;
  altText: string;
  title: string;
  onClick: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const CardComponent: React.FC<CardProps> = ({
  imgSrc,
  imgSet,
  altText,
  title,
  onClick,
}) => (
  <HStack
    alignItems="center"
    justifyContent="flex-start"
    gap="2rem"
    padding="1.3rem"
    borderRadius="1.5rem"
    backgroundColor="rgba(234, 229, 223, 0)"
    border="1px solid rgba(0, 0, 0, 0.1)"
    gridArea="span 1 / span 1 / span 1 / span 1"
  >
    <Image
      src={imgSrc}
      srcSet={imgSet}
      loading="lazy"
      width="6.8rem"
      alt={altText}
      height="3.75rem"
      objectFit="cover"
      borderRadius="12.5rem"
    />
    <Box>
      <Text as="p" fontSize="1.35rem" lineHeight="1.4" fontWeight="500">
        {title}
      </Text>
      <Link
        href="#"
        aria-label="open lightbox"
        aria-haspopup="dialog"
        onClick={onClick}
      >
        <HStack alignItems="center" gridGap="1rem" >
          <Text mb="0px" color="rgba(0, 0, 0, 0.8)">View Images</Text>
          <Image width="1rem" height="auto"
            src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dca5b678988b92e4c8e336_arrow_3183335.png"
            loading="lazy"
            alt=""
          />
        </HStack>
      </Link>
    </Box>
  </HStack>
);

export default CardComponent;
