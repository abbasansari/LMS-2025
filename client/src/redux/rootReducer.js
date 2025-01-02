import { combineReducers } from "redux";
import { authApi } from "./api/authApi";
import authReducer from "./slices/authSlice";

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  auth: authReducer,
});

export default rootReducer;
