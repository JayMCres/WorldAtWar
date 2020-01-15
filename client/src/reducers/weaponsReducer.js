import {
  FETCH_TANKS,
  FETCH_SHIPS,
  FETCH_PLANES,
  FETCH_ALL_WEAPONS,
  SET_PLANE_DETAILS,
  SET_WEAPONS_DETAILS
} from "../actions/weapons";

const initialState = {
  tanks: [],
  planes: [],
  ships: [],
  plane: {},
  combinedWeapons: [],
  weapons: []
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
    case SET_WEAPONS_DETAILS: {
      return { ...state, weapons: action.payload };
    }
    case FETCH_ALL_WEAPONS: {
      return {
        ...state,
        combinedWeapons: [
          {
            planes: action.payload[0],
            tanks: action.payload[1],
            ships: action.payload[2]
          }
        ]
      };
    }
    default:
      return state;
  }
}
