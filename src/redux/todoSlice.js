import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:'todo',
    initialState:{
        arr:[]
    },
    reducers:{
        addItem(state,action){
            state.arr.push(action.payload)
        },
        removeItem(state,action){
             state.arr = state.arr.filter(state=>state.id!== action.payload.id)
        }
    }
})

export const {addItem,removeItem} = todoSlice.actions;
export default todoSlice.reducer;