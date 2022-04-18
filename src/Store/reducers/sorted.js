// Action type
const SORTED_ITEMS = "SortedItems";

// Reducer
export default function SortedReducer(
  sorted = { path: "title", order: "asc" },
  action
) {
  if (action.type === SORTED_ITEMS) {
    if (sorted.path === action.payload.newName) {
      const { path, order } = action.payload.lastName;
      const ord = order === "asc" ? "desc" : "asc";
      sorted = { path, order: ord };
    } else sorted = { path: action.payload.newName, order: "asc" };
    return sorted;
  } else return sorted;
}
