import { createSlice } from "@reduxjs/toolkit";

export const chairsInCartSlice = createSlice({
  name: "chairsInCart",
  initialState: { chairs: [] },
  reducers: {
    addToCart: (state, action) => {
      state.chairs.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.chairs = state.chairs.filter(
        (chair) => chair.id !== action.payload
      );
    },
  },
});

export const {addToCart, removeFromCart} = chairsInCartSlice.actions;

export default chairsInCartSlice.reducer;