import { SET_USER_FAVORITES, SET_CREATED_FAVORITE } from "../actions/favorites";

const initialState = {
  favorites: [],
  newFav: {}
};

export default function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_FAVORITES: {
      return { ...state, favorites: action.payload };
    }
    case SET_CREATED_FAVORITE: {
      console.log("NEW FAV", action.payload);
      return { ...state, favorites: [...state.favorites, action.payload] };
    }

    default:
      return state;
  }
}
