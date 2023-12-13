import { configureStore } from "@reduxjs/toolkit";
import chairsInCartReducer from "./chairs_in_cart";

export default configureStore({
  reducer: { chairsInCart: chairsInCartReducer },
});
