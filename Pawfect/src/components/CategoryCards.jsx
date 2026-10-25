import React from 'react';

const CATEGORIES = [
  {
    type: 'Dog',
    title: 'Dogs & Puppies',
    emoji: '🐶',
    desc: 'Loyal, playful, and energetic companions ready for adventures and cuddles.'
  },
  {
    type: 'Cat',
    title: 'Cats & Kittens',
    emoji: '🐱',
    desc: 'Calm, independent, and affectionate furry friends for peaceful homes.'
  },
  {
    type: 'Rabbit',
    title: 'Gentle Rabbits',
    emoji: '🐰',
    desc: 'Sweet, quiet, and gentle companions with adorable bouncy energy.'
  },
  {
    type: 'Bird',
    title: 'Chirping Birds',
    emoji: '🐦',
    desc: 'Vibrant, musical, and intelligent feathered friends that brighten every room.'
  },
  {
    type: 'Hamster',
    title: 'Tiny Hamsters',
    emoji: '🐹',
    desc: 'Curious, easy-care pocket companions full of comical cheek-stuffing charm.'
  },
  {
    type: 'Guinea Pig',
    title: 'Guinea Pigs',
    emoji: '🐹',
    desc: 'Social, vocal, and gentle companions who love lap cuddles and fresh greens.'
  },
  {
    type: 'Turtle',
    title: 'Calm Turtles',
    emoji: '🐢',
    desc: 'Peaceful, hardy, and serene lifelong companions who love sunny basking.'
  }
];

export default function CategoryCards({ onSelectCategory }) {
  return (
    <section className="categories-section">
      <div className="section-tag">
        Meet Our Friends
      </div>
      <h2 className="section-heading">
        Choose Your Companion
      </h2>
      <p className="section-subtext">
        Find a loving dog, cat, rabbit, bird, hamster, guinea pig, or turtle waiting with open paws for their forever family.
      </p>

      <div className="category-grid">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.type}
            className="category-card"
            onClick={() => onSelectCategory(cat.type)}
          >
            <div className="category-icon-wrap">
              {cat.emoji}
            </div>
            <h3>{cat.title}</h3>
            <p>{cat.desc}</p>
            <span className="category-link-btn">
              Explore {cat.type}s →
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
