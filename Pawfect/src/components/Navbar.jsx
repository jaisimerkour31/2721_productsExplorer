import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Sun, Moon } from 'lucide-react';

export default function Navbar({ setCategoryFilter }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('pawfect_theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    } catch {
      return 'light';
    }
  });

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('pawfect_theme', theme); } catch {}
  }, [theme]);

  const toggleTheme = () => setTheme((current) => current === 'dark' ? 'light' : 'dark');
  const favoritesCount = useSelector((state) => state.favorites.items.length);

  const closeMenuAndScrollTop = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePetsClick = () => {
    if (setCategoryFilter) {
      setCategoryFilter('All');
    }
    closeMenuAndScrollTop();
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Brand Logo */}
        <Link to="/" className="logo" onClick={closeMenuAndScrollTop}>
          <span className="logo-paw">🐾</span>
          Paw<span>fect</span>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        {/* Navigation Links */}
        <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            onClick={closeMenuAndScrollTop}
          >
            Home
          </NavLink>

          <NavLink
            to="/pets"
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            onClick={handlePetsClick}
          >
            Find a Pet
          </NavLink>

          <NavLink
            to="/match"
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            onClick={closeMenuAndScrollTop}
          >
            Perfect Match
          </NavLink>

          <NavLink
            to="/adoption"
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            onClick={closeMenuAndScrollTop}
          >
            Adopt
          </NavLink>

          {/* Favourite Pets Navigation Link with Live Redux Count */}
          <NavLink
            to="/favorites"
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            onClick={closeMenuAndScrollTop}
            title={`${favoritesCount} favourite ${favoritesCount === 1 ? 'pet' : 'pets'}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span>❤️</span>
            <span>Favourites ({favoritesCount})</span>
          </NavLink>

          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>

          <Link
            to="/adoption"
            className="btn nav-action-btn"
            onClick={closeMenuAndScrollTop}
          >
            Adopt Today ❤️
          </Link>
        </div>
      </div>
    </nav>
  );
}
