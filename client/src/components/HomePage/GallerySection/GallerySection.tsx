import { useRef } from 'react';
import useDarkNavbar from '../../../utils/hooks/useDarkNavbar';
import { Box, Grid, Heading, HStack, Image, VStack, Text } from '@chakra-ui/react';

const GallerySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useDarkNavbar(sectionRef);

  return (
    <Box ref={sectionRef} py="10rem" my="0">
      <Box mx="auto" px="2rem">
        <Grid
          gridTemplateColumns="1fr 1fr 1fr"
          gridTemplateRows="auto"
          rowGap="3rem"
          columnGap="3rem"
          gridAutoColumns="1fr"
        >
          <VStack
            px="0"
            justifyContent="space-between"
            rowGap="6rem"
            columnGap="6rem"
            gridArea="span 1 / span 1 / span 1 / span 1"
          >
            <HStack justifyContent="flex-end" width="100%">
              <Image
                src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e38b178fae30e5a90a5f_pexels-julissa-helmuth-4962458.jpg"
                srcSet="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e38b178fae30e5a90a5f_pexels-julissa-helmuth-4962458-p-500.jpg 500w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e38b178fae30e5a90a5f_pexels-julissa-helmuth-4962458-p-800.jpg 800w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e38b178fae30e5a90a5f_pexels-julissa-helmuth-4962458-p-1080.jpg 1080w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e38b178fae30e5a90a5f_pexels-julissa-helmuth-4962458.jpg 1280w"
                sizes="(max-width: 479px) 32vw, (max-width: 767px) 24vw, (max-width: 1919px) 168px, 252px"
                loading="lazy"
                width="16rem"
                height="20rem"
                borderRadius="1.3rem"
                objectFit="cover"
                alt=""
              />
            </HStack>
            <HStack justifyContent="flex-start" width="100%">
              <Image
                src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e5d9c1c179945a74317b_pexels-ata-ebem-10560259.jpg"
                srcSet="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e5d9c1c179945a74317b_pexels-ata-ebem-10560259-p-500.jpg 500w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e5d9c1c179945a74317b_pexels-ata-ebem-10560259-p-800.jpg 800w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e5d9c1c179945a74317b_pexels-ata-ebem-10560259-p-1080.jpg 1080w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e5d9c1c179945a74317b_pexels-ata-ebem-10560259.jpg 1280w"
                sizes="(max-width: 479px) 48vw, (max-width: 767px) 44vw, (max-width: 1919px) 308px, 448px"
                loading="lazy"
                width="20rem"
                height="23rem"
                borderRadius="1.3rem"
                objectFit="cover"
                alt=""
              />
            </HStack>
          </VStack>
          <VStack
            alignItems="center"
            justifyContent="center"
            gridColumnGap="3rem"
            gridRowGap="3rem"
            gridArea="span 1 / span 1 / span 1 / span 1"
          >
            <Image
              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e05c1cde1bf4b1ecb515_25588595_357dxf%20%5BConverted%5D.png"
              loading="lazy"
              height="5rem"
              objectFit="contain"
              opacity="0.5"
              alt=""
            />
            <Heading
              as="h2"
              size="h2"
              mt="0"
              mb="1rem"
              textAlign="center"
              opacity="1"
              lineHeight="6rem"
              fontWeight="500"
            >
              Hard to find, hard to leave
            </Heading>
            <Text as="h3" size="h3" textAlign="center" fontWeight="500" lineHeight="1.4rem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </Text>
          </VStack>
          <VStack
            px="0"
            justifyContent="space-between"
            gridArea="span 1 / span 1 / span 1 / span 1"
            gap="7rem"
          >
            {' '}
            <HStack justifyContent="flex-end" width="100%">
              <Image
                src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e5162f4b9d4b16b2a0bd_woman-bikini-bathing-japanese-style-bath-outdoors.jpg"
                srcSet="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e5162f4b9d4b16b2a0bd_woman-bikini-bathing-japanese-style-bath-outdoors-p-500.jpg 500w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e5162f4b9d4b16b2a0bd_woman-bikini-bathing-japanese-style-bath-outdoors-p-800.jpg 800w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e5162f4b9d4b16b2a0bd_woman-bikini-bathing-japanese-style-bath-outdoors.jpg 1001w"
                sizes="(max-width: 479px) 100vw, (max-width: 767px) 45vw, (max-width: 1919px) 308px, 448px"
                loading="lazy"
                width="20rem"
                height="23rem"
                borderRadius="1.3rem"
                objectFit="cover"
                alt=""
              />
            </HStack>
            <HStack justifyContent="flex-start" width="100%">
              <Image
                src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e3478b3b7e3a11f3503f_pexels-kindel-media-7148680%20(1).jpg"
                srcSet="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e3478b3b7e3a11f3503f_pexels-kindel-media-7148680%20(1)-p-500.jpg 500w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e3478b3b7e3a11f3503f_pexels-kindel-media-7148680%20(1)-p-800.jpg 800w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e3478b3b7e3a11f3503f_pexels-kindel-media-7148680%20(1).jpg 1280w"
                sizes="(max-width: 479px) 100vw, (max-width: 767px) 25vw, (max-width: 1919px) 168px, 252px"
                loading="lazy"
                width="16rem"
                height="20rem"
                borderRadius="1.3rem"
                objectFit="cover"
                alt=""
              />
            </HStack>
          </VStack>
        </Grid>
      </Box>
    </Box>
  );
};

export default GallerySection;
