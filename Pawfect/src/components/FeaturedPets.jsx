import React from 'react';
import PetCard from './PetCard';

export default function FeaturedPets({ pets, onViewDetails, onAdopt, onExploreAll }) {
  // Pick 3 representative pets: Bruno, Luna, Snowy
  const featured = pets.filter((p) => ['Bruno', 'Luna', 'Snowy'].includes(p.name));

  return (
    <section className="featured-section">
      <div className="section-tag">
        Meet Them
      </div>
      <h2 className="section-heading">
        Featured Friends 🐾
      </h2>
      <p className="section-subtext">
        These loving animals have been waiting patiently. Click on any companion to learn more about their story.
      </p>

      <div className="pets-grid">
        {featured.map((pet) => (
          <PetCard
            key={pet.id}
            pet={pet}
            onViewDetails={onViewDetails}
            onAdopt={onAdopt}
          />
        ))}
      </div>

      <div style={{ marginTop: '48px' }}>
        <button className="btn btn-primary" onClick={onExploreAll}>
          View All Pets 🐾
        </button>
      </div>
    </section>
  );
}
