import { FETCH_TANKS, FETCH_SHIPS, FETCH_PLANES } from "../actions/weapons";

const initialState = {
  tanks: [],
  planes: [],
  ships: []
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

    default:
      return state;
  }
}
