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
  altText: string;
  title: string;
  name: string;
};

export type GalleryImage = {
  mainImage: string;
  gallery: string[];
  altText: string;
  title: string;
  name: string;
};

export type GalleryKey =
  | 'bedRoom1'
  | 'bedRoom2'
  | 'bathRoom'
  | 'livingArea'
  | 'kitchen';

export type SlideDescription = {
  title: string;
  description: string;
  name: string;
};

export type SlideKey =
  | 'wineFields'
  | 'bikeTrails'
  | 'untouchedForest'
  | 'calmAndSilence'
  | 'ciubar'
  | 'wildLife';

export type Slide = {
  title: string;
  description: string;
  imgSrc: string;
};

export type InfoSection = {
  title: string;
  content: string;
};
