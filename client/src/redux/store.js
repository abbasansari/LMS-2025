import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../redux/rootReducer";
import { authApi } from "./api/authApi";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
