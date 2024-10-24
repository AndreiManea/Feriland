export const CABIN_DESCRIPTION =
  'The villa has a spacious bedroom with an adjacent seating area and a desk for writing and reading, as well as a veranda just big enough for the two of you. The bathrooms are equipped with open-air showers, some with bath tubs.';

export const COZY_DESCRIPTION =
  'A charming veranda, just the right size for two, invites you to unwind while taking in the surrounding nature. The bathrooms are equipped with open-air showers, and some offer luxurious bathtubs for ultimate comfort.';

export const camelCaseToTitleCase = (camelCaseStr: string): string => {
  // Split the string at each uppercase letter, preserving the letter
  const words = camelCaseStr.replace(/([A-Z])/g, ' $1');

  // Capitalize the first letter of each word and convert the rest to lowercase
  const titleCaseStr = words
    .split(' ') // Split into individual words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize first letter
    .join(' '); // Join them back together with spaces

  return titleCaseStr;
};
