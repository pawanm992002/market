import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productName: "",
};

export const productSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    setAuth: (state, action) => {},
  },
});

export const { setAuth } = productSlice.actions;

export default productSlice.reducer;
