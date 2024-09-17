import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

type AnimatedTextProps = {
  text: string;
};

const AnimatedText = ({ text }: AnimatedTextProps) => {
  // Reference for the container holding all characters
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      // GSAP animation for each character
      gsap.to(textRef.current.children, {
        opacity: 1, // Make each character visible
        stagger: 0.05, // Delay between characters
        duration: 0.5, // Duration of each animation
        ease: 'power2.out', // Animation easing
        from: { opacity: 0, y: '50%' }, // Starting state (hidden below)
        to: { opacity: 1, y: '0%' }, // End state (fully visible)
      });
    }
  }, [text]);

  // Render the text by splitting it into spans
  return (
    <div ref={textRef} style={{ display: 'inline-block', fontSize: '1.5rem', height: "100vh" }}>
      {text.split('').map((char, index) => (
        <span key={index} style={{ opacity: 0, display: 'inline-block' }}>
          {char}
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;
