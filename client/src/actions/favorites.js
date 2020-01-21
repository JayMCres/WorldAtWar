import Users from "../api/UsersFetch";

export const FETCH_FAVORITES = "FETCH_FAVORITES";
export const CREATE_FAVORITE = "CREATE_FAVORITE";
export const FETCH_USER_FAVORITES = "FETCH_USER_FAVORITES";
export const SET_USER_FAVORITES = "SET_USER_FAVORITES";
export const SET_CREATED_FAVORITE = "SET_CREATED_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";

export const fetchFavorites = () => async dispatch => {
  const response = await Users.get();
  dispatch(setUserFavorites(...response.data));
};

export const setUserFavorites = data => async dispatch => {
  const favorites = await data.favorites;

  dispatch({
    type: SET_USER_FAVORITES,
    payload: favorites
  });
};

export function createFavorite(weapon, userId) {
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
      dispatch(setCreatedFavorite(newFav));
    });
  };
}

export const setCreatedFavorite = data => async dispatch => {
  const details = await data;
  dispatch({
    type: SET_CREATED_FAVORITE,
    payload: details
  });
};

export function deleteFavorite(favId) {
  return dispatch => {
    return fetch(`http://localhost:5000/api/delete_favorite/${favId}`, {
      method: "DELETE"
    }).then(() => {
      dispatch(fetchFavorites());
    });
  };
}
