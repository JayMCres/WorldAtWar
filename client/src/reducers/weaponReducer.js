import {
  FETCH_TANKS,
  FETCH_SHIPS,
  FETCH_PLANES,
  FETCH_PLANE,
  SET_PLANE_DETAILS,
  SET_PLANE_ONE,
  SET_PLANE_TWO
} from "../actions/weapon";

const initialState = {
  tanks: [],
  planes: [],
  ships: [],
  plane: {},
  planeOne: {},
  planeTwo: {}
};

export default function weaponReducer(state = initialState, action) {
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
    case FETCH_PLANE: {
      return { ...state, plane: action.payload };
    }
    case SET_PLANE_DETAILS: {
      return { ...state, plane: action.payload };
    }
    case SET_PLANE_ONE: {
      return {
        ...state,
        planeOne: action.payload
      };
    }
    case SET_PLANE_TWO: {
      return {
        ...state,
        planeTwo: action.payload
      };
    }

    default:
      return state;
  }
}
