import {
  FETCH_FAVORITES,
  SET_USER_FAVORITES,
  SET_CREATED_FAVORITE
} from "../actions/favorites";

const initialState = {
  favorites: [],
  userFavorites: [],
  newFav: {}
};

export default function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_FAVORITES: {
      return { ...state, favorites: action.payload };
    }
    case SET_USER_FAVORITES: {
      return { ...state, userFavorites: action.payload };
    }
    case SET_CREATED_FAVORITE: {
      console.log("NEW FAV", action.payload);
      return { ...state, newFav: action.payload };
    }

    default:
      return state;
  }
}
