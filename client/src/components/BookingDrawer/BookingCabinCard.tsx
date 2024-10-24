import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import {
  setBookingStep,
  setSelectedCabin,
  setSelectedCabinName,
  setSelectedDates,
} from '../../redux/slices/bookingsFormSlice';
import { useAppSelector } from '../../redux/hooks';
import personIcon from '../../assets/personIcon.png';
import NormalLink from '../links/NormalLink';
import {
  findFirstAvailableTwoNights,
  parseDateStrings,
} from '../../utils/calendar';

const BookingCabinCard = ({
  cabinImg,
  cabinName,
  name,
  cabinDescription,
  cabinPrice,
  persons,
  isDisabled = false,
}: {
  cabinImg: string;
  cabinName: string;
  name: string;
  cabinDescription: string;
  cabinPrice: number;
  persons: number;
  isDisabled?: boolean;
}) => {
  const { selectedCabin } = useAppSelector(state => state.bookingsForm);
  const bookedDates = useAppSelector(
    state =>
      state.bookingsDates.bookedDates[
        name as keyof typeof state.bookingsDates.bookedDates
      ]
  );
  const firstAvailableDates = findFirstAvailableTwoNights(
    parseDateStrings(bookedDates)
  );
  const dispatch = useDispatch();

  const isSelectedCabin = name === selectedCabin;
  const onClickHandler = () => {
    if (!isSelectedCabin) {
      dispatch(setSelectedDates(firstAvailableDates));
      dispatch(setSelectedCabin(name));
      dispatch(setSelectedCabinName(cabinName));
      dispatch(setBookingStep(2));
    } else {
      dispatch(setSelectedCabin(''));
    }
  };
  return (
    <Box
      background="white"
      p="0.75rem"
      w="100%"
      borderRadius="1rem"
      _hover={{
        base: { transform: 'none' },
        lg: { transform: 'translate(0, -5px)' },
      }}
      transition="0.5s ease-in-out"
      position="relative"
    >
      <Image
        src={cabinImg}
        alt={`${cabinName} image`}
        w="100%"
        height={{ base: '10rem', md: '20rem', lg: '15rem' }}
        style={{ borderRadius: '1rem' }}
      />
      <VStack
        justifyContent="flex-start"
        alignItems="flex-start"
        gap={{ base: '0.5rem', md: '0.75rem', lg: '0.5rem' }}
        position="relative"
      >
        <Heading
          fontSize={{ base: '1.5rem', md: '2.25rem', lg: '2rem' }}
          color="black"
          mt={{ base: '1rem', md: '1.25rem' }}
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
          <Image
            src={personIcon}
            width={{ base: '1.25rem', md: '2rem', lg: '1.5rem' }}
          />
          <Text
            color="black"
            fontSize={{ base: '0.8rem', md: '1.1rem', lg: '1rem' }}
            mb="0"
          >
            Up to {persons} persons
          </Text>
        </HStack>
        <HStack gap="0.375rem" alignItems="flex-end" mt={{ base: '0.5rem' }}>
          <Text
            color="black"
            fontSize={{ base: '1rem', md: '1.5rem', lg: '1.25rem' }}
            fontWeight="700"
            letterSpacing="1px"
          >
            {cabinPrice} lei
          </Text>
          <Text
            fontSize={{ base: '0.75rem', md: '1rem', lg: '0.875rem' }}
            mb="0.75rem"
            color="rgba(0,0,0,.8)"
          >
            night
          </Text>
        </HStack>
      </VStack>
      <Button
        onClick={onClickHandler}
        mt={{ base: '0.25rem', md: '0.75rem' }}
        color={isSelectedCabin ? 'white' : 'rgb(84, 124, 57)'}
        backgroundColor={isSelectedCabin ? 'rgb(84, 124, 57)' : 'white'}
        p={{ base: '0.5rem', md: '2rem', lg: '1.5rem 1.5rem' }}
        fontSize={{ base: '0.9rem', md: '1.25rem', lg: '1.1rem' }}
        borderRadius="0.2rem"
        border="1px solid rgb(84, 124, 57)"
        _hover={{
          base: 'none',
          lg: { backgroundColor: 'rgb(84, 124, 57)', color: 'white' },
        }}
        transition="0.3s ease-in-out"
        w="100%"
      >
        {isSelectedCabin ? 'Chosen Cabin' : 'Choose'}
      </Button>
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
