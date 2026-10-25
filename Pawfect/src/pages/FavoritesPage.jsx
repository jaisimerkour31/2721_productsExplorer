import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearFavorites } from '../redux/favoritesSlice';
import PetCard from '../components/PetCard';

export default function FavoritesPage({ onViewDetails, onAdopt }) {
  const favorites = useSelector((state) => state.favorites.items);
  const dispatch = useDispatch();

  return (
    <div className="pets-page-container">
      {/* Header Banner */}
      <div className="pets-page-header">
        <div className="section-tag">
          Saved Companions
        </div>
        <h1 className="section-heading">
          My Favourite Pets ❤️
        </h1>
        <p className="section-subtext">
          Keep track of the furry friends that stole your heart. You can review their profiles or proceed to adopt them anytime.
        </p>

        {favorites.length > 0 && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', marginTop: '20px', flexWrap: 'wrap' }}>
            <span style={{
              background: 'var(--primary-subtle)',
              color: 'var(--primary)',
              border: '1.5px solid var(--border-light)',
              padding: '8px 18px',
              borderRadius: 'var(--radius-full)',
              fontWeight: 700,
              fontSize: '14px'
            }}>
              ❤️ {favorites.length} {favorites.length === 1 ? 'Pet Saved' : 'Pets Saved'}
            </span>

            <button
              className="btn btn-secondary btn-sm"
              onClick={() => dispatch(clearFavorites())}
              style={{ fontSize: '13px' }}
            >
              Clear All Favourites
            </button>
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <section className="pets-container-section">
        {favorites.length > 0 ? (
          <div className="pets-grid">
            {favorites.map((pet) => (
              <PetCard
                key={pet.id}
                pet={pet}
                onViewDetails={onViewDetails}
                onAdopt={onAdopt}
              />
            ))}
          </div>
        ) : (
          <div className="empty-state" style={{ padding: '60px 24px', textAlign: 'center' }}>
            <div className="empty-state-emoji" style={{ fontSize: '64px', marginBottom: '16px' }}>
              🥺🐾
            </div>
            <h2 style={{ fontSize: '26px', marginBottom: '12px', color: 'var(--text-main)' }}>
              No Favourite Pets Saved Yet
            </h2>
            <p style={{ maxWidth: '480px', margin: '0 auto 28px', color: 'var(--text-muted)', fontSize: '16px', lineHeight: 1.6 }}>
              You haven't saved any pets to your favourites list yet. Browse through our rescued companions and click the heart icon (🤍) on any pet card to add them here!
            </p>
            <Link to="/pets" className="btn btn-primary" style={{ padding: '12px 28px' }}>
              Explore All Pets 🐾
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
