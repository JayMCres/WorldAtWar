import { combineReducers } from "redux";
import tanks from "./tanksReducer";

const rootReducer = combineReducers({
  tanks
});

export default rootReducer;
