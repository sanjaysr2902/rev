import {createSlice} from '@reduxjs/toolkit'
const todoSlice=createSlice({
    name:"todo",
    initialState:[],
    reducers:{
        addtodo:(state,action)=>{
            state.push(action.payload);},
        deletetodo:(state,action)=>{
              state.splice( action.payload,1 );
        }
    }
});
export const{addtodo,deletetodo}=todoSlice.actions
export default todoSlice.reducer