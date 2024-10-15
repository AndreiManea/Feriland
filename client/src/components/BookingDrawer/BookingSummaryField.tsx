import { VStack, Heading, Text } from '@chakra-ui/react';

const BookingSummaryField = ({
  fieldTitle,
  fieldValue,
  isHeader,
}: {
  fieldTitle: string;
  fieldValue: string | number;
  isHeader?: boolean;
}) => {
  return (
    <VStack alignItems="flex-start" gap={0} width="100%">
      <Heading
        fontSize={{
          base: isHeader ? '1.2rem' : '1rem',
          md: isHeader ? '1.6rem' : '1.4rem',
        }}
        color="rgb(234, 229, 223)"
        letterSpacing="1px"
      >
        {fieldTitle}
      </Heading>
      <Text
        fontSize={{
          base: isHeader ? '1rem' : '0.85rem',
          md: '1.2rem',
        }}
      >
        {fieldValue}
      </Text>
    </VStack>
  );
};

export default BookingSummaryField;
