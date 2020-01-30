import {
  FETCH_PLANES,
  FETCH_PLANE,
  SET_PLANE,
  SET_PLANE_DETAILS,
  SET_PLANE_ONE,
  SET_PLANE_TWO
} from "../actions/planes";

const initialState = {
  planes: [],
  plane: {},
  planeOne: {},
  planeTwo: {},

  detailPlane: {}
};

export default function planeReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PLANES: {
      return {
        ...state,
        planes: action.payload
      };
    }
    case FETCH_PLANE: {
      return { ...state, plane: action.payload };
    }
    case SET_PLANE: {
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
    case SET_PLANE_DETAILS: {
      return { ...state, detailPlane: action.payload };
    }

    default:
      return state;
  }
}
