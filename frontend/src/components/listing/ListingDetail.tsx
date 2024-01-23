import Link from 'next/link';
import ContactForm from '../contact/ContactForm';
import ListingInfo from './ListingInfo';
import { useDispatch, useSelector } from 'react-redux';
import { setFavorite } from '@/store/listingsSlice';
import { RootState } from '@/store/store';
import { useState } from 'react';
import FavoritesModal from '../favorites/FavoritesModal';

interface Props {
  listing: Listing | null;
}

const ListingDetail = ({ listing }: Props) => {
  const dispatch = useDispatch();
  const savedListings = useSelector((state: RootState) => state.listings.savedListings);
  const [isFavoritesModalOpen, setIsFavoritesModalOpen] = useState<boolean>(false);

  if (!listing) {
    return (
      <div>
        Could not load the listing. Please, go back by clicking{' '}
        <Link className='flex flex-row' href={`../`} passHref>
          here
        </Link>
        .
      </div>
    );
  }

  const saved = savedListings.includes(listing.id);

  const handleSaveListing = () => {
    dispatch(setFavorite(listing.id));
    setIsFavoritesModalOpen(!saved);
  };

  return (
    <>
      <div className='flex flex-col w-full'>
        {/* Go back button */}
        <div className='flex mb-4'>
          <Link
            className='text-center rounded-lg text-[12px] border border-gray bg-blue-400 hover:bg-blue-500 text-white px-4 py-1'
            href={`../`}
            passHref
          >
            Go back
          </Link>
        </div>
        <div className='flex flex-col space-y-4 lg:flex-row lg:space-x-16 lg:space-y-0 w-full'>
          <div className='lg:max-w-2xl'>
            <ListingInfo listing={listing} />
          </div>
          <div className='flex flex-col space-y-4 grow'>
            <div className='lg:text-right'>
              <button
                onClick={handleSaveListing}
                className={`right rounded-lg text-[12px] border border-gray ${
                  !saved ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'
                } px-4 py-1 grow text-white`}
              >
                {!saved ? 'Save to Favorites' : 'Remove from Favorites'}
              </button>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
      <FavoritesModal
        isOpen={isFavoritesModalOpen}
        onClose={() => setIsFavoritesModalOpen(false)}
      />
    </>
  );
};

export default ListingDetail;
