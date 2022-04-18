// Action Type
const RESET_PAGE = "ResetPage";
const CHANGE_PAGE = "ChangePage";

// Reducer
export default function CurrentPageReducer(currentPage = 1, action) {
  if (action.type === RESET_PAGE) return (currentPage = 1);
  else if (action.type === CHANGE_PAGE) {
    currentPage = action.payload.page;
    return currentPage;
  } else return currentPage;
}
