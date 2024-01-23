import { mapListing } from '@/utils/mapping';
import React, { useState, useEffect, useMemo, use } from 'react';
import Filters, { initialFilter } from '../filter/Filters';
import ListingCard from '../listing/ListingCard';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { setListings } from '@/store/listingsSlice';
import FavoritesModal from '../favorites/FavoritesModal';

const Listings = () => {
  const dispatch = useDispatch();
  const listings = useSelector((state: RootState) => state.listings.listings);
  const savedListings = useSelector((state: RootState) => state.listings.savedListings);

  const [filteredListings, setFilteredListings] = useState<Listing[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isFavoritesModalOpen, setIsFavoritesModalOpen] = useState<boolean>(false);

  useEffect(() => {
    fetch('http://localhost:3001/listings')
      .then((response) => response.json())
      .then((data) => {
        const mappedListings: Listing[] = data.map((listing: ListingData) => mapListing(listing));
        dispatch(setListings(mappedListings));
        setIsLoading(false);
        console.log(`Successfully loaded ${mappedListings.length} listings`);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setIsLoading(false);
      });
  }, [dispatch]);

  useEffect(() => {
    handleSearch(initialFilter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listings]);

  const handleSearch = (filters: Filter) => {
    const fls = listings
      .filter((listing) => {
        return (
          listing.bedrooms >= filters.bedrooms &&
          listing.bathrooms >= filters.bathrooms &&
          listing.parking >= filters.parking &&
          listing.salePrice <= filters.priceRange
        );
      })
      .sort((a, b) => {
        const dateATime = new Date(a.dateListed).getTime();
        const dateBTime = new Date(b.dateListed).getTime();

        // Sort in descending order (newest first)
        return dateBTime - dateATime;
      });

    setFilteredListings(fls);
  };

  return (
    <div className='flex flex-col space-y-4'>
      <div className='flex flex-col space-y-4 lg:flex-row lg:space-y-0'>
        <div className='flex grow'>
          <h2 className='flex text-xl font-bold'>Real Estate Listings</h2>
        </div>
        <div className='flex'>
          <button
            onClick={() => setIsFavoritesModalOpen(true)}
            className='right rounded-lg text-[12px] border border-gray bg-green-600 hover:bg-green-700 text-white px-4 py-1 grow'
          >
            {`Favorite Listings${savedListings.length > 0 ? ` (${savedListings.length})` : ''}`}
          </button>
        </div>
      </div>

      <Filters handleSearch={handleSearch} />
      {isLoading && (
        <div className='text-center w-full'>
          <p>Loading listings...</p>
        </div>
      )}

      {!isLoading && (
        <div id='listings' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          {filteredListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      )}

      <FavoritesModal
        isOpen={isFavoritesModalOpen}
        onClose={() => setIsFavoritesModalOpen(false)}
      />
    </div>
  );
};

export default Listings;
