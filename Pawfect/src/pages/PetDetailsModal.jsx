import React, { useEffect } from 'react';
import { PET_ESSENTIALS } from '../data/petsData';

export default function PetDetailsModal({ pet, onClose, onAdopt }) {
  // Prevent body scrolling when modal is active
  useEffect(() => {
    if (pet) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [pet]);

  if (!pet) return null;

  const essentials = PET_ESSENTIALS[pet.type] || [];

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        {/* Pet Image Banner */}
        <div className="modal-header-banner">
          <img
            src={pet.image}
            alt={pet.name}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80';
            }}
          />
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          <div className="section-tag" style={{ marginBottom: '8px' }}>
            Meet Your New Friend
          </div>

          <div className="modal-title-row">
            <div>
              <h2 style={{ fontSize: '32px' }}>
                {pet.name} <span style={{ fontSize: '28px' }}>{pet.emoji}</span>
              </h2>
              <p style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '18px' }}>
                {pet.breed} • {pet.type}
              </p>
            </div>
          </div>

          <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: '1.7', marginTop: '12px' }}>
            {pet.description}
          </p>

          {/* Facts Grid */}
          <div className="modal-facts-grid">
            <div className="fact-box">
              <p>Age</p>
              <p>{pet.age}</p>
            </div>
            <div className="fact-box">
              <p>Gender</p>
              <p>{pet.gender}</p>
            </div>
            <div className="fact-box">
              <p>Energy Level</p>
              <p>{pet.energy}</p>
            </div>
            <div className="fact-box">
              <p>Personality</p>
              <p>{pet.personality}</p>
            </div>
            <div className="fact-box">
              <p>Location</p>
              <p>📍 {pet.location}</p>
            </div>
          </div>

          {/* Recommended Essentials */}
          <h3 className="modal-essentials-title">
            Recommended Care Essentials for {pet.type}s 🛍️
          </h3>
          <div className="essentials-list">
            {essentials.map((item, idx) => (
              <div key={idx} className="essential-item-card">
                <span className="essential-icon">{item.icon}</span>
                <div className="essential-info">
                  <h5>{item.name}</h5>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="modal-actions">
            <button
              className="btn btn-primary"
              style={{ flex: 1 }}
              onClick={() => {
                onAdopt(pet);
                onClose();
              }}
            >
              Start Adoption for {pet.name} ❤️
            </button>
            <button className="btn btn-secondary" onClick={onClose}>
              Browse More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
