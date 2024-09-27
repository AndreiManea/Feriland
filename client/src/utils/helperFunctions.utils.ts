import { format } from 'date-fns';
import { amenitiesByCategory } from './data';
import { AmenitiesByCategory, Amenity } from './types';

// Function to format dates
export const formatDate = (date: Date) => {
  return format(date, 'MMMM d, yyyy');
};

// Function to calculate total amenities
export const totalAmenities = Object.values(amenitiesByCategory).reduce(
  (total, category) => total + category.length,
  0
);

export const getAmenitiesFromEachCategory = (
  amenitiesByCategory: AmenitiesByCategory
): Amenity[] => {
  return Object.values(amenitiesByCategory).flatMap(categoryAmenities =>
    categoryAmenities.slice(0, 1) 
  );
};

export type CategoryKey = keyof typeof amenitiesByCategory;

// Function to interpolate between two colors based on a fraction (0 to 1)
export const interpolateColor = (
  color1: string,
  color2: string,
  factor: number
) => {
  const [r1, g1, b1] = color1.match(/\w\w/g)!.map(x => parseInt(x, 16));
  const [r2, g2, b2] = color2.match(/\w\w/g)!.map(x => parseInt(x, 16));

  const r = Math.round(r1 + (r2 - r1) * factor);
  const g = Math.round(g1 + (g2 - g1) * factor);
  const b = Math.round(b1 + (b2 - b1) * factor);

  return `rgb(${r}, ${g}, ${b})`;
};

// The validCNP function for Romanian CNP validation
export const validateCNP = (p_cnp: string): boolean => {
  let i = 0,
    year = 0,
    hashResult = 0;
  const cnp: number[] = [];
  const hashTable = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9];

  if (p_cnp.length !== 13) {
    return false;
  }

  for (i = 0; i < 13; i++) {
    cnp[i] = parseInt(p_cnp.charAt(i), 10);
    if (isNaN(cnp[i])) {
      return false;
    }
    if (i < 12) {
      hashResult = hashResult + cnp[i] * hashTable[i];
    }
  }

  hashResult = hashResult % 11;
  if (hashResult === 10) {
    hashResult = 1;
  }

  year = cnp[1] * 10 + cnp[2];
  switch (cnp[0]) {
    case 1:
    case 2:
      year += 1900;
      break;
    case 3:
    case 4:
      year += 1800;
      break;
    case 5:
    case 6:
      year += 2000;
      break;
    case 7:
    case 8:
    case 9:
      year += 2000;
      if (year > new Date().getFullYear() - 14) {
        year -= 100;
      }
      break;
    default:
      return false;
  }

  if (year < 1800 || year > 2099) {
    return false;
  }

  return cnp[12] === hashResult;
};
