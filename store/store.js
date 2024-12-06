import { configureStore } from "@reduxjs/toolkit";
import { userWalaSlice } from "./slices/user";


export let merastore = configureStore({
    reducer: userWalaSlice.reducer 
});