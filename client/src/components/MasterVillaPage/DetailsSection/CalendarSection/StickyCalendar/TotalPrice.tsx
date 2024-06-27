import { HStack, Divider, Text } from '@chakra-ui/react';

const TotalPrice = ({
  pricePerNight,
  selectedNights,
}: {
  pricePerNight: number;
  selectedNights: number;
}) => {
  const totalPrice = pricePerNight * selectedNights;
  return (
    <>
      <HStack justifyContent="space-between" w="full">
        <Text fontSize="md">
          {pricePerNight} lei x {selectedNights} nights
        </Text>
        <Text fontSize="md">{totalPrice} lei</Text>
      </HStack>
      <Divider />
      <HStack justifyContent="space-between" pt={2} w="full">
        <Text fontSize="lg" fontWeight="semibold">
          Total
        </Text>
        <Text fontSize="lg" fontWeight="semibold">
          {totalPrice} lei
        </Text>
      </HStack>
    </>
  );
};

export default TotalPrice;
