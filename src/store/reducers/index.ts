import { combineReducers } from "redux";
import repositoriesReducer from "./repositoriesReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
  repositories: repositoriesReducer,
  user: userReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
