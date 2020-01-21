import {
  SET_WEAPONS_DETAILS,
  FIND_WEAPON,
  SET_FOUND_WEAPON
} from "../actions/weapons";

const initialState = {
  combinedWeapons: [],
  weapons: [],
  foundWeapon: []
};

export default function weaponsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_WEAPONS_DETAILS: {
      return { ...state, weapons: action.payload };
    }
    case SET_FOUND_WEAPON: {
      return { ...state, foundWeapon: action.payload };
    }
    // case FETCH_ALL_WEAPONS: {
    //   return {
    //     ...state,
    //     combinedWeapons: [
    //       {
    //         planes: action.payload[0],
    //         tanks: action.payload[1],
    //         ships: action.payload[2]
    //       }
    //     ]
    //   };
    // }
    default:
      return state;
  }
}
