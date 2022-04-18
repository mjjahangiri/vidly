import url from "../../config.json";
import jwtDecode from "jwt-decode";
import axios from "axios";

// Action type
const AUTH_USER = "AuthUser";

// Reducer
export default async function UsersReducer(user = "", action) {
  if (action.type === AUTH_USER) {
    const { apiUrl } = url;
    const jwt = localStorage.getItem("token");
    if (!jwt) return;
    const currentUser = jwtDecode(jwt);
    const { data: user } = await axios.get(`${apiUrl}/users/${currentUser.id}`);
    return user;
  }
  return user;
}
