import { createSlice } from '@reduxjs/toolkit';

const STORAGE_KEY = 'pawfect_favorites';

// Safely load initial favorites from localStorage
const loadFavorites = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (err) {
    console.warn('Could not load favorites from localStorage', err);
    return [];
  }
};

// Safely save favorites to localStorage
const saveFavorites = (items) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (err) {
    console.warn('Could not save favorites to localStorage', err);
  }
};

const initialState = {
  items: loadFavorites(),
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    // Add pet to favourites (prevents duplicate favourites)
    addFavorite: (state, action) => {
      const pet = action.payload;
      const exists = state.items.some((item) => item.id === pet.id);
      if (!exists) {
        state.items.push(pet);
        saveFavorites(state.items);
      }
    },
    // Remove pet from favourites by id
    removeFavorite: (state, action) => {
      const petId = action.payload?.id !== undefined ? action.payload.id : action.payload;
      state.items = state.items.filter((item) => item.id !== petId);
      saveFavorites(state.items);
    },
    // Toggle favourite status
    toggleFavorite: (state, action) => {
      const pet = action.payload;
      const index = state.items.findIndex((item) => item.id === pet.id);
      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        state.items.push(pet);
      }
      saveFavorites(state.items);
    },
    // Clear all favourites
    clearFavorites: (state) => {
      state.items = [];
      saveFavorites(state.items);
    }
  },
});

export const { addFavorite, removeFavorite, toggleFavorite, clearFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
