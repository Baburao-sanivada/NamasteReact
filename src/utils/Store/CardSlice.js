import { createSlice, current } from "@reduxjs/toolkit";


const CardSlice=createSlice({
    name:"cart",
    initialState:{items:[]},
    reducers:{
        AddItems:(state,action)=>{
            state.items.push(action.payload);
        },
        ClearCart : (state,action)=>{
            console.log(current(state));
            state.items=[];
            console.log(current(state));
        }
    }
});
export const {AddItems,ClearCart}=CardSlice.actions;
export default CardSlice.reducer;