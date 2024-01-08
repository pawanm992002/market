import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../actions/authAction";

const initialState = {
  loggedIn: false,
  userId: "",
  role: "",
  fname: "",
  email: "",
};

export const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    setAuthData: (state, action) => {
      state.email = action.payload.email;
      state.fname = action.payload.fname;
      state.role = action.payload.role;
      state.userId = action.payload._id;
      state.loggedIn = action.payload.loggedIn;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.email = payload?.email;
        state.fname = payload?.fname;
        state.role = payload?.role;
        state.userId = payload?._id;
        state.loggedIn = true;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state = initialState;
      });
  },
});

export const { setAuthData } = authSlice.actions;

export default authSlice.reducer;
