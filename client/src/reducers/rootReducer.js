import { combineReducers } from "redux";
import weapons from "./weaponsReducer";
import weapon from "./weaponReducer";

const rootReducer = combineReducers({
  weapon,
  weapons
});

export default rootReducer;
