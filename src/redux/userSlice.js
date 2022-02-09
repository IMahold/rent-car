import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
name:"user",
initialState:{
    value:'bob',
    pick_date: "",
    drop_date: "",
    pick_time: "",
    pick_location: "",
    drop_location: "",
    car_id: "8",
    price_h:0,
    price_d:82.78,
    price_m:0
},
reducers:{
   
    login: (state, action) => {
        state.value = action.payload;

    },
    logout: (state, action) => {
        state.value = ""
    },
    setPickLoc : (state, action) =>{
        state.pick_location = action.payload;
    },
    setDropLoc : (state, action) =>{
        state.drop_location = action.payload;
    },
    setPickDate : (state, action) =>{
        state.pick_date = action.payload;
    },
    setDropDate : (state, action) =>{
        state.drop_date = action.payload;
    }
}
});



export default userSlice.reducer;
export const {login, logout,setPickLoc, setDropLoc,setPickDate,setDropDate } = userSlice.actions;
export const selectUser = state => state.user.value
export const selectPicLoc = state => state.user.pick_location
export const selectDropLoc = state => state.user.drop_location
export const selectPickDate = state => state.user.pick_date
export const selectDropDate = state => state.user.drop_date