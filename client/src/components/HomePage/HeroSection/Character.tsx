import { motion, MotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

interface CharacterProps {
  children: string;
  range: number[];
  progress: MotionValue<number>;
}

export const Character = ({ children, range, progress }: CharacterProps) => {
  const [isRead, setIsRead] = useState(false);

  useEffect(() => {
    const handleProgressChange = (value: number) => {
      // Update state when progress crosses the start of the range
      if (value >= range[0] && value < range[1]) {
        setIsRead(true);
      } else if (value < range[0] || value > range[1]) {
        setIsRead(false);
      }
    };

    // Subscribe to progress changes
    const unsubscribe = progress.onChange(handleProgressChange);

    return () => {
      unsubscribe();
    };
  }, [range, progress]);

  const color = isRead ? 'white' : 'rgba(255, 255, 255, 0.5)';

  return (
    <Box
      as={motion.span}
      position="relative"
      display="inline-block"
      fontSize="1.9rem"
      fontFamily="Kaftan Serif"
      style={{ color }}
    >
      {children}
    </Box>
  );
};
