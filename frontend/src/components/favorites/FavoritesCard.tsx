/* eslint-disable @next/next/no-img-element */

import { setFavorite } from '@/store/listingsSlice';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

interface Props {
  listing: Listing;
}

const FavoritesCard = ({ listing }: Props) => {
  const dispatch = useDispatch();

  const { title, bedrooms, bathrooms, salePrice, thumbnailURL } = listing;

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
    <div className='flex space-y-1 flex-row space-x-4 border border-gray p-4 rounded-lg shadow-lg'>
      <img src={thumbnailURL} alt={title} className='w-[100px] rounded-lg h-auto mb-2' />
      <div className='flex flex-col text-left'>
        <span className='font-semibold text-[12px]'>{title}</span>
        <span className='font-semibold text-[12px]'>{formattedPrice}</span>
        <span className='text-[10px] text-gray-400'>
          {bedrooms} beds | {bathrooms} baths
        </span>
        <div className='flex md:flex-row md:space-x-2 md:space-y-0 flex-col space-x-0 space-y-2'>
          <Link className='text-center md:grow rounded-lg text-[12px] border border-gray bg-blue-400 hover:bg-blue-500 text-white px-4 py-1 grow' href={`/listings/${listing.id}`} passHref>
            View
          </Link>
          <button
            onClick={handleSaveListing}
            className='md:grow rounded-lg text-[12px] border border-gray bg-red-600 hover:bg-red-700 text-white px-4 py-1 grow'
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavoritesCard;
