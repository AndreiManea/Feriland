import { VStack, Text } from '@chakra-ui/react';

const DescriptionContent = () => {
  return (
    <VStack align="flex-start" spacing={4}>
      <Text fontSize="1.1rem" mb="0px">
      Galbino is a stunning 16th century castle in the midst of nature just a few kilometres from the enchanting village of Anghiari. On a hill surrounded by woods and fields, Galbino Castle is a private and exclusive place to relax, explore nature, visit the cultural attractions of the area and enjoy the Tuscan delights of food and wine. The castle is naturally cool thanks to its thick walls and features an infinity pool with spectacular countryside views...
      </Text>
      <Text fontWeight="800" fontSize="1.4rem">
        The Space - Keep it relatively short
      </Text>
      <Text fontSize="1.1rem" mb="0px">
      The Castle, which is rented out for private use, has ten bedrooms on two floors, a huge games room with billiards and a ping pong table, a large kitchen with a fireplace, two dining rooms, a library, a living room with walls covered in frescos and a small chapel which is still consecrated. The castle is surrounded by a large garden, also for the exclusive use of guests, housing the spectacular infinity pool overlooking the Tuscan countryside.A few steps from the pool there is a comfortable changing room with a bathroom and shower.
      </Text>
    </VStack>
  );
};

export default DescriptionContent;
