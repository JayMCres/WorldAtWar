import Favorites from "../api/FavoritesFetch";

export const FETCH_FAVORITES = "FETCH_FAVORITES";
export const CREATE_FAVORITE = "CREATE_FAVORITE";
export const FETCH_USER_FAVORITES = "FETCH_USER_FAVORITES";
export const SET_USER_FAVORITES = "SET_USER_FAVORITES";
export const SET_CREATED_FAVORITE = "SET_CREATED_FAVORITE";

export const fetchFavorites = () => async dispatch => {
  const response = await Favorites.get();
  // console.log("response", response.data);
  dispatch({ type: FETCH_FAVORITES, payload: response.data });
};

export function fetchUserFavorites(id) {
  console.log("User id", id);
  return dispatch => {
    return fetch("http://localhost:5000/api/favorites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id })
    }).then(response => {
      let data = response.json();
      console.log("Data One", data);
      dispatch(setUserFavorites(data));
    });
  };
}

export const setUserFavorites = data => async dispatch => {
  const details = await data;

  dispatch({
    type: SET_USER_FAVORITES,
    payload: details
  });
};

export function createFavorite(weapon, userId) {
  console.log("weapon", weapon);
  return dispatch => {
    return fetch("http://localhost:5000/api/user_favorite/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        weapon,
        userId
      })
    }).then(response => {
      let newFav = response.json();
      console.log("Data One", newFav);
      dispatch(setCreatedFavorite(newFav));
    });
  };
}

export const setCreatedFavorite = data => async dispatch => {
  const details = await data;
  console.log("DETAILS", details);
  dispatch({
    type: SET_CREATED_FAVORITE,
    payload: details
  });
};
