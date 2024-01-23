/* eslint-disable @next/next/no-img-element */

interface Props {
  listing: Listing;
}

const ListingInfo = ({ listing }: Props) => {
  const {
    title,
    description,
    sqft,
    salePrice,
    bedrooms,
    bathrooms,
    pictureURL,
    parking,
    location,
    dateListed,
    yearBuilt,
  } = listing;

  const formattedPrice = salePrice
    .toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    })
    .replace(/,/g, ' ');

  const formattedDate = new Date(dateListed).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className='flex flex-col space-y-4 '>
      <div className='flex flex-col space-y-1'>
        <div className='flex flex-row'>
          <h2 className='text-[12px] lg:text-xl font-bold grow'>{title}</h2>
          <h2 className='text-[12px] lg:text-xl font-bold'>{formattedPrice}</h2>
        </div>
        <div className='flex flex-row'>
          <p className='text-gray-500 text-[12px] grow'>{location}</p>
          <p className='text-gray-400 text-[12px]'>Date Listed: {formattedDate}</p>
        </div>
      </div>
      <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
        <img className='w-full h-64 object-cover object-center' src={pictureURL} alt={title} />
        <div className='p-4 text-[12px] lg:text-[14px]'>
          <div className='flex items-center justify-between'>
            <span className='text-gray-500'>Bedrooms: {bedrooms}</span>
            <span className='text-gray-500'>Sqft: {sqft}</span>
          </div>
          <div className='flex items-center justify-between mt-2'>
            <span className='text-gray-500'>Bathrooms: {bathrooms}</span>
            <span className='text-gray-500'>Year Built: {yearBuilt}</span>
          </div>
          <div className='flex items-center justify-between mt-2'>
            <span className='text-gray-500'>Parking: {parking}</span>
          </div>
        </div>
      </div>
      <div className='text-[12px] text-justify'>{description}</div>
    </div>
  );
};

export default ListingInfo;
