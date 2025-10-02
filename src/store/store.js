import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "../features/settingsSlice";
import UsersSlice from "../features/usersSlice";
import authSlice from "../features/authSlice";

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    users: UsersSlice,
    auth: authSlice,
  },
});
