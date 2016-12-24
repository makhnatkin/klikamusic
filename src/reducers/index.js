import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import musicBox from "./musicBox";

// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  musicBox
});
