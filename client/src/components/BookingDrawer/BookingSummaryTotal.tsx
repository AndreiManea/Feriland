import {
  VStack,
  Heading,
  Box,
  HStack,
  FormControl,
  Checkbox,
  FormErrorMessage,
  Text,
  Link,
} from '@chakra-ui/react';
import { useAppSelector } from '../../redux/hooks';
import { Dispatch, SetStateAction } from 'react';

const BookingSummaryTotal = ({
  showError,
  isChecked,
  setIsChecked,
  setShowError,
}: {
  isChecked: boolean;
  showError: boolean;
  setIsChecked: Dispatch<SetStateAction<boolean>>;
  setShowError: Dispatch<SetStateAction<boolean>>;
}) => {
  const { selectedNights, selectedCabin } = useAppSelector(
    state => state.bookingsForm
  );
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    if (e.target.checked) {
      setShowError(false); // Remove the error if the user checks the box
    }
  };
  return (
    <VStack alignItems="flex-start" gap="1rem" width="100%">
      <Heading
        fontSize={{ base: '1.4rem', md: '1.8rem' }}
        color="rgba(234, 229, 223)"
        letterSpacing="1px"
        m="0"
        textAlign="right"
      >
        Total
      </Heading>
      <Box
        width="100%"
        height="1px"
        backgroundColor="rgba(234, 229, 223,.75)"
      />

      <HStack>
        <Heading
          fontSize={{ base: '1.2rem', md: '1.5rem' }}
          letterSpacing="1px"
          color="rgb(234, 229, 223)"
          whiteSpace="nowrap"
        >
          {(selectedCabin !== 'masterVilla' ? 1000 : 1500) * selectedNights} RON
        </Heading>
        <Heading
          fontSize={{ base: '0.9rem', md: '1rem' }}
          letterSpacing="1px"
          color="rgb(234, 229, 223)"
          whiteSpace="nowrap"
        >
          ( {selectedCabin !== 'masterVilla' ? '1000' : '1500'} RON x{' '}
          {selectedNights} {selectedNights === 1 ? 'night' : 'nights'} )
        </Heading>
      </HStack>
      <FormControl isInvalid={showError}>
        <HStack gap="1rem" alignItems="center">
          <Checkbox
            isChecked={isChecked}
            onChange={handleCheckboxChange}
            colorScheme="teal"
            size="lg"
            outline="none"
          />
          <HStack alignItems="center" gap="0.3rem">
            <Text
              fontSize={{
                base: '0.9rem',
                md: '1.1rem',
                lg: '1.2rem',
              }}
              mb="0"
            >
              I agree to the
            </Text>
            <Link
              href={'/terms-and-conditions'}
              position="relative"
              color={'#547c39'}
              _after={{
                content: '""',
                position: 'absolute',
                bottom: -1,
                left: 0,
                height: '1px',
                bg: '#547c39',
                width: '0%',
                transition: 'width 0.4s ease-in-out',
              }}
              transition="0.3s ease-in-out"
              _hover={{
                _after: {
                  width: '100%',
                },
              }}
            >
              <Text
                fontSize={{
                  base: '0.9rem',
                  md: '1.1rem',
                  lg: '1.2rem',
                }}
                m="0"
                letterSpacing="0"
                fontWeight="800"
              >
                terms and conditions
              </Text>
            </Link>
          </HStack>

          {/* Error Message */}
        </HStack>
        {showError && (
          <FormErrorMessage>
            You must agree to the terms and conditions to proceed.
          </FormErrorMessage>
        )}
      </FormControl>
    </VStack>
  );
};

export default BookingSummaryTotal;
