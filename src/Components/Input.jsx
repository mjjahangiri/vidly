import React from 'react';

export default function Input({ label, type }) {
  return (
    <div className="rtl mb-3">
      <label htmlFor="" className="form-label">
        {label}
      </label>
      <input type={type} className="form-control" />
    </div>
  );
}
