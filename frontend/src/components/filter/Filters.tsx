import { setFilters } from '@/store/listingsSlice';
import { RootState } from '@/store/store';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface Props {
  handleSearch: (filters: Filter) => void;
}

export const initialFilter: Filter = {
  bedrooms: 1,
  bathrooms: 1,
  parking: 1,
  priceRange: 500000,
};

const Filters = ({ handleSearch }: Props) => {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.listings.filters);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setFilters({ ...filters, [name]: Number(value) }));
  };

  return (
    <div className='mb-4 flex flex-col space-y-4 space-x-0 lg:flex-row lg:space-x-4 lg:space-y-0'>
      <div className='flex flex-row space-x-1 items-center'>
        <p>Bedrooms:</p>
        <select
          className='rounded-lg border border-gray px-2 py-1'
          name='bedrooms'
          value={filters.bedrooms}
          onChange={handleFilterChange}
        >
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
      </div>
      <div className='flex flex-row space-x-1 items-center'>
        <p>Bathrooms:</p>
        <select
          className='rounded-lg border border-gray px-2 py-1'
          name='bathrooms'
          value={filters.bathrooms}
          onChange={handleFilterChange}
        >
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
      </div>
      <div className='flex flex-row space-x-1 items-center'>
        <p>Parking:</p>
        <select
          className='rounded-lg border border-gray px-2 py-1'
          name='parking'
          value={filters.parking}
          onChange={handleFilterChange}
        >
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
      </div>
      <div className='flex flex-row flex-grow space-x-1 items-center'>
        <p>Price Range:</p>
        <input
          className='flex-grow'
          type='range'
          name='priceRange'
          min='1'
          max='1000000'
          value={filters.priceRange}
          onChange={handleFilterChange}
        />
        <span>${filters.priceRange}</span>
      </div>
      <button
        className='rounded-lg text-[12px] border border-gray bg-blue-400 hover:bg-blue-500 text-white px-4 py-1'
        onClick={() => handleSearch(filters)}
      >
        Search
      </button>
    </div>
  );
};

export default Filters;
