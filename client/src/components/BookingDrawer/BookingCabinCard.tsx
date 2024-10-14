import { Box, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { setSelectedCabin } from '../../redux/slices/bookingsSlice';
import { useAppSelector } from '../../redux/hooks';
import { useState } from 'react';
import personIcon from '../../assets/personIcon.png';
import NormalLink from '../links/NormalLink';

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
  const { selectedCabin } = useAppSelector(state => state.bookings);

  const [isSelected, setIsSelected] = useState(!!selectedCabin);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    if (!isSelected) {
      dispatch(setSelectedCabin('Master Villa'));
    } else {
      dispatch(setSelectedCabin(''));
    }
    setIsSelected(!isSelected);
  };
  return (
    <Box
      border={
        !isDisabled && isSelected
          ? '0.5rem solid #547c39'
          : '0rem solid transparent'
      }
      background="white"
      p="0.75rem"
      w="100%"
      borderRadius="1rem"
      cursor="pointer"
      _hover={{ transform: 'translate(0, -5px)' }}
      transition="0.5s ease-in-out"
      onClick={onClickHandler}
      position="relative"
    >
      <Image
        src={cabinImg}
        alt={`${cabinName} image`}
        w="100%"
        height="15rem"
        style={{ borderRadius: '1rem' }}
      />
      <VStack
        justifyContent="flex-start"
        alignItems="flex-start"
        gap={{ base: '0.5rem' }}
        position="relative"
      >
        <Heading
          fontSize={{ base: '1.5rem', md: '2rem' }}
          color="black"
          mt="1.25rem"
          mb={0}
        >
          {cabinName}
        </Heading>
        <Box fontWeight="700" mb={{ lg: '0.5rem' }} cursor="pointer">
          <NormalLink isGreen title={'View Cabin'} to="/master-villa" />
        </Box>
        <Text
          color="black"
          fontSize={{ base: '0.875rem', md: '1.1rem', lg: '1rem' }}
        >
          {cabinDescription}
        </Text>
        <HStack alignItems="center">
          <Image src={personIcon} width={{ base: '1.5rem' }} />
          <Text color="black" fontSize="1rem" mb="0">
            Up to 6 persons
          </Text>
        </HStack>
        <HStack gap="0.375rem" alignItems="flex-end" mt={{ base: '0.5rem' }}>
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
      </VStack>
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
