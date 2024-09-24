export interface AmenitiesByCategory {
  [key: string]: Amenity[];
}

export type Amenity = {
  src: string;
  text: string;
};

export type Feature = {
  iconSrc: string;
  boldText: string;
  smallText: string;
};

export type Card = {
  src: string;
  srcSet: string;
  altText: string;
  title: string;
};

export type Slide = {
  title: string;
  description: string;
  imgSrc: string;
}

export type InfoSection = {
  title: string,
  content: string
}