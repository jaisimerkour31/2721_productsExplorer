import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/favoritesSlice';
import { Heart, ShieldCheck } from 'lucide-react';

export default function PetCard({ pet, onViewDetails, onAdopt }) {
  const dispatch = useDispatch();
  const isFavorite = useSelector((state) =>
    state.favorites.items.some((item) => item.id === pet.id)
  );

  const handleFavoriteToggle = (e) => {
    e.stopPropagation();
    if (isFavorite) {
      dispatch(removeFavorite(pet.id));
    } else {
      dispatch(addFavorite(pet));
    }
  };

  return (
    <div className="pet-card">
      <div className="pet-card-image-wrap">
        <img
          src={pet.image}
          alt={pet.name}
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80';
          }}
        />
        <div className="pet-type-badge">
          {pet.emoji} {pet.type}
        </div>

        {/* Redux Favourite Button */}
        <button
          type="button"
          className={`pet-favorite-btn ${isFavorite ? 'favorited' : ''}`}
          onClick={handleFavoriteToggle}
          aria-label={isFavorite ? `Remove ${pet.name} from favourites` : `Add ${pet.name} to favourites`}
          title={isFavorite ? 'Remove from favourites' : 'Add to favourites'}
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            backgroundColor: isFavorite ? '#fff0f0' : 'rgba(255, 255, 255, 0.92)',
            backdropFilter: 'blur(8px)',
            border: isFavorite ? '1.5px solid #ff4d6d' : '1px solid rgba(0,0,0,0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.2s ease',
            zIndex: 2
          }}
        >
          {<Heart size={19} fill={isFavorite ? 'currentColor' : 'none'} strokeWidth={2.2} />}
        </button>
        {pet.isLiveApi && (
          <div style={{
            position: 'absolute',
            bottom: '14px',
            left: '14px',
            background: 'rgba(217, 119, 87, 0.92)',
            backdropFilter: 'blur(8px)',
            color: '#ffffff',
            padding: '3px 10px',
            borderRadius: 'var(--radius-full)',
            fontSize: '11px',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
          }}>
            ⚡ Live API
          </div>
        )}

        <div className="pet-location-badge">
          📍 {pet.location}
        </div>
      </div>

      <div className="pet-card-body">
        <div className="pet-card-header">
          <h3 className="pet-card-name">{pet.name}</h3>
        </div>

        <p className="pet-card-breed">{pet.breed}</p>
        {(pet.tags || []).some((tag) => tag.toLowerCase() === 'vaccinated') && (
          <span className="vaccinated-badge"><ShieldCheck size={14} /> Vaccinated</span>
        )}

        <div className="pet-card-meta">
          <span>⏳ {pet.age}</span>
          <span>•</span>
          <span>⚧️ {pet.gender}</span>
        </div>

        {pet.tags && pet.tags.length > 0 && (
          <div className="pet-card-tags">
            {pet.tags.slice(0, 3).map((tag, idx) => (
              <span key={idx} className="pet-tag">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="pet-card-actions">
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => onViewDetails(pet)}
          >
            View Details
          </button>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => onAdopt(pet)}
          >
            Adopt Me ❤️
          </button>
        </div>
      </div>
    </div>
  );
}
