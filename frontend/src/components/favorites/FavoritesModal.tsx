import { RootState } from '@/store/store';
import React from 'react';
import { useSelector } from 'react-redux';
import FavoritesCard from './FavoritesCard';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const FavoritesModal = ({ isOpen, onClose }: Props) => {
  const listings = useSelector((state: RootState) => state.listings.listings);
  const savedListings = useSelector((state: RootState) => state.listings.savedListings);
  const favoriteListings = listings.filter((listing) => savedListings.includes(listing.id));

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full'>
      <div className='relative top-5 lg:top-20 p-5 border mx-4 md:mx-auto md:max-w-[500px] shadow-lg rounded-md bg-white'>
        <div className='mt-3 text-center'>
          <h3 className='text-lg leading-6 font-medium text-gray-900'>Favorite Listings</h3>
          <div className='mt-2 flex flex-col space-y-4'>
            {favoriteListings.map((listing) => (
              <FavoritesCard key={listing.id} listing={listing} />
            ))}
            {favoriteListings.length === 0 && (
              <div className='text-center py-4 text-[12px]'>You have no favorite listings.</div>
            )}
          </div>
          <div className='mt-4'>
            <button
              onClick={onClose}
              className='rounded-lg text-[12px] border border-gray bg-blue-400 hover:bg-blue-500 text-white px-4 py-1 grow'
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoritesModal;
