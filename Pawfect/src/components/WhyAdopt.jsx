import React from 'react';

const REASONS = [
  {
    icon: '❤️',
    title: 'Give a Second Chance',
    desc: 'Each pet rescued brings unconditional love and gratitude. You save a life and give them the caring environment they truly deserve.'
  },
  {
    icon: '🏠',
    title: 'Find a Forever Friend',
    desc: 'Build an unbreakable bond with a devoted companion who will celebrate your happiest moments and comfort you on gloomy days.'
  },
  {
    icon: '🐾',
    title: 'Make a Real Difference',
    desc: 'Adoption reduces pet homelessness and supports ethical rescue organizations working tirelessly to protect vulnerable animals.'
  }
];

export default function WhyAdopt() {
  return (
    <section className="why-section">
      <div className="why-inner">
        <div className="section-tag">
          Why Adoption?
        </div>
        <h2 className="section-heading">
          Love Has No Breed ❤️
        </h2>
        <p className="section-subtext">
          When you adopt from Pawfect, you gain an endless source of joy and transform a vulnerable animal's world forever.
        </p>

        <div className="why-grid">
          {REASONS.map((item, index) => (
            <div key={index} className="why-card">
              <div className="why-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
