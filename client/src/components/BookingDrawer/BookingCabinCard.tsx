import { Box, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
// import { useDispatch } from 'react-redux';
// import { setSelectedCabin } from '../../redux/slices/bookingsSlice';
// import { useAppSelector } from '../../redux/hooks';
// import { useState } from 'react';

const BookingCabinCard = ({
  cabinImg,
  cabinName,
  cabinDescription,
  cabinPrice,
  isDisabled = false,
}: {
  cabinImg: string;
  cabinName: string;
  cabinDescription: string;
  cabinPrice: number;
  isDisabled?: boolean;
}) => {
  // const { selectedCabin } = useAppSelector(state => state.bookings);

  // const [isSelected, setIsSelected] = useState(!!selectedCabin);
  // const dispatch = useDispatch();

  // const onClickHandler = () => {
  //   if (!isSelected) {
  //     dispatch(setSelectedCabin('Master Villa'));
  //   } else {
  //     dispatch(setSelectedCabin(''));
  //   }
  //   setIsSelected(!isSelected);
  // };
  return (
    <Box
      border={
        // isSelected || selectedCabin ? '0.5rem solid black' : '0 solid black'
        !isDisabled ? '0.5rem solid #547c39' : 'none'
      }
      background="white"
      p="0.75rem"
      w="100%"
      borderRadius="1rem"
      // cursor="pointer"
      _hover={{ transform: 'translate(0, -5px)' }}
      transition="0.3s ease-in-out"
      position="relative"
    >
      <Image
        src={cabinImg}
        alt={`${cabinName} image`}
        w="100%"
        style={{ borderRadius: '1rem' }}
      />
      <Heading fontSize="1.25rem" color="black" mt="1.25rem" mb="0.625rem">
        {cabinName}
      </Heading>
      <Text color="black" fontSize="0.875rem">
        {cabinDescription}
      </Text>
      <HStack gap="0.375rem" alignItems="flex-end">
        <Text
          color="black"
          fontSize="1.25rem"
          fontWeight="700"
          letterSpacing="1px"
        >
          {cabinPrice} lei
        </Text>
        <Text fontSize="0.875rem" mb="0.75rem" color="rgba(0,0,0,.8)">
          night
        </Text>
      </HStack>
      {isDisabled && (
        <VStack
          position="absolute"
          top="0"
          bottom="0"
          right="0"
          left="0"
          borderRadius="1rem"
          backgroundColor="rgba(0,0,0,.6)"
          justifyContent="center"
          backdropFilter="blur(3px)"
        >
          <Heading letterSpacing="2px" color="rgb(234, 229, 223)">
            Coming soon
          </Heading>
        </VStack>
      )}
    </Box>
  );
};

export default BookingCabinCard;
