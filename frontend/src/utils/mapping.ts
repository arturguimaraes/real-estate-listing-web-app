export const mapListing = (listing: ListingData): Listing => {
  return {
    id: listing.Id,
    dateListed: listing.DateListed,
    title: listing.Title,
    description: listing.Description,
    salePrice: listing['Sale Price'],
    thumbnailURL: listing.ThumbnailURL,
    pictureURL: listing.PictureURL,
    location: listing.Location,
    sqft: listing.Sqft,
    bedrooms: listing.Bedrooms,
    bathrooms: listing.Bathrooms,
    parking: listing.Parking,
    yearBuilt: listing.YearBuilt,
  };
};
