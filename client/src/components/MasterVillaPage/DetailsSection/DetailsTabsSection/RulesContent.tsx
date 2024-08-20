import { Text, VStack } from '@chakra-ui/react';
import IconDetails from './IconDetails';

const RulesContent = () => {
  return (
    <VStack align="flex-start" spacing={4}>
      <IconDetails text="Check-in: 3:00 PM - 6:00 PM" />
      <IconDetails text="Checkout before 10:00 AM" />
      <Text fontWeight="700" fontSize="1.6em" mt="0.8rem" mb="0px">
        Additional Rules
      </Text>
      <Text fontSize="1.1rem">
        Included in the price:
        <br />
        Internet access, air conditioning, parking place, electricity, gas,
        water, final cleaning, bed linen, hand towels, pool, sunloungers,
        Wireless Internet access.
        <br />
        <br />
        4 persons and 2 persons (extra beds) including children and infants
        (under 2 years). Please note that the maximum occupancy (6 persons) must
        not be exceeded even with infants under 2 years of age.
        <br />
        <br />
        Pets:
        <br />
        Not allowed. Free of charge.
        <br />
        <br />
        Deposit (in cash when the keys are handed over on site, will be refunded
        on departure): EUR 200
      </Text>
    </VStack>
  );
};

export default RulesContent;
