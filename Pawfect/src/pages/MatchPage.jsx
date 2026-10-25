import React, { useState } from 'react';

export default function MatchPage({ pets, onViewDetails, onAdopt }) {
  const [selectedType, setSelectedType] = useState('');
  const [selectedActivity, setSelectedActivity] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [matchResult, setMatchResult] = useState(null);

  const handleCalculateMatch = () => {
    if (!selectedType || !selectedActivity || !selectedTime || !selectedExperience) {
      setErrorMessage('Please answer all 4 questions above to calculate your best companion match.');
      setMatchResult(null);
      return;
    }

    setErrorMessage('');

    let matchedPetName = '';

    if (selectedType === 'Dog') {
      matchedPetName = selectedActivity === 'High' ? 'Bruno' : 'Bella';
    } else if (selectedType === 'Cat') {
      matchedPetName = selectedActivity === 'Low' ? 'Luna' : 'Milo';
    } else if (selectedType === 'Rabbit') {
      matchedPetName = selectedActivity === 'Low' ? 'Snowy' : 'Hazel';
    } else if (selectedType === 'Bird') {
      matchedPetName = selectedActivity === 'High' ? 'Kiwi' : 'Sunny';
    } else if (selectedType === 'Hamster' || selectedType === 'Guinea Pig') {
      matchedPetName = selectedActivity === 'High' ? 'Pippin' : 'Peanut';
    } else if (selectedType === 'Turtle') {
      matchedPetName = selectedActivity === 'Low' ? 'Shelly' : 'Franklin';
    } else {
      matchedPetName = 'Bruno';
    }

    const foundPet = pets.find((p) => p.name === matchedPetName) || pets[0];
    setMatchResult(foundPet);

    // Smooth scroll down to result
    setTimeout(() => {
      const el = document.getElementById('match-result-container');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleReset = () => {
    setSelectedType('');
    setSelectedActivity('');
    setSelectedTime('');
    setSelectedExperience('');
    setErrorMessage('');
    setMatchResult(null);
  };

  return (
    <div className="match-section">
      <div style={{ textAlign: 'center' }}>
        <div className="section-tag">
          Find Your Companion
        </div>
        <h1 className="section-heading">
          Find Your Perfect Match ❤️
        </h1>
        <p className="section-subtext">
          Answer 4 quick lifestyle questions to discover which loving animal matches your energy and daily routine best.
        </p>
      </div>

      <div className="match-box-card">
        {/* Question 1: Type */}
        <div className="quiz-question-group">
          <h3>1. Which type of companion are you looking to adopt?</h3>
          <div className="quiz-options">
            {[
              { label: '🐶 Friendly Dog', value: 'Dog' },
              { label: '🐱 Loving Cat', value: 'Cat' },
              { label: '🐰 Gentle Rabbit', value: 'Rabbit' },
              { label: '🐦 Chirping Bird', value: 'Bird' },
              { label: '🐹 Tiny Hamster', value: 'Hamster' },
              { label: '🐢 Calm Turtle', value: 'Turtle' }
            ].map((opt) => (
              <button
                key={opt.value}
                className={`quiz-option-btn ${selectedType === opt.value ? 'selected' : ''}`}
                onClick={() => setSelectedType(opt.value)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Question 2: Activity */}
        <div className="quiz-question-group">
          <h3>2. What best describes your daily activity level?</h3>
          <div className="quiz-options">
            {[
              { label: '🌿 Relaxed / Low', value: 'Low' },
              { label: '⚡ Moderate / Balanced', value: 'Medium' },
              { label: '🏃 Very Active / High', value: 'High' }
            ].map((opt) => (
              <button
                key={opt.value}
                className={`quiz-option-btn ${selectedActivity === opt.value ? 'selected' : ''}`}
                onClick={() => setSelectedActivity(opt.value)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Question 3: Time Availability */}
        <div className="quiz-question-group">
          <h3>3. How much daily time can you dedicate to your pet?</h3>
          <div className="quiz-options">
            {[
              { label: '🕐 1-2 Hours (Light)', value: 'Low' },
              { label: '🕐 3-4 Hours (Moderate)', value: 'Medium' },
              { label: '🕐 5+ Hours (A Lot)', value: 'High' }
            ].map((opt) => (
              <button
                key={opt.value}
                className={`quiz-option-btn ${selectedTime === opt.value ? 'selected' : ''}`}
                onClick={() => setSelectedTime(opt.value)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Question 4: Prior Pet Experience */}
        <div className="quiz-question-group">
          <h3>4. Have you cared for a pet companion before?</h3>
          <div className="quiz-options">
            {[
              { label: '😊 Yes, experienced owner', value: 'Yes' },
              { label: '🐾 No, this is my first time', value: 'No' }
            ].map((opt) => (
              <button
                key={opt.value}
                className={`quiz-option-btn ${selectedExperience === opt.value ? 'selected' : ''}`}
                onClick={() => setSelectedExperience(opt.value)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <button className="btn btn-primary" onClick={handleCalculateMatch} style={{ minWidth: '220px' }}>
            Find My Match ❤️
          </button>
          {(selectedType || selectedActivity || selectedTime || selectedExperience) && (
            <button className="btn btn-secondary" onClick={handleReset} style={{ marginLeft: '12px' }}>
              Clear Answers
            </button>
          )}
        </div>

        {/* Validation error */}
        {errorMessage && (
          <div className="error-banner">
            ⚠️ {errorMessage}
          </div>
        )}

        {/* Match Result Display */}
        {matchResult && (
          <div id="match-result-container" className="match-result-card">
            <div className="match-result-emoji">{matchResult.emoji}</div>
            <h2>Your Perfect Match is {matchResult.name}! ❤️</h2>
            <h4>{matchResult.breed} • {matchResult.type}</h4>
            <p>
              Based on your lifestyle and preferences, <strong>{matchResult.name}</strong> is an incredible match for your home! ({matchResult.personality}, {matchResult.energy} Energy).
            </p>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                className="btn btn-secondary"
                onClick={() => onViewDetails(matchResult)}
              >
                View {matchResult.name}'s Profile
              </button>
              <button
                className="btn btn-primary"
                onClick={() => onAdopt(matchResult)}
              >
                Adopt {matchResult.name} Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
