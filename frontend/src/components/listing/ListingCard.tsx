/* eslint-disable @next/next/no-img-element */

import { setFavorite } from '@/store/listingsSlice';
import { RootState } from '@/store/store';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

interface Props {
  listing: Listing;
}

const ListingCard = ({ listing }: Props) => {
  const dispatch = useDispatch();
  const savedListings = useSelector((state: RootState) => state.listings.savedListings);

  const { title, location, bedrooms, bathrooms, salePrice, thumbnailURL } = listing;
  const saved = savedListings.includes(listing.id);

  const formattedPrice = salePrice
    .toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    })
    .replace(/,/g, ' ');

  const handleSaveListing = () => {
    dispatch(setFavorite(listing.id));
  };

  return (
    <div className='listing-card border p-4 rounded shadow-lg bg-white flex flex-col h-full'>
      <div className='flex-grow flex space-y-1 flex-col'>
        <img src={thumbnailURL} alt={title} className='w-full rounded-lg h-auto mb-2' />
        <p className='font-semibold text-[14px]'>{title}</p>
      </div>
      <div className='flex flex-col space-y-1'>
        <p className='text-[10px]'>{location}</p>
        <p className='text-[12px] text-gray-400'>
          {bedrooms} beds | {bathrooms} baths
        </p>
        <p className='font-semibold text-[14px]'>{formattedPrice}</p>
        <div className='flex flex-col space-x-0 space-y-2 lg:flex-row lg:space-x-2 lg:space-y-0'>
          <Link
            className='text-center rounded-lg text-[12px] border border-gray bg-blue-400 hover:bg-blue-500 text-white px-4 py-1'
            href={`/listings/${listing.id}`}
            passHref
          >
            View Details
          </Link>
          <button
            onClick={handleSaveListing}
            className={`rounded-lg text-[12px] border border-gray ${
              !saved ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'
            } px-4 py-1 text-white`}
          >
            {!saved ? 'Save to Favorites' : 'Remove from Favorites'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
