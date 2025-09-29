import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "../features/settingsSlice";
import UsersSlice from "../features/usersSlice";

export const store = configureStore({
  reducer: {
    settings: settingsReducer,
    users: UsersSlice,
  },
});
