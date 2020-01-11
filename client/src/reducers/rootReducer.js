import { combineReducers } from "redux";
import weapons from "./weaponsReducer";

const rootReducer = combineReducers({
  weapons
});

export default rootReducer;
