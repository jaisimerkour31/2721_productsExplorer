import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import FormInput from '../components/FormInput';

export default function AdoptionPage({ pets: propPets, selectedPet: propSelectedPet, preselectedPet }) {
  const { selectedPet: contextSelectedPet, pets: contextPets, clearSelectedPet } = useApp();

  const pets = propPets || contextPets;
  const activeSelectedPet = propSelectedPet || preselectedPet || contextSelectedPet;

  // Local state for controlled form inputs (Requirement 2)
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    pet: '',
    home: '',
    experience: 'Yes',
    reason: ''
  });

  // Local state for validation errors (Requirement 4)
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  // Sync selected pet from global Context API into the local form state
  useEffect(() => {
    if (activeSelectedPet) {
      const petName = typeof activeSelectedPet === 'object' ? activeSelectedPet.name : activeSelectedPet;
      setFormData((prev) => ({
        ...prev,
        pet: petName
      }));
      // Clear pet error if preselected
      setErrors((prev) => ({
        ...prev,
        pet: ''
      }));
    }
  }, [activeSelectedPet]);

  // Controlled change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    // Clear field-specific error as user edits
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validation function (Requirement 3)
  const validateForm = () => {
    const newErrors = {};

    // 1. Required Full Name (at least 2 characters)
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Full name must be at least 2 characters.';
    }

    // 2. Age: required, applicant must be at least 18
    if (!formData.age) {
      newErrors.age = 'Age is required.';
    } else {
      const ageNum = Number(formData.age);
      if (isNaN(ageNum) || ageNum < 18) {
        newErrors.age = 'Applicant must be at least 18 years old to adopt.';
      } else if (ageNum > 120) {
        newErrors.age = 'Please enter a valid age.';
      }
    }

    // 3. Email: required, valid format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address (e.g. name@example.com).';
    }

    // 4. Phone: required, valid format (at least 10 digits)
    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (phoneDigits.length < 10) {
      newErrors.phone = 'Please enter a valid phone number with at least 10 digits.';
    }

    // 5. Pet companion: required
    if (!formData.pet) {
      newErrors.pet = 'Please select a companion pet to adopt.';
    }

    // 6. Home: required
    if (!formData.home) {
      newErrors.home = 'Please select your housing / living space type.';
    }

    // 7. Reason: required (at least 10 characters)
    if (!formData.reason.trim()) {
      newErrors.reason = 'Please explain why you want to adopt this pet.';
    } else if (formData.reason.trim().length < 10) {
      newErrors.reason = 'Please provide a bit more detail (at least 10 characters).';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      // Prevent form submission when validation fails (Requirement 6)
      setErrors(validationErrors);
      return;
    }

    // Valid submission (Requirement 7)
    setErrors({});
    setSubmittedData({ ...formData });

    // Scroll to success message
    setTimeout(() => {
      const el = document.getElementById('adoption-success-alert');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setErrors({});
    if (clearSelectedPet) clearSelectedPet();
    setFormData({
      name: '',
      age: '',
      email: '',
      phone: '',
      pet: '',
      home: '',
      experience: 'Yes',
      reason: ''
    });
  };

  return (
    <div className="adopt-section">
      <div style={{ textAlign: 'center' }}>
        <div className="section-tag">
          Start Your Journey
        </div>
        <h1 className="section-heading">
          Give a Pet a Forever Home ❤️
        </h1>
        <p className="section-subtext">
          Fill in your details below to submit your official adoption inquiry. Our shelter adoption team will review and get in touch within 24 hours.
        </p>
      </div>

      <div className="adopt-form-card">
        {submittedData ? (
          <div id="adoption-success-alert" className="success-alert">
            <div style={{ fontSize: '48px', marginBottom: '12px' }}>🎉🐾</div>
            <h3>Application Submitted Successfully!</h3>
            <p style={{ fontSize: '16px', margin: '12px 0' }}>
              Thank you, <strong>{submittedData.name}</strong>! We have received your adoption application for{' '}
              <span style={{ color: 'var(--primary)', fontWeight: '800' }}>{submittedData.pet}</span>.
            </p>
            <p style={{ color: '#166534', fontSize: '14px', marginBottom: '24px' }}>
              A confirmation email has been sent to <strong>{submittedData.email}</strong>. Our shelter counselors will contact you via phone at <strong>{submittedData.phone}</strong>.
            </p>
            <button className="btn btn-primary btn-sm" onClick={handleReset}>
              Submit Another Application
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            {/* Display Selected Pet's Name & Details from Global Context */}
            {activeSelectedPet && (
              <div className="selected-pet-banner" style={{
                background: 'var(--primary-subtle)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-md)',
                padding: '16px 20px',
                marginBottom: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                flexWrap: 'wrap'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <span style={{ fontSize: '32px' }}>
                    {typeof activeSelectedPet === 'object' ? (activeSelectedPet.emoji || '🐾') : '🐾'}
                  </span>
                  <div>
                    <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.6px' }}>
                      Selected Companion for Adoption
                    </p>
                    <h3 style={{ margin: '2px 0 0 0', fontSize: '20px', color: 'var(--primary)', fontWeight: 800 }}>
                      {typeof activeSelectedPet === 'object' ? activeSelectedPet.name : activeSelectedPet}
                      {typeof activeSelectedPet === 'object' && activeSelectedPet.breed ? ` • ${activeSelectedPet.breed}` : ''}
                    </h3>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{
                    fontSize: '13px',
                    color: 'var(--primary)',
                    background: '#ffffff',
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid var(--border-light)',
                    fontWeight: 700
                  }}>
                    Selected Pet ❤️
                  </span>
                </div>
              </div>
            )}

            {/* Error summary banner if validation fails */}
            {Object.keys(errors).length > 0 && (
              <div className="error-banner" style={{ marginBottom: '24px' }}>
                ⚠️ Please correct the errors highlighted below before submitting.
              </div>
            )}

            {/* 1. Personal Information */}
            <h3 className="form-section-title">1. Personal Information</h3>

            <div className="form-group-row">
              <FormInput
                label="Full Name"
                id="name"
                name="name"
                placeholder="e.g. Rahul Sharma"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                required
              />

              <FormInput
                label="Age"
                id="age"
                name="age"
                type="number"
                min="18"
                placeholder="Minimum 18 years"
                value={formData.age}
                onChange={handleChange}
                error={errors.age}
                required
              />
            </div>

            <div className="form-group-row">
              <FormInput
                label="Email Address"
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                required
              />

              <FormInput
                label="Phone Number"
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
                required
              />
            </div>

            {/* 2. Pet & Living Arrangements */}
            <h3 className="form-section-title">2. Pet & Living Arrangements</h3>

            <div className="form-group-row">
              <FormInput
                as="select"
                label="Select Companion"
                id="pet"
                name="pet"
                value={formData.pet}
                onChange={handleChange}
                error={errors.pet}
                required
              >
                <option value="">-- Choose a pet to adopt --</option>
                {pets.map((p) => (
                  <option key={p.id} value={p.name}>
                    {p.emoji} {p.name} ({p.breed} - {p.type})
                  </option>
                ))}
              </FormInput>

              <FormInput
                as="select"
                label="Home / Living Space Type"
                id="home"
                name="home"
                value={formData.home}
                onChange={handleChange}
                error={errors.home}
                required
              >
                <option value="">-- Select housing type --</option>
                <option value="Apartment">Apartment / Flat</option>
                <option value="Independent House">Independent House</option>
                <option value="Villa with Garden">Villa with Fenced Yard / Garden</option>
                <option value="Farmhouse">Farmhouse / Country Home</option>
              </FormInput>
            </div>

            <div className="form-group">
              <label>Have you owned a pet before? *</label>
              <div className="radio-options-row">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="experience"
                    value="Yes"
                    checked={formData.experience === 'Yes'}
                    onChange={handleChange}
                  />
                  😊 Yes, I have experience
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="experience"
                    value="No"
                    checked={formData.experience === 'No'}
                    onChange={handleChange}
                  />
                  🐾 No, this will be my first pet
                </label>
              </div>
            </div>

            <FormInput
              as="textarea"
              label="Why do you want to adopt this pet?"
              id="reason"
              name="reason"
              rows={4}
              placeholder="Tell us a little about your family, daily routine, and why you feel ready to welcome this pet..."
              value={formData.reason}
              onChange={handleChange}
              error={errors.reason}
              required
            />

            <div style={{ textAlign: 'center', marginTop: '28px' }}>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', maxWidth: '340px' }}>
                Submit Application ❤️
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
