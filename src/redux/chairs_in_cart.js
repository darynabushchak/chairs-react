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
    updateQuantity: (state, action) => {
      const { chairId, change } = action.payload;
      const chairToUpdate = state.chairs.find((chair) => chair.id === chairId);

      if (chairToUpdate) {
        console.log("gfgdhdfhdg")
        chairToUpdate.quantity += change;
        console.log(chairToUpdate.quantity)
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = chairsInCartSlice.actions;

export default chairsInCartSlice.reducer;
