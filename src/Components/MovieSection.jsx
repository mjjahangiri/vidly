import React from 'react';

export default function MovieSection({ image, title, year, like }) {
  return (
    <div
      className="d-flex position-relative movie flex-column"
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '175px',
        height: '250px',
      }}
    >
      <div className="card-img-overlay d-none">
        <div className="d-flex w-100 px-4 flex-row position-absolute top-0 mt-4 align-items-center justify-content-between">
          <span>{like}</span>
          <span>{year}</span>
        </div>
        <div className="d-flex w-100 px-4 position-absolute bottom-0 mb-4 align-items-center justify-content-center">
          {title}
        </div>
      </div>
    </div>
  );
}
