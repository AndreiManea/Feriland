import { Box } from '@chakra-ui/react';
import { ReactNode, useState } from 'react';

const HoverButtonWrapper = ({ children }: { children: ReactNode }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.currentTarget as HTMLDivElement;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });
  };

  return (
    <Box
      position="relative"
      display="inline-block"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
      {hover && (
        <Box
          borderRadius="10rem"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          pointerEvents="none"
          opacity={0.6}
          bg={`radial-gradient(circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.4), transparent 70%)`}
          style={{
            willChange: 'transform',
            transform:
              'translate3d(0%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
            transformStyle: 'preserve-3d',
          }}
        />
      )}
    </Box>
  );
};

export default HoverButtonWrapper;