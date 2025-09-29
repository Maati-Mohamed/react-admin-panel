import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk("users/fetch", async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/users");
    return response.data;
  } catch (e) {
    console.log(e);
  }
});

const initialState = {
  users: [],
  error: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.users = [...action.payload];
    });
  },
});

export default usersSlice.reducer;
