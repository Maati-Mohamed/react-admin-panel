import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    siteName: "Admin Panel",
    siteEmail: "admin@gmail.com",
  },
  reducers: {
    editWebsite: (state, action) => {
      state.website = action.payload.website;
    },
  },
});

export const { editWebsite } = settingsSlice.actions;
export default settingsSlice.reducer;
