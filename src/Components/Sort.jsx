import React from "react";

export default function Sort({ sorted, name }) {
  return (
    <i
      className={`bi small align-items-center sort  d-flex bi-caret-${
        sorted.path === `${name}` && sorted.order === "asc"
          ? "down-fill "
          : sorted.path === `${name}` && sorted.order === "desc"
          ? "up-fill"
          : "d-none "
      }`}
    ></i>
  );
}
