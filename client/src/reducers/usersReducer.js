import { FETCH_USERS } from "../actions/users";

const initialState = {
  users: []
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS: {
      return { ...state, users: action.payload };
    }

    default:
      return state;
  }
}
