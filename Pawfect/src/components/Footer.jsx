import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer({ setCategoryFilter }) {
  const handleCategoryNav = (type) => {
    if (setCategoryFilter) setCategoryFilter(type);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="logo" style={{ marginBottom: '12px' }} onClick={scrollToTop}>
            <span className="logo-paw">🐾</span>
            Paw<span>fect</span>
          </Link>
          <p>
            Give love. Give a home. We connect shelter and rescued animals with compassionate humans across the country.
          </p>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li>
              <Link to="/" onClick={scrollToTop}>Home</Link>
            </li>
            <li>
              <Link to="/pets" onClick={() => { if (setCategoryFilter) setCategoryFilter('All'); scrollToTop(); }}>Find All Pets</Link>
            </li>
            <li>
              <Link to="/favorites" onClick={scrollToTop}>My Favourites ❤️</Link>
            </li>
            <li>
              <Link to="/match" onClick={scrollToTop}>Perfect Match Quiz</Link>
            </li>
            <li>
              <Link to="/adoption" onClick={scrollToTop}>Adoption Application</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Pet Categories</h4>
          <ul>
            <li>
              <Link to="/pets" onClick={() => handleCategoryNav('Dog')}>🐶 Adopt a Dog</Link>
            </li>
            <li>
              <Link to="/pets" onClick={() => handleCategoryNav('Cat')}>🐱 Adopt a Cat</Link>
            </li>
            <li>
              <Link to="/pets" onClick={() => handleCategoryNav('Rabbit')}>🐰 Adopt a Rabbit</Link>
            </li>
            <li>
              <Link to="/pets" onClick={() => handleCategoryNav('Bird')}>🐦 Adopt a Bird</Link>
            </li>
            <li>
              <Link to="/pets" onClick={() => handleCategoryNav('Hamster')}>🐹 Adopt a Hamster</Link>
            </li>
            <li>
              <Link to="/pets" onClick={() => handleCategoryNav('Turtle')}>🐢 Adopt a Turtle</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Support & Care</h4>
          <ul>
            <li>
              <Link to="/match" onClick={scrollToTop}>Matchmaking Guide</Link>
            </li>
            <li>
              <Link to="/pets" onClick={scrollToTop}>Essential Starter Kits</Link>
            </li>
            <li>
              <Link to="/adoption" onClick={scrollToTop}>Shelter Support</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Pawfect Pet Adoption. Made with ❤️ for furry friends.</p>
        <p>Every pet deserves a loving forever home.</p>
      </div>
    </footer>
  );
}
