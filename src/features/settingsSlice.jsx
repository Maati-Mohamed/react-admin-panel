import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    siteName: "Admin Panel",
    siteEmail: "admin@gmail.com",
    siteLang: "ar",
  },
  reducers: {
    editWebsite: (state, action) => {
      const { siteName, siteEmail, siteLang } = action.payload;
      state.siteName = siteName;
      state.siteEmail = siteEmail;
      state.siteLang = siteLang;
    },
  },
});

export const { editWebsite } = settingsSlice.actions;
export default settingsSlice.reducer;
