import { HStack, Image, Text, VStack } from '@chakra-ui/react';

interface IconDetailsProps {
  text: string;
  isCheckIn?: boolean;
  isCheckOut?: boolean;
}

const IconDetails = ({ text, isCheckIn, isCheckOut }: IconDetailsProps) => {
  const isCheck = isCheckIn || isCheckOut;
  return (
    <HStack gap="1.5rem" alignItems="center">
      <Image
        src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65e1d71c9a41d0ccd77af64d_time_6862163.svg"
        alt="Check-in/out icon"
        width={{ base: '2rem', md: '2.5rem' }}
      />
      <VStack align="flex-start" gap="0.25rem">
        {isCheck && (
          <Text
            fontSize={{ base: '1rem', md: '1.2rem' }}
            mb="0"
            fontWeight="bold"
          >
            {isCheckIn ? 'Check In' : 'Check Out'}
          </Text>
        )}
        <Text fontSize="1rem" mb="0">
          {text}
        </Text>
      </VStack>
    </HStack>
  );
};

export default IconDetails;
