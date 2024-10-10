import { useRef } from 'react';
import useDarkNavbar from '../../../utils/hooks/useDarkNavbar';
import {
  Box,
  Grid,
  Heading,
  HStack,
  Image,
  VStack,
  Text,
  Stack,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const GallerySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useDarkNavbar(sectionRef);
  const { t } = useTranslation();

  return (
    <Box ref={sectionRef} py={{ base: '5rem', md: '10rem' }} my="0">
      <Box mx={{ md: 'auto' }} px={{ base: '1rem', md: '2rem' }}>
        <Grid
          gridTemplateColumns={{
            base: '1fr',
            md: '1fr 1.6fr 1fr',
            lg: '1fr 1fr 1fr',
          }}
          gridTemplateRows="auto"
          rowGap={{ base: '2rem', md: '3rem' }}
          columnGap="3rem"
          gridAutoColumns="1fr"
        >
          <Stack
            px="0"
            justifyContent="space-between"
            rowGap="6rem"
            columnGap={{ base: '1.25rem', md: '6rem' }}
            flexDirection={{ base: 'row', md: 'column' }}
          >
            <HStack justifyContent="flex-end" width="100%">
              <Image
                src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e38b178fae30e5a90a5f_pexels-julissa-helmuth-4962458.jpg"
                srcSet="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e38b178fae30e5a90a5f_pexels-julissa-helmuth-4962458-p-500.jpg 500w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e38b178fae30e5a90a5f_pexels-julissa-helmuth-4962458-p-800.jpg 800w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e38b178fae30e5a90a5f_pexels-julissa-helmuth-4962458-p-1080.jpg 1080w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e38b178fae30e5a90a5f_pexels-julissa-helmuth-4962458.jpg 1280w"
                sizes="(max-width: 479px) 32vw, (max-width: 767px) 24vw, (max-width: 1919px) 168px, 252px"
                loading="lazy"
                width={{ base: '12rem', md: '20rem' }}
                height={{ base: '12rem', md: '20rem' }}
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
                width={{ base: '12rem', md: '20rem' }}
                height={{ base: '20rem', md: '23rem' }}
                borderRadius="1.3rem"
                objectFit="cover"
                alt=""
              />
            </HStack>
          </Stack>
          <VStack
            alignItems="center"
            justifyContent="center"
            gridColumnGap={{ lg: '3rem' }}
            gridRowGap={{ base: '1.5rem', md: '2.5rem', lg: '3rem' }}
          >
            {/* //TODO: Talk about this icon to think of a better one resembling
            branding */}
            <Image
              src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e05c1cde1bf4b1ecb515_25588595_357dxf%20%5BConverted%5D.png"
              loading="lazy"
              height={{ base: '5rem', md: '6rem', lg: '7rem' }}
              objectFit="contain"
              opacity="0.5"
              alt=""
            />
            <Heading
              as="h2"
              size={{ base: 'h3', md: 'h2', lg: 'h1' }}
              mt="0"
              mb="0"
              textAlign="center"
              opacity="1"
              lineHeight={{ base: '4rem', md: '6rem' }}
              fontWeight="500"
            >
              {t('homePage.gallerySectionHeader')}
            </Heading>
            <Text
              fontSize={{ base: '1.2rem', lg: '1.4rem' }}
              textAlign="center"
              fontWeight="500"
              lineHeight={{ base: '2rem', lg: '2.5rem' }}
            >
              {t('homePage.gallerySectionText')}
            </Text>
          </VStack>
          <VStack
            px="0"
            justifyContent="space-between"
            gap={{ base: '1.25rem', md: '7rem' }}
            flexDirection={{ base: 'row', md: 'column' }}
          >
            {' '}
            <HStack justifyContent="flex-end" width="100%">
              <Image
                src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e5162f4b9d4b16b2a0bd_woman-bikini-bathing-japanese-style-bath-outdoors.jpg"
                srcSet="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e5162f4b9d4b16b2a0bd_woman-bikini-bathing-japanese-style-bath-outdoors-p-500.jpg 500w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e5162f4b9d4b16b2a0bd_woman-bikini-bathing-japanese-style-bath-outdoors-p-800.jpg 800w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65c4e5162f4b9d4b16b2a0bd_woman-bikini-bathing-japanese-style-bath-outdoors.jpg 1001w"
                sizes="(max-width: 479px) 100vw, (max-width: 767px) 45vw, (max-width: 1919px) 308px, 448px"
                loading="lazy"
                width={{ base: '12rem', md: '20rem' }}
                height={{ base: '20rem', md: '23rem' }}
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
                width={{ base: '12rem', md: '16rem' }}
                height={{ base: '12rem', md: '20rem' }}
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
