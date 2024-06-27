import { Box, HStack, Text } from '@chakra-ui/react';
import bookingImg from '../../assets/BookingFormBg.jpg';

const BookingSecondStep = () => {
  return (
    <>
      <Text fontSize="xx-large" mt="1rem">
        Select Cabin
      </Text>
      <HStack spacing={2}>
        <Box
          background="white"
          p={4}
          w="100%"
          borderRadius="1rem"
          cursor="pointer"
        >
          <img
            src={bookingImg}
            alt="Master Villa image"
            height="200px"
            style={{ borderRadius: '1rem' }}
          />
          <Text color="black" mt={4} fontSize={24}>
            MasterVilla
          </Text>
          <Text color="black">
            The villa has a spacious bedroom with an adjacent seating area and a
            desk for writing and reading, as well as a veranda just big enough
            for the two of you. The bathrooms are equipped with open-air
            showers, some with bath tubs.
          </Text>
          <Text color="black" fontSize={24} fontWeight={800}>
            1500 lei
            <span
              style={{
                fontSize: '14px',
                fontWeight: 'normal',
                marginLeft: '6px',
              }}
            >
              night
            </span>
          </Text>
        </Box>
        <Box background="white" p={4} w="100%">
          <Text color="black">MasterVilla</Text>
        </Box>
      </HStack>
    </>
  );
};

export default BookingSecondStep;
