import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";


export const store = configureStore({
    //reducer can only update vale of state in store
    reducer:{
        counter:counterSlice
    }
})