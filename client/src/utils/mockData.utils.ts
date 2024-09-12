import { AmenitiesByCategory, Amenity } from "./types";

export const featuresData = [
  {
    iconSrc:
      'https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dcb23745008c1d93dbff02_cab-gps_13807485.svg',
    boldText: 'Free parking on the premise',
    smallText: 'Up to 3 cars',
  },
  {
    iconSrc:
      'https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dcb48ba57382c01d3830c4_river_13806426.svg',
    boldText: 'Pool and Ciubar',
    smallText: 'This is an extra and you will have to call',
  },
  {
    iconSrc:
      'https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dcb42c74276c399013c032_calendar_13868806.svg',
    boldText: 'Free Cancelation before ( dynamic date )',
    smallText: '',
  },
];

export const cardItemsData = [
  {
    src: 'https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d71d4cbcbf35a9a61090d1_10318%20(1).jpg',
    srcSet:
      'https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d71d4cbcbf35a9a61090d1_10318%20(1)-p-500.jpg 500w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d71d4cbcbf35a9a61090d1_10318%20(1)-p-800.jpg 800w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d71d4cbcbf35a9a61090d1_10318%20(1)-p-1080.jpg 1080w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d71d4cbcbf35a9a61090d1_10318%20(1)-p-1600.jpg 1600w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d71d4cbcbf35a9a61090d1_10318%20(1).jpg 2000w',
    altText: 'Bedroom 1',
    title: 'Bedroom 1',
  },
  {
    src: 'https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d389606f5c05a7c364047b_interior-design-hut-photo%20(1)-p-500.jpg',
    srcSet:
      'https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d389606f5c05a7c364047b_interior-design-hut-photo%20(1)-p-500.jpg 500w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d389606f5c05a7c364047b_interior-design-hut-photo%20(1)-p-800.jpg 800w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d389606f5c05a7c364047b_interior-design-hut-photo%20(1)-p-1080.jpg 1080w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d389606f5c05a7c364047b_interior-design-hut-photo%20(1).jpg 1333w',
    altText: 'Bedroom 2',
    title: 'Bedroom 2',
  },
  {
    src: 'https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dca436b675c78191f9704b_1205.jpg',
    srcSet:
      'https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dca436b675c78191f9704b_1205-p-500.jpg 500w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dca436b675c78191f9704b_1205-p-800.jpg 800w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dca436b675c78191f9704b_1205.jpg 1000w',
    altText: 'Bathroom',
    title: 'Bathroom',
  },
  {
    src: 'https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dca4c8bfccf1f0baba49f0_40602.jpg',
    srcSet:
      'https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dca4c8bfccf1f0baba49f0_40602-p-500.jpg 500w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dca4c8bfccf1f0baba49f0_40602-p-800.jpg 800w, https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65dca4c8bfccf1f0baba49f0_40602.jpg 1000w',
    altText: 'Living Area',
    title: 'Living Area',
  },
];

export const getAmenitiesFromEachCategory = (amenitiesByCategory: AmenitiesByCategory): Amenity[] => {
  return Object.values(amenitiesByCategory).flatMap((categoryAmenities) =>
    categoryAmenities.slice(0, 1)
  );
};