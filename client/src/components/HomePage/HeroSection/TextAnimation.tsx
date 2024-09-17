import { Word } from './Word';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import { Heading, HStack } from '@chakra-ui/react';

interface TextAnimationProps {
  text: string;
}

export const TextAnimation = ({ text }: TextAnimationProps) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.2', 'end 0'], // Adjust these values to change when the effect triggers
  });

  const END_MULTIPLIER = Math.log(text.length) * 2;

  return (
    <HStack
      ref={container}
      alignItems="center"
      justifyContent="center"
      w="full"
      px="8rem"
      pt="20vh"
      mx="auto"
      fontSize="1.8rem"
      textAlign="center"
      maxWidth="80vw"
    >
      <HStack flexWrap="wrap" maxW="1280px" alignItems="center" width="50vw">
        <Heading as="h1" size="h2" lineHeight="3rem" textAlign="center">
          {text.split(' ').map((word, index) => {
            const start = index / text.length;
            const end = start + 1 / text.length;

            return (
              <Word
                key={index}
                range={[start, end]}
                progress={scrollYProgress}
                endMultiplier={END_MULTIPLIER}
              >
                {word}
              </Word>
            );
          })}
        </Heading>
      </HStack>
    </HStack>
  );
};
