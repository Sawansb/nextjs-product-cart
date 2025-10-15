import { configureStore } from "@reduxjs/toolkit";
import { config } from "process";
import rootReducer from "./rootReducer";

export const store = configureStore({
    reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;