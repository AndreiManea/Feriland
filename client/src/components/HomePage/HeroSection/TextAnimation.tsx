import { Heading, HStack } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

interface TextAnimationProps {
  text: string;
}

// Custom hook to manage an array of refs
function useArrayRef() {
  const lettersRef = useRef<HTMLElement[]>([]); // Ref array for letter elements

  const setLettersRef = (ref: HTMLElement | null) => {
    if (ref && !lettersRef.current.includes(ref)) {
      lettersRef.current.push(ref); // Add ref to the array
    }
  };

  return [lettersRef, setLettersRef] as const; // Return a tuple
}

export const TextAnimation = ({ text }: TextAnimationProps) => {
  const [lettersRef, setLettersRef] = useArrayRef(); // Array of refs for letters
  const triggerRef = useRef<HTMLDivElement | null>(null); // Trigger element for ScrollTrigger

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger); // Register the plugin inside the effect

    // Ensure that the lettersRef is not empty before applying the animation
    if (lettersRef.current.length > 0) {
      const reveal = gsap.to(lettersRef.current, {
        scrollTrigger: {
          trigger: triggerRef.current, // Set the trigger to the container
          scrub: 0.5,  // Ensures smooth animation in sync with small scroll movements
          start: 'top center',  // Start when the container's top is at the center
          end: 'bottom center', // End when the container's bottom reaches the center
          markers: false,  // Remove this if you don't need scroll markers
        },
        color: 'white',
        duration: 1, // Faster animation for each letter
        stagger: 0.05,  // More responsive stagger for quicker animations
      });

      return () => {
        reveal.kill(); // Clean up the GSAP animation on unmount
      };
    }
  }, [lettersRef]);

  return (
    <HStack
      alignItems="center"
      justifyContent="center"
      w="full"
      px="2rem" 
      mx="auto"
      fontSize="1.8rem"
      textAlign="center"
      width="80vw"
      height="100vh"  
      overflowY="auto"  
    >
      <HStack flexWrap="wrap" alignItems="center" width="50vw">
        <Heading as="h1" size="h2" lineHeight="3rem" textAlign="center">
          <div ref={triggerRef} style={{ height: '100%' }}>
            {text.split('').map((letter, index) => (
              <span className="reveal-text" ref={setLettersRef} key={index}>
                {letter}
              </span>
            ))}
          </div>
        </Heading>
      </HStack>
    </HStack>
  );
};
