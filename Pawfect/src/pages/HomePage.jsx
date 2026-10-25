import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import CategoryCards from '../components/CategoryCards';
import WhyAdopt from '../components/WhyAdopt';
import FeaturedPets from '../components/FeaturedPets';

export default function HomePage({
  pets,
  setActivePage,
  setCategoryFilter,
  onViewDetails,
  onAdopt
}) {
  const navigate = useNavigate();

  const handleCategorySelect = (category) => {
    if (setCategoryFilter) setCategoryFilter(category);
    if (setActivePage) setActivePage('pets');
    navigate('/pets');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExplorePets = () => {
    if (setCategoryFilter) setCategoryFilter('All');
    if (setActivePage) setActivePage('pets');
    navigate('/pets');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFindMatch = () => {
    if (setActivePage) setActivePage('match');
    navigate('/match');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="home-page-container">
      {/* 1. Hero */}
      <Hero
        onExplorePets={handleExplorePets}
        onFindMatch={handleFindMatch}
      />

      {/* 2. Category Selector */}
      <CategoryCards
        onSelectCategory={handleCategorySelect}
      />

      {/* 3. Why Adopt Information */}
      <WhyAdopt />

      {/* 4. Featured Pets Showcase */}
      <FeaturedPets
        pets={pets}
        onViewDetails={onViewDetails}
        onAdopt={onAdopt}
        onExploreAll={handleExplorePets}
      />
    </div>
  );
}
