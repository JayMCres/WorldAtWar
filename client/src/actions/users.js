import Users from "../api/UsersFetch";

export const FETCH_USERS = "FETCH_USERS";

export const fetchUsers = () => async dispatch => {
  const response = await Users.get();
  // console.log("response", response.data);
  dispatch({ type: FETCH_USERS, payload: response.data });
};
