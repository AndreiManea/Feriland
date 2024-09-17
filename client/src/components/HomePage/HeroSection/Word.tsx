import { Character } from "./Character";
import { MotionValue } from "framer-motion";
import { Box } from "@chakra-ui/react";

interface WordProps {
  children: string;
  range: number[];
  progress: MotionValue<number>;
  endMultiplier: number;
}

export const Word = ({ 
  children,
  range,
  progress, 
  endMultiplier, 
}: WordProps) => {
  const characters = children.split("");
  const amount = range[1] - range[0];
  const step = amount / characters.length;

  return (
    <Box as="span" position="relative" display="inline-block" mr="2">
      {characters.map((char, index) => {
        const start = range[0] + step * index;
        const end = Math.min(range[0] + step * (index + 1), range[1]) * endMultiplier;

        return (
          <Character
            key={index}
            range={[start, end]}
            progress={progress}
          >
            {char}
          </Character>
        );
      })}
    </Box>
  );
};
