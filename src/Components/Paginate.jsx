import React from "react";
import _ from "lodash";

export function paginate(movies, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  console.log(movies);
  return _(movies).slice(startIndex).take(pageSize).value();
}
