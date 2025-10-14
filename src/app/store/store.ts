import { configureStore } from "@reduxjs/toolkit";
import { config } from "process";
import rootReducer from "./rootReducer";

export const store = configureStore({
    reducer: rootReducer
})

export default store;  