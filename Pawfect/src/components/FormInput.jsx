import React from 'react';

export default function FormInput({
  label,
  id,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  required = false,
  as = 'input',
  rows,
  min,
  max,
  children,
  ...rest
}) {
  const inputId = id || name;
  const isError = Boolean(error);

  return (
    <div className="form-group">
      {label && (
        <label htmlFor={inputId}>
          {label} {required && <span style={{ color: '#dc2626' }}>*</span>}
        </label>
      )}

      {as === 'textarea' ? (
        <textarea
          id={inputId}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows || 4}
          className={isError ? 'input-error' : ''}
          aria-invalid={isError}
          aria-describedby={isError ? `${inputId}-error` : undefined}
          {...rest}
        />
      ) : as === 'select' ? (
        <select
          id={inputId}
          name={name}
          value={value}
          onChange={onChange}
          className={isError ? 'input-error' : ''}
          aria-invalid={isError}
          aria-describedby={isError ? `${inputId}-error` : undefined}
          {...rest}
        >
          {children}
        </select>
      ) : (
        <input
          id={inputId}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          min={min}
          max={max}
          className={isError ? 'input-error' : ''}
          aria-invalid={isError}
          aria-describedby={isError ? `${inputId}-error` : undefined}
          {...rest}
        />
      )}

      {error && (
        <span id={`${inputId}-error`} className="form-error" role="alert">
          ⚠️ {error}
        </span>
      )}
    </div>
  );
}
