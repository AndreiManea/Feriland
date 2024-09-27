import { VStack, Box, Heading, Image, Text } from '@chakra-ui/react';

interface ActivitySlideProps {
  title: string;
  description: string;
  imgSrc: string;
}

const ActivitySlide = ({ title, description, imgSrc }: ActivitySlideProps) => {
  return (
    <VStack
      position="relative"
      width="100%"
      height="70vh"
      borderRadius="1.2rem"
      overflow="hidden"
      p="1.25rem"
      justifyContent="flex-end"
      m="0 15px"
    >
      <Image
        src={imgSrc}
        alt={title}
        objectFit="cover"
        width="100%"
        height="100%"
        position="absolute"
        top="0"
        bottom="0"
        left="0"
      />
      <Box
        position="relative"
        width="100%"
        bgImage="linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .2))"
        backdropFilter="blur(1rem)"
        borderRadius="1.3rem"
        color="white"
        p="1.75rem 1.3125rem"
      >
        <Heading as="h3" size="h3">
          {title}
        </Heading>
        <Text m="0">{description}</Text>
      </Box>
    </VStack>
  );
};

export default ActivitySlide;
