import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { PETS } from '../data/petsData';

const AppContext = createContext();

const DOG_FALLBACKS = PETS.filter((pet) => pet.type === 'Dog');
const getBreedFromImage = (url) => {
  const match = url.match(/\/breeds\/([^/]+)\//i);
  return match ? match[1].replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) : 'Rescue Mix';
};

export function AppProvider({ children }) {
  const [pets, setPets] = useState(PETS);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedPet, setSelectedPet] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState('All');

  const fetchLivePets = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random/6');
      if (!response.ok) throw new Error(`Dog API returned ${response.status}`);
      const data = await response.json();
      const images = Array.isArray(data.message) ? [...new Set(data.message)] : [];
      if (!images.length) throw new Error('No dog images were returned');

      const liveDogs = images.map((image, index) => {
        const fallback = DOG_FALLBACKS[index % Math.max(DOG_FALLBACKS.length, 1)] || {};
        const breed = getBreedFromImage(image);
        return {
          ...fallback,
          id: `live-dog-${image.split('/').pop().replace(/[^a-z0-9]/gi, '')}`,
          name: `${breed.split(' ')[0] || 'Rescue'} ${['Buddy', 'Coco', 'Charlie', 'Daisy', 'Ollie', 'Ruby'][index % 6]}`,
          type: 'Dog',
          breed,
          image,
          emoji: '🐶',
          location: fallback.location || ['Chandigarh', 'Mohali', 'Patiala'][index % 3],
          age: fallback.age || `${1 + (index % 5)} Years`,
          gender: fallback.gender || (index % 2 ? 'Female' : 'Male'),
          personality: fallback.personality || 'Friendly & Playful',
          description: fallback.description || `Meet this lovely ${breed} looking for a caring forever home. Contact the rescue centre to learn more about this pet.`,
          tags: fallback.tags || ['Rescue', 'Needs a Loving Home'],
          isLiveApi: true
        };
      });
      setPets([...liveDogs, ...PETS.filter((pet) => pet.type !== 'Dog')]);
    } catch (err) {
      console.warn('Dog API unavailable; using local dog profiles:', err);
      setPets(PETS);
      setError('Live dog photos could not be loaded. Showing our local pet profiles instead.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchLivePets(); }, [fetchLivePets]);

  const selectPetForAdoption = (pet) => setSelectedPet(pet);
  const clearSelectedPet = () => setSelectedPet(null);

  return (
    <AppContext.Provider value={{
      pets, loading, error, fetchLivePets, selectedPet, setSelectedPet,
      selectPetForAdoption, clearSelectedPet, categoryFilter, setCategoryFilter
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
}
export const useAppContext = useApp;
export default AppContext;
