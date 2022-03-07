import React from "react";

export default function Input({
  name,
  label,
  error,
  type,
  autoFocus,
  onChange,
}) {
  return (
    <div className="rtl mb-3">
      <label htmlFor="" className="form-label">
        {label}
      </label>
      <input
        name={name}
        onChange={onChange}
        type={type}
        autoFocus={autoFocus}
        className="form-control"
      />
      {error && (
        <div className="small py-1 m-0 alert alert-danger">{error}</div>
      )}
    </div>
  );
}
