import { combineReducers } from "@reduxjs/toolkit";
import productSlice from "../products/productSlice";

const rootReducer = combineReducers({
    products : productSlice
})

export default rootReducer;