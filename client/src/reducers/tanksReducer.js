import { FETCH_TANKS } from "../actions/weapons";

const initialState = {
  tanks: []
};

export default function tanksReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TANKS: {
      return { ...state, tanks: action.payload };
    }

    default:
      return state;
  }
}
