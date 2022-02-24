import React from 'react';

export default function Button({ type, color, title }) {
  return (
    <button type={type} class={`btn px-5 btn-${color}`}>
      {title}
    </button>
  );
}
