import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const loginAsync = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    //const response = await axios.
    //TODO:
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    name: "",
    email: "",
    password: "",
  },
  reducers: {
    login: (currentState, actions) => {},
    register: (currentState, actions) => {},
    logout: (currentState, actions) => {},
  },
});
