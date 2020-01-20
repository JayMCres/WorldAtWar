import { combineReducers } from "redux";
import weapons from "./weaponsReducer";
import weapon from "./weaponReducer";
import users from "./usersReducer";
import favorites from "./favoritesReducer";

const rootReducer = combineReducers({
  weapon,
  weapons,
  users,
  favorites
});

export default rootReducer;
