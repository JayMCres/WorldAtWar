import {
  FETCH_TANKS,
  FETCH_SHIPS,
  FETCH_PLANES,
  FETCH_PLANE,
  SET_PLANE_DETAILS
} from "../actions/weapons";

const initialState = {
  tanks: [],
  planes: [],
  ships: [],
  plane: {}
};

export default function weaponsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TANKS: {
      return { ...state, tanks: action.payload };
    }
    case FETCH_SHIPS: {
      return { ...state, ships: action.payload };
    }
    case FETCH_PLANES: {
      return { ...state, planes: action.payload };
    }
    // case FETCH_PLANE: {
    //   return { ...state, plane: action.payload };
    // }
    case SET_PLANE_DETAILS: {
      return { ...state, plane: action.payload };
    }
    default:
      return state;
  }
}
