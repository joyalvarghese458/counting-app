import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name:'counterApp',
    initialState:{
        value:0
    },
    reducers:{
        //actions are created inside this reducers key
        increment:(state,action)=>{
            state.value +=action.payload
        },
        decrement:(state,action)=>{
            state.value -=action.payload
        },
        reset:(state)=>{
            state.value = 0
        }
    }
})

export const{increment,decrement,reset} = counterSlice.actions

export default counterSlice.reducer