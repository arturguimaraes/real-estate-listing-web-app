import { createSlice } from '@reduxjs/toolkit';

interface stateType {
  listings: Listing[];
  filters: Filter;
  savedListings: number[];
}

const initialState = {
  listings: [],
  filters: {
    bedrooms: 1,
    bathrooms: 1,
    parking: 1,
    priceRange: 1000000,
  },
  savedListings: [],
} as stateType;

export const listingsSlice = createSlice({
  name: 'listings',
  initialState,
  reducers: {
    setListings: (state, action) => {
      state.listings = action.payload;
    },
    setFavorite: (state, action) => {
      const isSaved = state.savedListings.includes(action.payload);
      if (isSaved) {
        state.savedListings = state.savedListings.filter(
          (id) => id !== action.payload
        );
      } else {
        state.savedListings.push(action.payload);
      }
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
});

export const { setListings, setFavorite, setFilters } = listingsSlice.actions;

export default listingsSlice.reducer;
