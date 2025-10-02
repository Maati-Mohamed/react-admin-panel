import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginAsync = createAsyncThunk(
  "auth/login",
  async (credentials) => {
    const response = await axios.post(
      "https://fakestoreapi.com/auth/login",
      credentials
    );
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      console.log("Login success");
    });
  },
});

export default authSlice.reducer;
