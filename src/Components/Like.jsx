import React from "react";

export default function Like({ like, onClick }) {
  const classes = `bi bi-heart`;

  return (
    <>
      <i
        className={like ? classes + `-fill text-danger` : classes}
        onClick={onClick}
      ></i>
    </>
  );
}
