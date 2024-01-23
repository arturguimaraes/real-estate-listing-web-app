interface Listing {
  id: number;
  dateListed: string;
  title: string;
  description: string;
  salePrice: number;
  thumbnailURL: string;
  pictureURL: string;
  location: string;
  sqft: number;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  yearBuilt: number;
}

interface ListingData {
  Id: number;
  DateListed: string;
  Title: string;
  Description: string;
  'Sale Price': number;
  ThumbnailURL: string;
  PictureURL: string;
  Location: string;
  Sqft: number;
  Bedrooms: number;
  Bathrooms: number;
  Parking: number;
  YearBuilt: number;
}

interface Filter {
  bedrooms: number;
  bathrooms: number;
  parking: number;
  priceRange: number;
}

interface ContactFormValues {
  name: string;
  email: string;
  number: string;
  comments: string;
}
