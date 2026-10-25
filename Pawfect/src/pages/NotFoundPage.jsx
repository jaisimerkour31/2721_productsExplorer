import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div style={{
      maxWidth: '720px',
      margin: '60px auto 100px',
      padding: '60px 24px',
      textAlign: 'center',
      background: '#ffffff',
      borderRadius: 'var(--radius-lg)',
      border: '1.5px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-md)'
    }}>
      <div style={{ fontSize: '72px', marginBottom: '16px' }}>
        🐾 404
      </div>

      <div className="section-tag" style={{ margin: '0 auto 16px' }}>
        Page Not Found
      </div>

      <h1 className="section-heading" style={{ fontSize: '32px', marginBottom: '16px' }}>
        Oops! This page went chasing butterflies 🐶
      </h1>

      <p style={{
        maxWidth: '500px',
        margin: '0 auto 32px',
        color: 'var(--text-muted)',
        fontSize: '16px',
        lineHeight: 1.6
      }}>
        Our curious little companion wandered off, and this page seems to have disappeared. Check the address or head back to explore pets.
      </p>

      <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/" className="btn btn-primary" style={{ padding: '12px 28px' }}>
          Back to Home 🏡
        </Link>
        <Link to="/pets" className="btn btn-secondary" style={{ padding: '12px 28px' }}>
          Explore Available Pets 🐶
        </Link>
      </div>
    </div>
  );
}
