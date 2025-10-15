import { combineReducers } from "@reduxjs/toolkit";
import productSlice from "../products/productSlice";
import cartSlice from "../cart/cartSlice";

const rootReducer = combineReducers({
    products : productSlice,
    cart : cartSlice
    
})

export default rootReducer;