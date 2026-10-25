import React from 'react';

export default function Hero({ onExplorePets, onFindMatch }) {
  return (
    <section className="hero-section">
      <div className="hero-inner">
        {/* Left Content */}
        <div className="hero-content">
          <div className="section-tag">
            🐾 Every Pet Deserves A Home
          </div>

          <h1>
            Find Your <br />
            <span className="hero-highlight">Perfect Companion</span>
          </h1>

          <p className="hero-desc">
            Give a loving, vaccinated pet a forever sanctuary and gain a faithful best friend for life. Start your heartfelt journey today.
          </p>

          <div className="hero-cta-group">
            <button className="btn btn-primary" onClick={onExplorePets}>
              Explore Pets 🐕
            </button>
            <button className="btn btn-secondary" onClick={onFindMatch}>
              Find My Match ❤️
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <h4>500+</h4>
              <p>Happy Adoptions</p>
            </div>
            <div className="stat-item">
              <h4>100%</h4>
              <p>Vet Checked</p>
            </div>
            <div className="stat-item">
              <h4>9</h4>
              <p>Waiting Nearby</p>
            </div>
          </div>
        </div>

        {/* Right Interactive Visual */}
        <div className="hero-visual">
          <div className="hero-card-bubble">
            <div className="hero-emoji-icon">🐶</div>
          </div>

          <div className="floating-badge badge-top">
            <span>✨</span> 100% Healthy & Vaccinated
          </div>

          <div className="floating-badge badge-bottom">
            <span>🏡</span> Ready for Adoption
          </div>
        </div>
      </div>
    </section>
  );
}
