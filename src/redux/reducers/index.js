import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";
import wishlistReducer from "./wishlistReducer";

export const reducers = combineReducers({
  products: productReducer,
  cartProducts: cartReducer,
  wishlistProducts: wishlistReducer,
});
