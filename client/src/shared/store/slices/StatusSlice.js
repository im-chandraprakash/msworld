import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axiosClient";

// const getUserData = createAsyncThunk("/" , async ()=>{

//     const response = await axiosClient("/");
//     // console.log(response.result);
// })

const statusSlice = createSlice({
    name:"statusSlice",
    initialState:{
        userProfileStatus:'null',
        lastRoute:'null'
    },
    reducers:{
        setLastRoute(state , action){
            state.lastRoute = action.payload;
        }
    }
})

export default statusSlice.reducer;
export const {setLastRoute} = statusSlice.actions; 