import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import PetCard from '../components/PetCard';

export default function PetsPage({
  pets: propPets,
  categoryFilter: propCategoryFilter,
  setCategoryFilter: propSetCategoryFilter,
  onViewDetails,
  onAdopt
}) {
  const {
    pets: contextPets,
    categoryFilter: contextCategoryFilter,
    setCategoryFilter: contextSetCategoryFilter,
    selectPetForAdoption,
    loading,
    error,
    fetchLivePets
  } = useApp();
  const navigate = useNavigate();

  const pets = propPets || contextPets;
  const categoryFilter = propCategoryFilter !== undefined ? propCategoryFilter : contextCategoryFilter;
  const setCategoryFilter = propSetCategoryFilter || contextSetCategoryFilter;

  // Local state for search term (Requirement 6)
  const [searchTerm, setSearchTerm] = useState('');
  const [vaccinatedOnly, setVaccinatedOnly] = useState(false);

  // Handle adopting pet using global Context API (Requirement 4)
  const handleAdopt = (pet) => {
    selectPetForAdoption(pet);
    if (onAdopt) {
      onAdopt(pet);
    } else {
      navigate('/adoption');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Filter and search logic
  const filteredPets = useMemo(() => {
    return pets.filter((pet) => {
      const matchesCategory =
        categoryFilter === 'All' || pet.type.toLowerCase() === categoryFilter.toLowerCase();

      const term = searchTerm.toLowerCase().trim();
      const matchesSearch =
        term === '' ||
        pet.name.toLowerCase().includes(term) ||
        pet.breed.toLowerCase().includes(term) ||
        pet.type.toLowerCase().includes(term) ||
        pet.location.toLowerCase().includes(term);
      const matchesVaccinated = !vaccinatedOnly || (pet.tags || []).some((tag) => tag.toLowerCase() === 'vaccinated');

      return matchesCategory && matchesSearch && matchesVaccinated;
    });
  }, [pets, categoryFilter, searchTerm, vaccinatedOnly]);

  const categories = [
    { label: 'All Pets', value: 'All', icon: '🐾' },
    { label: 'Dogs', value: 'Dog', icon: '🐶' },
    { label: 'Cats', value: 'Cat', icon: '🐱' },
    { label: 'Rabbits', value: 'Rabbit', icon: '🐰' }
  ];

  return (
    <div className="pets-page-container">
      {/* Header Banner */}
      <div className="pets-page-header">
        <div className="section-tag">
          Find Your Friend
        </div>
        <h1 className="section-heading">
          Meet Your New Best Friend 🐾
        </h1>
        <p className="section-subtext">
          Browse through all our rescued companions currently ready for their forever homes.
        </p>

        {/* Optional dog photo refresh action */}
        <div className="dog-photo-refresh-wrap">
          <button
            className="dog-photo-refresh"
            onClick={fetchLivePets}
            disabled={loading}
            title="Refresh dog photos"
          >
            {loading ? 'Refreshing photos...' : 'Refresh dog photos ↻'}
          </button>
        </div>

        {/* Controls Bar: Search & Category Filter Pills */}
        <div className="pets-control-bar">
          <div className="search-input-wrapper">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search by name, breed, species, or city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search pets"
            />
          </div>

          <div className="filter-pills">
            {categories.map((cat) => {
              const count =
                cat.value === 'All'
                  ? pets.length
                  : pets.filter((p) => p.type === cat.value).length;

              return (
                <button
                  key={cat.value}
                  className={`filter-pill ${categoryFilter === cat.value ? 'active' : ''}`}
                  onClick={() => setCategoryFilter(cat.value)}
                >
                  {cat.icon} {cat.label} ({count})
                </button>
              );
            })}
            <button
              type="button"
              className={`filter-pill ${vaccinatedOnly ? 'active' : ''}`}
              onClick={() => setVaccinatedOnly((value) => !value)}
              aria-pressed={vaccinatedOnly}
            >
              💉 Vaccinated {vaccinatedOnly ? '✓' : ''}
            </button>
          </div>
        </div>
      </div>

      {/* Error & Retry Handling (Requirement 5) */}
      {error && (
        <div style={{
          maxWidth: '820px',
          margin: '20px auto',
          padding: '14px 20px',
          backgroundColor: '#fff3cd',
          border: '1.5px solid #ffeeba',
          borderRadius: 'var(--radius-md)',
          color: '#856404',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          flexWrap: 'wrap'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '20px' }}>⚠️</span>
            <span style={{ fontSize: '14px', fontWeight: 600 }}>{error}</span>
          </div>
          <button
            className="btn btn-secondary btn-sm"
            onClick={fetchLivePets}
            style={{ padding: '6px 16px', fontSize: '13px' }}
          >
            Retry API 🔄
          </button>
        </div>
      )}

      {/* Loading State (Requirement 5) */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
          <div style={{ fontSize: '48px', display: 'inline-block', animation: 'gentlePaw 1.5s infinite ease-in-out' }}>
            🐾
          </div>
          <h3 style={{ marginTop: '16px', color: 'var(--text-main)', fontSize: '22px' }}>
            Fetching Live Animal Companions...
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px' }}>
            Retrieving fresh dog photos from Dog CEO. Cats and rabbits use our curated local profiles.
          </p>
        </div>
      ) : (
        /* Pet Cards Grid */
        <section className="pets-container-section">
          {filteredPets.length > 0 ? (
            <div className="pets-grid">
              {filteredPets.map((pet) => (
                <PetCard
                  key={pet.id}
                  pet={pet}
                  onViewDetails={onViewDetails}
                  onAdopt={handleAdopt}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-state-emoji">🥺🐾</div>
              <h3>No companion found</h3>
              <p>
                We couldn't find any pet matching "{searchTerm}". Try another breed, name, or clear the search.
              </p>
              <button
                className="btn btn-primary btn-sm"
                onClick={() => {
                  setSearchTerm('');
                  setCategoryFilter('All');
                  setVaccinatedOnly(false);
                }}
              >
                Reset Filters & Show All
              </button>
            </div>
          )}
        </section>
      )}
    </div>
  );
}
