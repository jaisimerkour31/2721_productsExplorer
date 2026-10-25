import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PetsPage from './pages/PetsPage';
import MatchPage from './pages/MatchPage';
import AdoptionPage from './pages/AdoptionPage';
import FavoritesPage from './pages/FavoritesPage';
import NotFoundPage from './pages/NotFoundPage';
import PetDetailsModal from './pages/PetDetailsModal';
import { useApp } from './context/AppContext';

// Helper component to scroll to top on every route transition
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

export default function App() {
  const { pets, selectedPet, selectPetForAdoption, categoryFilter, setCategoryFilter } = useApp();
  const [selectedPetForDetails, setSelectedPetForDetails] = useState(null);
  const navigate = useNavigate();

  // Handlers
  const handleViewDetails = (pet) => {
    setSelectedPetForDetails(pet);
  };

  const handleCloseDetails = () => {
    setSelectedPetForDetails(null);
  };

  const handleAdoptPet = (pet) => {
    selectPetForAdoption(pet);
    navigate('/adoption');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-wrapper">
      <ScrollToTop />

      {/* 1. Global Navigation Bar */}
      <Navbar setCategoryFilter={setCategoryFilter} />

      {/* 2. Main Page Views via React Router DOM */}
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                pets={pets}
                setCategoryFilter={setCategoryFilter}
                onViewDetails={handleViewDetails}
                onAdopt={handleAdoptPet}
              />
            }
          />
          <Route
            path="/pets"
            element={
              <PetsPage
                pets={pets}
                categoryFilter={categoryFilter}
                setCategoryFilter={setCategoryFilter}
                onViewDetails={handleViewDetails}
                onAdopt={handleAdoptPet}
              />
            }
          />
          <Route
            path="/match"
            element={
              <MatchPage
                pets={pets}
                onViewDetails={handleViewDetails}
                onAdopt={handleAdoptPet}
              />
            }
          />
          <Route
            path="/adoption"
            element={
              <AdoptionPage
                pets={pets}
                selectedPet={selectedPet}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <FavoritesPage
                onViewDetails={handleViewDetails}
                onAdopt={handleAdoptPet}
              />
            }
          />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* 3. Reusable Pet Details Modal */}
      {selectedPetForDetails && (
        <PetDetailsModal
          pet={selectedPetForDetails}
          onClose={handleCloseDetails}
          onAdopt={handleAdoptPet}
        />
      )}

      {/* 4. Global Footer */}
      <Footer setCategoryFilter={setCategoryFilter} />
    </div>
  );
}
