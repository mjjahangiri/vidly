import React from "react";

export default function Button({ type, title }) {
  return (
    <button type={type} className="btn px-5">
      {title}
    </button>
  );
}
