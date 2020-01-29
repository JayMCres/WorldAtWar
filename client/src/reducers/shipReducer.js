import { SET_SHIP_WEAPON, FETCH_SHIPS } from "../actions/ships";

const initialState = {
  ships: [],
  weapons: {}
};

export default function shipReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SHIPS: {
      return {
        ...state,
        ships: action.payload
      };
    }
    case SET_SHIP_WEAPON: {
      return {
        ...state,
        weapons: action.payload
      };
    }

    default:
      return state;
  }
}
