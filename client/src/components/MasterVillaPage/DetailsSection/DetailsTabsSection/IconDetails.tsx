import { HStack, Image, Text } from '@chakra-ui/react';

type Props = {
  text: string;
};

const IconDetails = ({text}:Props) => {
  return (
    <HStack gap="2rem" alignItems="center" pl="0.8rem">
      <Image
        src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e1d71c9a41d0ccd77af64d_time_6862163.svg"
        alt="Check-in/out icon"
        width="2rem"
      />
      <Text fontSize="1rem" mb="0px">{text}</Text>
    </HStack>
  );
};

export default IconDetails;
