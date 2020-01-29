import { combineReducers } from "redux";
import weapons from "./weaponsReducer";
import weapon from "./weaponReducer";
import users from "./usersReducer";
import favorites from "./favoritesReducer";
import ship from "./shipReducer";

const rootReducer = combineReducers({
  weapon,
  weapons,
  users,
  favorites,
  ship
});

export default rootReducer;
