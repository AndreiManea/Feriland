import { VStack, Heading, Text } from '@chakra-ui/react';

const BookingSummaryField = ({
  fieldTitle,
  fieldValue,
  titleFont,
  valueFont,
}: {
  fieldTitle: string;
  fieldValue: string | number;
  titleFont?: string;
  valueFont?: string;
}) => {
  return (
    <VStack alignItems="flex-start" gap={0} width="100%">
      <Heading
        fontSize={titleFont ? titleFont : '1.2rem'}
        color="rgb(234, 229, 223)"
        letterSpacing="1px"
      >
        {fieldTitle}
      </Heading>
      <Text fontSize={valueFont ? valueFont : '1.05rem'}>{fieldValue}</Text>
    </VStack>
  );
};

export default BookingSummaryField;
